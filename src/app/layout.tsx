// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import SiteHeader from "@/components/SiteHeader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // ensure headings/buttons can use heavier weights
});

export const metadata: Metadata = {
  title: "Board It! — Dealership Sales Board",
  description:
    "Board It! is the simple, real-time sales board for dealerships. Track deals, decode VINs, and see KPIs across store, complex, region, and group.",
  metadataBase: new URL("https://www.dealerboardit.com"),
  openGraph: {
    title: "Board It! — Dealership Sales Board",
    description:
      "Real-time sales boards, VIN decoding, and multi-store reporting.",
    url: "https://www.dealerboardit.com",
    siteName: "Board It!",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Board It!" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.ico" },
};

export const metadata = {
  metadataBase: new URL("https://dealerboardit.com"),
  title: {
    default:
      "Dealer Board It! | Digital Sales Board Software for Car Dealership Managers",
    template: "%s | Dealer Board It!",
  },
  description:
    "Ditch the dry-erase board. Dealer Board It! gives dealership managers real-time sales tracking, leaderboards, and forecasting — all in one dashboard.",
  openGraph: {
    type: "website",
    url: "https://dealerboardit.com",
    siteName: "Dealer Board It!",
    title: "Digital Sales Board Software for Car Dealership Managers",
    description:
      "Real-time sales tracking, leaderboards, and forecasting — all in one dashboard.",
    images: [
      {
        url: "/og-image.jpg", // replace with your actual OG image path if you have one
        width: 1200,
        height: 630,
        alt: "Dealer Board It! — Digital Sales Board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dealer Board It! — Digital Sales Board",
    description:
      "Real-time sales tracking, leaderboards, and forecasting for dealership managers.",
    images: ["/og-image.jpg"], // same image is fine
  },
  alternates: {
    canonical: "https://dealerboardit.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WJ5SEHZ9LD"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WJ5SEHZ9LD', { send_page_view: true });
  `}
        </Script>
        {/* Global sticky header on every route */}
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
