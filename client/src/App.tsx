import { Switch, Route } from "wouter";
import { MotionConfig, MotionGlobalConfig } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import Portfolio from "@/pages/portfolio";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="*" component={Portfolio} />
    </Switch>
  );
}

/* En modo periodico el sitio no se mueve */
function MotionPolicy({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const isNewspaper = theme === "newspaper";

  /* Cada animacion de framer-motion salta directo a su keyframe final.
     Se asigna en el render, no en un efecto, para que los hijos que montan
     en este mismo commit ya no animen. */
  MotionGlobalConfig.skipAnimations = isNewspaper;

  return (
    <MotionConfig reducedMotion={isNewspaper ? "always" : "never"}>
      {children}
    </MotionConfig>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <MotionPolicy>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <div className="overflow-x-hidden">
              <Router />
              <Toaster />
            </div>
          </TooltipProvider>
        </QueryClientProvider>
      </MotionPolicy>
    </ThemeProvider>
  );
}

export default App;