'use client';

import { FC, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { CloseButton } from '@/shared/ui/close-button';
import { navLinks } from '@/shared/config';
import { useActiveSection } from '@/shared/hooks/useActiveSection';

interface SideMenuProps {
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isClosing, setIsClosing] = useState(false);

  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = ({ target }: Event) => {
      if (!menuRef.current || menuRef.current.contains(target as HTMLElement))
        return;

      handleClose();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
  };

  return (
    <nav
      ref={menuRef}
      className={clsx(
        'fixed right-0 top-0 z-50 h-auto max-h-screen min-h-[650px] w-[400px] max-w-[calc(100vw-10px)] rounded-es-[60px] rounded-ss-[60px] bg-primary shadow-lg md:h-[698px] md:min-h-[698px] md:w-[654px] md:rounded-es-[160px]',
        isClosing ? 'animate-slide-out' : 'animate-slide-in'
      )}
      onAnimationEnd={() => isClosing && onClose()}
    >
      <CloseButton onClose={handleClose} className="right-[50px]" />
      <div className="h-full pb-6 pl-8 pr-[50px] pt-[200px] md:px-[60px] md:pt-[170px]">
        <ul
          className="mx-auto flex flex-col gap-10 overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 224px)' }}
        >
          {navLinks.map(({ title, link }) => (
            <li
              key={title}
              className="border-b-2 border-background pb-3 last:border-0 md:w-[533px] md:pb-5"
            >
              <a
                href={link}
                onClick={handleClose}
                className={clsx(
                  'font-lato text-xl font-bold uppercase tracking-[0.06em] text-dark-text transition-all hover:opacity-80 md:text-3xl',
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
