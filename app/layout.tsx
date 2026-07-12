import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import MouseGlow from "@/src/components/mouseGlow";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Denvora Tech — Custom Software & Web Development",
    template: "%s | Denvora Tech",
  },
  description:
    "Denvora Tech delivers cutting-edge software development, mobile apps, and UI/UX design. Trusted by 85+ businesses worldwide with 350+ projects delivered.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "UI/UX design",
    "Next.js",
    "React",
    "custom software",
  ],
  openGraph: {
    title: "Denvora Tech — Custom Software & Web Development",
    description:
      "High-performing digital products and award-winning design. Trusted by 85+ repeat clients.",
    url: "https://denvora.tech",
    siteName: "Denvora Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Denvora Tech — Custom Software Solutions",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denvora Tech — Custom Software & Web Development",
    description:
      "High-performing digital products and award-winning design.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://denvora.tech",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Denvora Tech",
  url: "https://denvora.tech",
  logo: "https://denvora.tech/assets/logo.png",
  description:
    "Custom software development, mobile apps, and UI/UX design.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-807-707-7007",
    email: "info@denvora.tech",
    contactType: "customer service",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thunder Bay",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  sameAs: [
    "https://linkedin.com/company/denvora-tech",
    "https://github.com/denvora-tech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-background text-foreground transition-colors duration-300`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "var(--card)",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
            },
          }}
        />
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
