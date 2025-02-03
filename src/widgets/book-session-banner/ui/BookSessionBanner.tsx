'use client';

import { FC } from 'react';
import { Title } from '@/shared/ui/title';
import { BookSessionButton } from '@/features/book-session';
import { SECTION_IDS } from '@/shared/config';
import { useLazyBackground } from '@/shared/hooks/useLazyBackground';

const BookSessionBanner: FC = () => {
  const { ref, loaded } = useLazyBackground();

  return (
    <section id={SECTION_IDS.JOIN_THE_CLUB} className="main-container">
      <div
        ref={ref}
        className="relative min-h-[360px] overflow-hidden rounded-3xl bg-cover bg-center"
        style={{
          backgroundImage: loaded ? 'url(/images/banner-bg.webp)' : 'none',
          opacity: loaded ? 1 : 0,
        }}
      >
        <div className="relative flex flex-col items-center justify-center px-7 py-8 md:py-14">
          <Title type="h3" className="mb-3 !text-center md:mb-8 md:mt-5">
            THE LOTUS PATH TO YOUR <br className="hidden sm:inline" />{' '}
            <span className="text-primary">INNER HARMONY</span>
          </Title>
          <div className="mb-[50px] text-center text-xl text-light-text md:mb-[60px]">
            Join +1K Members in the Lotus Club
          </div>
          <BookSessionButton />
        </div>
      </div>
    </section>
  );
};

export default BookSessionBanner;
