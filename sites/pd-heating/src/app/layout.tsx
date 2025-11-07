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
  title: "PD Heating & Plumbing – Fast Quotes & Trusted Local Plumbers",
  description: "Instant quotes, WhatsApp support, and a modern website built for PD Heating & Plumbing.",
  metadataBase: new URL("https://pdheating.demo"),
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "PD Heating & Plumbing – Fast Quotes & Trusted Local Plumbers",
    description: "Instant quotes, WhatsApp support, and a modern website built for PD Heating & Plumbing.",
    url: "https://pdheating.demo",
    siteName: "PD Heating & Plumbing",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "PD Heating & Plumbing",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PD Heating & Plumbing – Fast Quotes & Trusted Local Plumbers",
    description: "Instant quotes, WhatsApp support, and a modern website built for PD Heating & Plumbing.",
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
