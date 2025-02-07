'use client';

import { FC, useState } from 'react';
import clsx from 'clsx';
import { CloseButton } from '@/shared/ui/close-button';
import { navLinks } from '@/shared/config';
import { useActiveSection } from '@/shared/hooks/useActiveSection';

interface SideMenuProps {
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const activeSection = useActiveSection();

  const handleClose = () => {
    setIsClosing(true);
  };

  return (
    <nav
      className={clsx(
        'fixed right-0 top-0 z-50 rounded-es-[160px] rounded-ss-[60px] bg-primary shadow-lg md:rounded-es-[300px]',
        isClosing ? 'animate-slide-out' : 'animate-slide-in'
      )}
      onAnimationEnd={() => isClosing && onClose()}
    >
      <CloseButton onClose={handleClose} className="right-[50px]" />
      <div className="pb-[300px] pl-[31px] pr-[59px] pt-[200px] md:px-[60px] md:pb-[236px] md:pt-[170px]">
        <ul className="flex flex-col gap-10">
          {navLinks.map(({ title, link }) => (
            <li
              key={title}
              className="w-[312px] border-b border-background pb-3 last:border-0 md:w-[533px] md:pb-5"
            >
              <a
                href={link}
                onClick={handleClose}
                className={clsx(
                  'font-lato text-3xl font-bold uppercase tracking-[0.06em] text-dark-text',
                  link.replace('#', '') === activeSection && 'text-light-text'
                )}
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
