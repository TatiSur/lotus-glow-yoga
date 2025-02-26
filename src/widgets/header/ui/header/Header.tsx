import { FC } from 'react';
import Logo from '@/shared/assets/icons/logo.svg';
import MenuButton from '../menu-button/MenuButton';

const Header: FC = () => {
  return (
    <header className="header main-container relative z-10 flex justify-between">
      <Logo className="mb-3 mt-4 md:mb-0 md:mt-8" />
      <MenuButton className="header fixed right-5 z-50 2xs:right-10 lg:right-[60px] 2xl:inset-x-0 2xl:mx-auto 2xl:translate-x-[606px]" />
    </header>
  );
};

export default Header;
