import { FC } from 'react';
import Image from 'next/image';
import { Title } from '@/shared/ui/title';
import { BookSessionButton } from '@/features/book-session';
import { SECTION_IDS } from '@/shared/config';

const BookSessionBanner: FC = () => {
  return (
    <section id={SECTION_IDS.JOIN_THE_CLUB} className="main-container">
      <div className="relative min-h-[360px]">
        <Image
          src="/images/banner-bg.webp"
          alt="Women stretching"
          width={1320}
          height={438}
          className="absolute inset-0 size-full rounded-3xl object-cover"
        />
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
