import Providers from "./providers";
import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Schibsted_Grotesk, Geist } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Settings } from "@/components/settings";
import { portfolioConfig } from "@/data/portfolio-config";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const analyticsDomain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
const analyticsScriptUrl = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_URL;

const siteUrl = portfolioConfig.siteMetadata.siteUrl || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${portfolioConfig.personal.name} - ${portfolioConfig.personal.role}`,
    template: `%s – ${portfolioConfig.personal.name}`,
  },
  description: portfolioConfig.siteMetadata.description,
  openGraph: {
    title: `${portfolioConfig.personal.name} - ${portfolioConfig.personal.role}`,
    description: portfolioConfig.siteMetadata.description,
    url: siteUrl,
    siteName: portfolioConfig.personal.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.personal.name} - ${portfolioConfig.personal.role}`,
    description: portfolioConfig.siteMetadata.description,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/yuvraj.png", type: "image/png" },
    ],
    shortcut: "/yuvraj.png",
    apple: "/yuvraj.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        schibstedGrotesk.variable,
        GeistSans.variable,
        "font-sans antialiased",
      )}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/yuvraj.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/yuvraj.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/yuvraj.png?v=2" />
      </head>
      <body className={cn("font-display bg-theme-bg")}>
        <Settings />
        <Navbar />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
        {analyticsDomain && analyticsScriptUrl ? (
          <Script
            src={analyticsScriptUrl}
            data-domain={analyticsDomain}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
