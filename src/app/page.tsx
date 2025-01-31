import { Header } from '@/widgets/header';
import { HeroSection } from '@/widgets/hero-section';
import { AboutUsSection } from '@/widgets/about-us-section';
import { YogaTypesSection } from '@/widgets/yoga-types-section';
import { BookSessionBanner } from '@/widgets/book-session-banner';
import { InstructorsSection } from '@/widgets/instructors-section';
import { SubscriptionSection } from '@/widgets/subscription-section';
import { Footer } from '@/widgets/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutUsSection />
        <YogaTypesSection />
        <BookSessionBanner />
        <InstructorsSection />
        <SubscriptionSection />
      </main>
      <Footer />
    </>
  );
}
