"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

interface ThemeSyncProps {
  lightTheme?: string;
  darkTheme?: string;
  defaultAppearance?: string;
}

export function SanityThemeSync({ lightTheme, darkTheme, defaultAppearance }: ThemeSyncProps) {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (typeof window === "undefined" || !resolvedTheme) return;

    // Handle Dual Palette Sync based on current mode
    const themes = [
      "theme-sapphire-gold",
      "theme-emerald-night",
      "theme-royal-amethyst",
      "theme-crimson-slate",
      "theme-cyber-neon",
    ];

    const applyTheme = (currentTheme: string) => {
      // Determine which palette to apply
      const activePalette = currentTheme === "dark" ? darkTheme : lightTheme;

      // Remove all existing palettes
      themes.forEach((t) => document.documentElement.classList.remove(t));

      // Apply the correct palette
      if (activePalette) {
        document.documentElement.classList.add(activePalette);
      }
    };

    // Apply the theme immediately
    applyTheme(resolvedTheme);

    // Ensure theme palette is correctly re-applied on back/forward navigation (bfcache)
    const handlePageShow = () => {
      const storedTheme = localStorage.getItem("theme");
      const supportDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches === true;
      
      let currentTheme = "light";
      if (storedTheme) {
        currentTheme = storedTheme;
      } else if (defaultAppearance === "dark") {
        currentTheme = "dark";
      } else if (defaultAppearance === "light") {
        currentTheme = "light";
      } else {
        currentTheme = supportDarkMode ? "dark" : "light";
      }

      applyTheme(currentTheme);
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [lightTheme, darkTheme, resolvedTheme, defaultAppearance]);

  return null;
}
