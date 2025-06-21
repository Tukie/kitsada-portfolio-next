"use client";

import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="transition-colors duration-200"
      variant="ghost"
      size={"icon"}
    >
      {theme === "dark" ? (
        <IconSun className="h-6 w-6" />
      ) : (
        <IconMoon className="h-6 w-6" />
      )}
    </Button>
  );
}
