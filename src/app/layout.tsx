import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ezekiel Ramadan | Kingdom Governance Philosophy",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  description: "Ezekiel Ramadan is a governance philosopher exploring leadership, institutional order, and stewardship through the lens of Kingdom first principles and structural law.",
  keywords: [
    "governance philosophy",
    "kingdom governance",
    "institutional leadership",
    "first principles governance",
    "structural law",
    "authority and stewardship",
    "leadership philosophy",
    "institutional order",
    "governance principles",
    "seven laws of governance",
  ],
  authors: [{ name: "Ezekiel Ramadan" }],
  creator: "Ezekiel Ramadan",
  publisher: "Ezekiel Ramadan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ezekielramadan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ezekiel Ramadan | Kingdom Governance Philosophy",
    description: "Exploring leadership, institutional order, and stewardship through Kingdom first principles and structural law.",
    url: "https://ezekielramadan.com",
    siteName: "Ezekiel Ramadan - Kingdom Governance Philosophy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kingdom Governance Philosophy - Ezekiel Ramadan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezekiel Ramadan | Kingdom Governance Philosophy",
    description: "Exploring leadership, institutional order, and stewardship through Kingdom first principles.",
    creator: "@ezekielramadan",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yandex: "",
  },
  other: {
    "msvalidate.01": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ezekiel Ramadan",
    jobTitle: "Governance Philosopher",
    description: "Exploring leadership, institutional order, and stewardship through Kingdom first principles and structural law",
    url: "https://ezekielramadan.com",
    sameAs: [
      "https://www.linkedin.com/in/eramadan/",
      "https://x.com/ezekielramadan",
      "https://youtube.com/@EzekielRamadan",
    ],
    knowsAbout: [
      "Governance Philosophy",
      "Kingdom Governance",
      "Institutional Leadership",
      "First Principles Thinking",
      "Structural Law",
      "Authority and Stewardship",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-X6VE47PZ5M"} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://ezekielramadan.com" />
      </head>
      <body suppressHydrationWarning className="min-h-screen antialiased font-sans">
        <ClientBody>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
