import { Moon, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isNewspaper = theme === "newspaper";

  const toggleTheme = () => {
    setTheme(isNewspaper ? "dark" : "newspaper");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={isNewspaper ? "Switch to dark mode" : "Switch to newspaper mode"}
      title={isNewspaper ? "Dark mode" : "Newspaper mode"}
      className="bg-background/50 backdrop-blur-md border-border/50 hover:bg-accent/20 hover:border-primary/50 transition-all duration-200"
    >
      {isNewspaper ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Newspaper className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
