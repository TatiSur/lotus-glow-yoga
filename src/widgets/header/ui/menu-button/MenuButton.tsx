'use client';

import { FC, useState } from 'react';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import { SideMenu } from '../side-menu';

const MenuButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="flex size-full max-w-28 items-center justify-center rounded-b-full bg-primary"
      >
        <MenuIcon className="w-[60px]" />
      </button>
      {isOpen && <SideMenu onClose={toggleMenu} />}
    </>
  );
};

export default MenuButton;
