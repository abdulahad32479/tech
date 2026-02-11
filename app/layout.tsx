import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denvora Tech",
  description: "Denvora Tech provides innovative technology solutions, modern web development, and collaborative team management tools for businesses and startups.",
};


import MouseGlow from "@/src/components/mouseGlow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} light-mode bg-background text-foreground transition-colors duration-300`}>
        <Toaster />
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
