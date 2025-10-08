"use client"
import { useEffect } from "react"

export default function ThemeProvider() {
    useEffect(() => {
        const hour = new Date().getHours();
        let theme = 'morning';
        if (hour >= 6 && hour < 12) theme = "morning";
        else if (hour >= 12 && hour < 17) theme = "afternoon";
        else if (hour >= 17 && hour < 20) theme = "evening";
        else if (hour >= 20 && hour < 24) theme = "night";
        else theme = "latenight";

        document.documentElement.dataset.theme = theme;
    }, []);

    return null;
}