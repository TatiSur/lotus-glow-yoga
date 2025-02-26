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
      {isOpen ? (
        <SideMenu onClose={toggleMenu} />
      ) : (
        <button
          onClick={toggleMenu}
          className={clsx(
            'xs:w-22 flex h-full max-h-[130px] w-20 items-center justify-center rounded-b-full bg-primary shadow-xl md:w-24',
            className
          )}
          aria-label="Open menu"
        >
          <MenuIcon className="w-10 xs:w-12 md:w-[60px]" aria-hidden="true" />
        </button>
      )}
    </>
  );
};

export default MenuButton;
