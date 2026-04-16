"use client";

import { useEffect } from "react";

type ThemeName = "morning" | "afternoon" | "evening" | "night" | "latenight";

function getThemeFromHour(hour: number): ThemeName {
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 20) return "evening";
  if (hour >= 20 && hour < 24) return "night";
  return "latenight";
}

export default function ThemeProvider() {
  useEffect(() => {
    const applyTheme = () => {
      const theme = getThemeFromHour(new Date().getHours());
      document.documentElement.dataset.theme = theme;
    };

    applyTheme();

    const intervalId = window.setInterval(applyTheme, 60 * 1000);
    window.addEventListener("focus", applyTheme);
    document.addEventListener("visibilitychange", applyTheme);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", applyTheme);
      document.removeEventListener("visibilitychange", applyTheme);
    };
  }, []);

  return null;
}
