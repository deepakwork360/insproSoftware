"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

interface ThemeSyncProps {
  lightTheme?: string;
  darkTheme?: string;
}

export function SanityThemeSync({ lightTheme, darkTheme }: ThemeSyncProps) {
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

    // Determine which palette to apply
    const activePalette = resolvedTheme === "dark" ? darkTheme : lightTheme;

    // Remove all existing palettes
    themes.forEach((t) => document.documentElement.classList.remove(t));

    // Apply the correct palette
    if (activePalette) {
      document.documentElement.classList.add(activePalette);
    }
  }, [lightTheme, darkTheme, resolvedTheme]);

  return null;
}
