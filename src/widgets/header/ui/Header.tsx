import { FC } from 'react';
import Logo from '@/shared/assets/icons/logo.svg';
import Menu from './menu/Menu';

const Header: FC = () => {
  return (
    <header className="header main-container relative z-10 flex justify-between">
      <Logo className="mb-3 mt-8 md:mb-0" />
      <Menu />
    </header>
  );
};

export default Header;
