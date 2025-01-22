import { Header } from '@/widgets/header';
import { HeroSection } from '@/widgets/hero-section';
import { AboutUsSection } from '@/widgets/about-us-section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutUsSection />
      </main>
    </>
  );
}
