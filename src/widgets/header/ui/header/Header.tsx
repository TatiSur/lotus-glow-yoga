import { FC } from 'react';
import Logo from '@/shared/assets/icons/logo.svg';
import MenuButton from '../menu-button/MenuButton';

const Header: FC = () => {
  return (
    <header className="header main-container relative z-10 flex justify-between">
      <Logo className="mb-3 mt-8 md:mb-0" />
      <MenuButton className="header fixed right-5 z-50 2xs:right-10 lg:right-[60px]" />
    </header>
  );
};

export default Header;
