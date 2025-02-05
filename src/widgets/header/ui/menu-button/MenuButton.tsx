'use client';

import { FC, useState } from 'react';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import { SideMenu } from '../side-menu';
import clsx from 'clsx';

interface MenuButtonProps {
  className?: string;
}

const MenuButton: FC<MenuButtonProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className={clsx(
          'flex size-full max-w-28 items-center justify-center rounded-b-full bg-primary shadow',
          className
        )}
        aria-label={isOpen ? 'Close menu' : 'Open menu'} // Accessible name
      >
        <MenuIcon className="w-[60px]" aria-hidden="true" />
      </button>
      {isOpen && <SideMenu onClose={toggleMenu} />}
    </>
  );
};

export default MenuButton;
