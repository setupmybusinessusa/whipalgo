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

export default function Home() {
  return (
    <>
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
