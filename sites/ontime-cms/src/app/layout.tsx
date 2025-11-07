import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthRecoveryRedirect from "@/components/AuthRecoveryRedirect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnTime CMS – Modern Plumbing Website With Instant Quotes",
  description: "A mobile-friendly plumbing website with built-in QuoteFlow and WhatsApp support.",
  metadataBase: new URL("https://ontimecms.demo"),
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "OnTime CMS – Modern Plumbing Website With Instant Quotes",
    description: "A mobile-friendly plumbing website with built-in QuoteFlow and WhatsApp support.",
    url: "https://ontimecms.demo",
    siteName: "OnTime CMS",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "OnTime CMS",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnTime CMS – Modern Plumbing Website With Instant Quotes",
    description: "A mobile-friendly plumbing website with built-in QuoteFlow and WhatsApp support.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthRecoveryRedirect />
        {children}
      </body>
    </html>
  );
}
