import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WhipAlgo — Confirmation-Based Trading System',
  description:
    'WhipAlgo is a 3-indicator confirmation system for TradingView. Not signals. Not bots. A structured framework that filters noise and surfaces only high-quality entries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
