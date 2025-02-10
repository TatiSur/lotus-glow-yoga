import { FC } from 'react';
import Image from 'next/image';
import { Title } from '@/shared/ui/title';
import PhoneIcon from '@/shared/assets/icons/phone.svg';
import { BookSessionButton } from '@/features/book-session';

const HeroSection: FC = () => {
  return (
    <section className="hero main-container flex gap-5" id="home">
      <div className="h-100 flex flex-1 flex-col items-center justify-center py-10 md:items-start">
        <p className="mb-11 text-center text-xs font-bold tracking-[0.6em] text-primary xs:mb-9 md:text-start md:text-sm lg:text-base">
          LOTUS GLOW YOGA CLUB
        </p>
        <Title className="mb-[73px] md:mb-[52px]">
          FIND YOUR <br /> INNER <span className="text-primary">LIGHT</span>
        </Title>
        <div className="mb-20 max-w-[295px] text-center text-base font-normal text-light-text md:mb-[72px] md:max-w-full md:text-start md:text-xl">
          Illuminate your path with Lotus Glow – find balance and serenity
          through our organic yoga experience.
        </div>
        <div className="flex gap-2.5">
          <BookSessionButton />
          <a
            href="tel:3125557890"
            className="h-100 flex w-[87px] shrink-0 md:hidden"
            aria-label="Phone"
          >
            <PhoneIcon className="w-100 h-100" />
          </a>
        </div>
      </div>
      <div className="relative -mr-10 hidden flex-1 items-end md:flex lg:mr-0">
        <Image
          src="/images/hero-img.webp"
          alt="Woman in yoga pose"
          width={650}
          height={1043}
          className="absolute top-[-var(--height-header)] h-[calc(100%+var(--height-header))] w-auto object-cover"
          priority
        />
        <a
          href="tel:3125557890"
          className="relative block w-full rounded-tl-3xl rounded-tr-[50px] bg-primary py-7 pl-[116px] pr-12 text-center text-lg font-medium tracking-[0.23em] text-dark-text"
        >
          <span className="font-lato hidden font-bold xl:inline">
            GIVE US A CALL:
          </span>
          (312) 555-7890
          <PhoneIcon className="absolute bottom-0 left-0 h-full" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
