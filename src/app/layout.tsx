import type { Metadata } from "next";
import { Bubblegum_Sans, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "./ThemeProvider";
import "./globals.css";

const themeInitScript = `
  (function () {
    var hour = new Date().getHours();
    var theme = "morning";
    if (hour >= 12 && hour < 17) theme = "afternoon";
    else if (hour >= 17 && hour < 20) theme = "evening";
    else if (hour >= 20 && hour < 24) theme = "night";
    else if (hour < 6) theme = "latenight";
    document.documentElement.dataset.theme = theme;
  })();
`;

const bubblegumSans = Bubblegum_Sans({
  weight: "400",
  style: "normal",
  variable: "--font-bubblegum-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  weight: "300",
  style: "normal",
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Varad Chaskar",
  description:
    "Hi! I'm Varad Chaskar. I am an aspiring software developer based out of India!",
  openGraph: {
    title: "Varad Chaskar",
    description: "Software Developer",
    images: [
      "https://res.cloudinary.com/dyfgrjqsw/image/upload/v1776610725/portfolio.png", // Link to your image
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varad Chaskar",
    description: "Software Developer",
    images: [
      "https://res.cloudinary.com/dyfgrjqsw/image/upload/v1776610725/portfolio.png", // Link to your image
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${bubblegumSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider />
        {children}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "fdec20af523b49f4a52f4a83907f6c66"}'
        ></script>
      </body>
    </html>
  );
}
