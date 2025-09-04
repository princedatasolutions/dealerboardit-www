import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Board It! — Dealership Sales Board',
  description:
    'Board It! is the simple, real-time sales board for dealerships. Track deals, decode VINs, and see KPIs across store, complex, region, and group.',
  metadataBase: new URL('https://www.dealerboardit.com'),
  openGraph: {
    title: 'Board It! — Dealership Sales Board',
    description: 'Real-time sales boards, VIN decoding, and multi-store reporting.',
    url: 'https://www.dealerboardit.com',
    siteName: 'Board It!',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Board It!' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
