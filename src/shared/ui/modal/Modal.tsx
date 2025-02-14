'use client';

import { FC, ReactNode, useRef, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { CloseButton } from '@/shared/ui/close-button';
import { Title } from '@/shared/ui/title';
import { useModalAccessibility } from './useModalAccessibility';
import { useRouter } from 'next/navigation';
import bgImage from '@/shared/assets/images/modal-bg.webp';

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

const Modal: FC<ModalProps> = ({ children, onClose, className }) => {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClosing = () => {
    setIsClosing(true);
  };
  const handleClose = () => {
    if (!onClose) {
      router.push('/');
    } else {
      onClose();
    }
  };

  useModalAccessibility(modalRef, handleClosing);

  return (
    <div
      ref={modalRef}
      className={clsx(
        'fixed inset-0 z-50 flex h-screen items-center justify-center overflow-y-auto bg-black/50 py-4 backdrop-blur-md',
        isClosing ? 'animate-fade-out' : 'animate-fade-in'
      )}
      // Close modal when animation ends
      onAnimationEnd={() => isClosing && handleClose()}
    >
      <div
        className={clsx(
          'relative w-[95.5%] max-w-[1317px] self-start overflow-hidden rounded-[40px] bg-primary shadow-lg xs:w-[91.5%] md:self-center',
          className
        )}
      >
        <div className="relative h-[289px]">
          <Image
            src={bgImage}
            alt="Woman in yoga pose"
            placeholder="blur"
            className="absolute size-full object-cover"
          />
          <CloseButton
            onClose={handleClosing}
            className="absolute right-[35px] z-[101] md:right-[100px]"
          />
          <div className="relative text-center md:pl-20 md:text-start">
            <div className="pb-3 pt-[150px] text-sm tracking-[0.6em] text-primary md:pb-4 md:pt-[124px] md:text-base">
              JOIN THE LOTUS GLOW
            </div>
            <Title type="h2" className="text-center md:text-start">
              <span className="text-primary">BOOK</span> A SESSION
            </Title>
          </div>
        </div>
        <div className="px-8 pb-14 pt-8 md:px-20 md:pb-32 md:pt-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
