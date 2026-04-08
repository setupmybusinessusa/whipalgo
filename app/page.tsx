import { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Divider from '@/components/ui/divider';
import HeroSection from '@/components/sections/hero';
import NotableCallsSection from '@/components/sections/notable-calls';
import HowItWorksSection from '@/components/sections/how-it-works';
import WhyDifferentSection from '@/components/sections/why-different';
import PerformanceSection from '@/components/sections/performance';
import PricingSection from '@/components/sections/pricing';
import AboutSection from '@/components/sections/about';
import FAQSection from '@/components/sections/faq';
import CTASection from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'WhipAlgo - Professional TradingView Indicators with AI Confirmation',
  description:
    'Advanced TradingView indicators featuring Whip Trend Core, Whip Trend Confirmation, and Whip Channel Pro. AI-powered confirmation signals for professional traders. Decision-support tools, not financial advice.',
  keywords: [
    'TradingView indicators',
    'WhipAlgo',
    'AI trading signals',
    'Whip Trend Core',
    'Whip Trend Confirmation',
    'Whip Channel Pro',
    'professional trading indicators',
    'technical analysis',
    'decision support tools',
    'trading signals',
    'market analysis',
    'ATR indicators',
    'volatility-based trading',
    'confirmation signals',
    'SMA validation',
    'range filter indicators',
  ],
  authors: [{ name: 'WhipAlgo' }],
  creator: 'WhipAlgo',
  publisher: 'WhipAlgo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://whipalgo.com'),
  alternates: {
    canonical: 'https://whipalgo.com',
  },
  openGraph: {
    title: 'WhipAlgo - Professional TradingView Indicators',
    description:
      'Advanced TradingView indicators with AI-powered confirmation signals for professional traders',
    url: 'https://whipalgo.com',
    siteName: 'WhipAlgo',
    images: [
      {
        url: 'https://whipalgo.com/images/whipalgo-main-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'WhipAlgo - Professional Trading Indicators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@whipalgo',
    creator: '@whipalgo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'WhipAlgo',
            description:
              'Professional TradingView indicators with AI-powered confirmation signals',
            url: 'https://whipalgo.com',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'TradingView',
            offers: {
              '@type': 'Offer',
              price: '29.99',
              priceCurrency: 'USD',
              billingDuration: 'P1M',
              name: 'Monthly Subscription',
            },
            creator: {
              '@type': 'Organization',
              name: 'WhipAlgo',
              email: 'support@whipalgo.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'WhipAlgo',
              email: 'support@whipalgo.com',
            },
          }),
        }}
      />

      <link rel="icon" href="/images/whipalgo-logo-icon.jpeg" />
      <link rel="apple-touch-icon" href="/images/whipalgo-logo-icon.jpeg" />

      <div className="grid-bg"></div>
      <Header />
      <main>
        <HeroSection />
        <NotableCallsSection />
        <Divider />
        <HowItWorksSection />
        <Divider />
        <WhyDifferentSection />
        <Divider />
        <PerformanceSection />
        <Divider />
        <PricingSection />
        <Divider />
        <AboutSection />
        <Divider />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
