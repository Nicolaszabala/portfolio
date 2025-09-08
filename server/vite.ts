import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nanoid } from "nanoid";

// Configuración de Vite inline para desarrollo
const viteConfig = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "client", "src"),
      "@shared": path.resolve(process.cwd(), "shared"),
      "@assets": path.resolve(process.cwd(), "assets"),
    },
  },
  root: path.resolve(process.cwd(), "client"),
  build: {
    outDir: path.resolve(process.cwd(), "client", "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: false,
      allow: [process.cwd()],
    },
  },
});

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: express.Application, server: any) {
  const clientRoot = path.resolve(process.cwd(), "client");
  
  // Verificar que existe el directorio client
  if (!fs.existsSync(clientRoot)) {
    throw new Error(`Client directory not found: ${clientRoot}`);
  }

  // Verificar que existe index.html
  const indexPath = path.join(clientRoot, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.warn(`index.html not found at ${indexPath}, creating a basic one...`);
    const basicHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Developer Showcase</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
    fs.writeFileSync(indexPath, basicHtml);
  }

  const serverOptions = {
    middlewareMode: true as const,
    hmr: { server },
    watch: {
      usePolling: true,
    },
  };

  try {
    const vite = await createViteServer({
      ...viteConfig,
      configFile: false,
      customLogger: {
        ...viteLogger,
        error: (msg: string, options?: any) => {
          console.error('[Vite Error]:', msg);
          if (options) console.error(options);
        },
      },
      server: serverOptions,
      appType: "custom",
    });

    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;

      // Ignorar requests que no sean HTML (archivos estáticos)
      if (url.includes(".") && !url.endsWith(".html")) {
        return next();
      }

      try {
        const clientTemplate = path.resolve(process.cwd(), "client", "index.html");
        
        if (!fs.existsSync(clientTemplate)) {
          throw new Error(`Template file not found: ${clientTemplate}`);
        }

        let template = await fs.promises.readFile(clientTemplate, "utf-8");

        if (!template.trim()) {
          throw new Error("Template file is empty");
        }

        // CORREGIDO: Bypass de cache para main.tsx con mejor regex
        template = template.replace(
          /(<script[^>]+src=["'])([^"']*\/src\/main\.tsx)(["'][^>]*>)/g,
          `$1$2?v=${nanoid()}$3`
        );

        const page = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(page);
      } catch (e: any) {
        console.error('Error serving HTML:', e.message);
        if (vite) {
          vite.ssrFixStacktrace(e);
        }
        next(e);
      }
    });
  } catch (error) {
    console.error('Failed to setup Vite:', error);
    throw error;
  }
}

export function serveStatic(app: express.Application) {
  const distPath = path.resolve(process.cwd(), "client", "dist");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}