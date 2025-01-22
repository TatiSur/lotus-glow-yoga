'use client';

import { FC, useState } from 'react';
import CloseIcon from '@/shared/assets/icons/close.svg';
import clsx from 'clsx';

const menuItems = [
  { title: 'ABOUT THE LOTUS GLOW', link: '#about' },
  { title: 'THE LOTUS YOGA TYPES', link: '#yoga-types' },
  { title: 'LOTUS INSTRUCTORS', link: '#instructors' },
  { title: 'BOOK A SESSION', link: '#booking' },
];

interface SideMenuProps {
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  return (
    <nav
      className={clsx(
        'fixed right-0 top-0 z-50 rounded-es-[160px] rounded-ss-[60px] bg-primary md:rounded-es-[300px]',
        isClosing ? 'animate-slide-out' : 'animate-slide-in'
      )}
      onAnimationEnd={() => isClosing && onClose()}
      aria-label="Side navigation"
    >
      <button
        onClick={handleClose}
        className="absolute right-[50px] flex h-40 w-28 items-center justify-center rounded-b-full bg-background text-end md:h-32 md:w-24"
      >
        <CloseIcon className="size-9 md:size-7" />
      </button>
      <div className="pb-[300px] pl-[31px] pr-[59px] pt-[200px] md:px-[60px] md:pb-[236px] md:pt-[170px]">
        <ul className="flex flex-col gap-10">
          {menuItems.map(({ title, link }) => (
            <li key={title} className="w-[312px] border-b border-background pb-3 last:border-0 md:w-[533px] md:pb-5">
              <a
                href={link}
                onClick={handleClose}
                className="font-lato text-3xl font-bold uppercase tracking-[0.06em] text-dark-text"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideMenu;
