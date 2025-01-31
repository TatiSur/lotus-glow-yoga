import { FC } from 'react';
import Logo from '@/shared/assets/icons/logo.svg';
import { Title } from '@/shared/ui/title';
import { BookSessionButton } from '@/features/book-session';
import Social from '../social/Social';
import Contacts from '../contacts/Contacts';
import Navigation from '../navigation/Navigation';

const Footer: FC = () => {
  return (
    <footer className="main-container pt-[72px] md:pt-20">
      <div className="mb-14 flex flex-col flex-wrap items-center gap-y-[65px] md:flex-row md:items-start md:gap-y-12">
        <div className="shrink-0 basis-1/3 xl:basis-1/4">
          <Logo className="w-[214px]" />
        </div>
        <div className="flex shrink-0 basis-1/3 justify-center lg:justify-start xl:basis-1/4">
          <Contacts />
        </div>
        <div className="flex shrink-0 basis-1/3 justify-center pt-3 md:pt-0 xl:basis-1/4 xl:justify-start">
          <div>
            <Title type="h6" className="mb-[26px]">
              LOTUS GLOW
            </Title>
            <Navigation />
          </div>
        </div>
        <div className="flex shrink-0 basis-full flex-col items-center pt-3 md:flex-row md:pt-0 xl:basis-1/4 xl:flex-col xl:items-start">
          <Title type="h6" className="mb-10 basis-1/3 md:mb-0 md:hidden md:opacity-0 lg:block xl:mb-10 xl:opacity-100">
            FIND YOUR INNER LIGHT
          </Title>
          <Social className="mb-8 md:mb-0 lg:basis-1/3 xl:mb-8" />
          <BookSessionButton className="mx-auto max-w-[265px] lg:ml-auto lg:basis-1/3 xl:ml-0" />
        </div>
      </div>
      <hr className="mb-8 h-px w-full border-primary" />
      <div className="pb-14 text-center text-[10px] font-bold uppercase tracking-[0.33em] text-primary md:pb-12 md:text-xs lg:text-sm">
        LOTUS GLOW YOGA CLUB © ALL RIGHTS RESERVED {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
