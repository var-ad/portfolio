"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const setDynamicTheme = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 7) { 
        document.documentElement.style.setProperty("--background", "#FFF8E7");
        document.documentElement.style.setProperty("--foreground", "#FFB74D");
      } else if (hour >= 7 && hour < 11) {
        document.documentElement.style.setProperty("--background", "#F0F8FF");
        document.documentElement.style.setProperty("--foreground", "#4A90E2");
      } else if (hour >= 11 && hour < 14) {
        document.documentElement.style.setProperty("--background", "#FFFFFF");
        document.documentElement.style.setProperty("--foreground", "#2B6FFF");
      } else if (hour >= 14 && hour < 17) {
        document.documentElement.style.setProperty("--background", "#FFFDF2");
        document.documentElement.style.setProperty("--foreground", "#FF8C42");
      } else if (hour >= 17 && hour < 19) {
        document.documentElement.style.setProperty("--background", "#FFDAB3");
        document.documentElement.style.setProperty("--foreground", "#FF6F3C");
      } else if (hour >= 19 && hour < 21) {
        document.documentElement.style.setProperty("--background", "#FFD7A3");
        document.documentElement.style.setProperty("--foreground", "#FF7043");
      } else if (hour >= 21 && hour < 23) {
        document.documentElement.style.setProperty("--background", "#FFCC9E");
        document.documentElement.style.setProperty("--foreground", "#FF6A3A");
      } else {
        document.documentElement.style.setProperty("--background", "#FFB07C");
        document.documentElement.style.setProperty("--foreground", "#FF5A2C");
      }
    };

    setDynamicTheme();
    const id = setInterval(setDynamicTheme, 15 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <h1 className="text-3xl font-bold mb-6">Hey, I am Varad.</h1>
      <img
        src="/github-snake-dark.svg"
        alt="Snake animation"
        width={1000}
        height={1000}
      />
    </main>
  );
}