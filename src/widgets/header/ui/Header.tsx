import { FC } from 'react';
import Logo from '@/shared/assets/icons/logo.svg';
import MenuIcon from '@/shared/assets/icons/menu.svg';

const Header: FC = () => {
  return (
    <header className="header main-container relative z-10 flex justify-between">
      <Logo className="mb-3 mt-8 md:mb-0" />
      <button className="flex size-full max-w-28 items-center justify-center rounded-b-full bg-primary">
        <MenuIcon className="w-[60px]" />
      </button>
    </header>
  );
};

export default Header;
