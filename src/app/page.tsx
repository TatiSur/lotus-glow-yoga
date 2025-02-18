import { Suspense } from 'react';

import { Header } from '@/widgets/header';
import { HeroSection } from '@/widgets/hero-section';
import { AboutUsSection } from '@/widgets/about-us-section';
import { YogaTypesSection } from '@/widgets/yoga-types-section';
import { BookSessionBanner } from '@/widgets/book-session-banner';
import { InstructorsSection } from '@/widgets/instructors-section';
import { SubscriptionSection } from '@/widgets/subscription-section';
import { Footer } from '@/widgets/footer';
import { BookSessionModal } from '@/features/book-session';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { modal } = await searchParams;

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
      <Suspense fallback={<div>Loading...</div>}>
        {modal === 'book-session' && <BookSessionModal />}
      </Suspense>
    </>
  );
}
