'use client';

import { FC, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import Image from 'next/image';
import { Title } from '@/shared/ui/title';
import { CloseButton } from '@/shared/ui/close-button';
import BookSessionForm from '../book-session-form/BookSessionForm';
import { useModalAccessibility } from './useModalAccessibility';

interface BookSessionModalProps {
  onClose: () => void;
  sessionType?: string;
  className?: string;
}

const BookSessionModal: FC<BookSessionModalProps> = ({
  onClose,
  sessionType,
  className,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsClosing(true);
  };

  useModalAccessibility(modalRef, handleClose);

  return createPortal(
    <div
      ref={modalRef}
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md',
        isClosing ? 'animate-fade-out' : 'animate-fade-in'
      )}
      // Close modal when animation ends
      onAnimationEnd={() => isClosing && onClose()}
    >
      <div
        className={clsx(
          'relative w-[95.5%] max-w-[1317px] overflow-hidden rounded-[40px] bg-primary shadow-lg xs:w-[91.5%]',
          className
        )}
      >
        <div className="relative h-[289px]">
          {/* Background image */}
          <Image
            src={'/images/background.webp'}
            alt="Woman in yoga pose"
            width={917}
            height={289}
            className="absolute size-full object-cover"
          />
          {/* Close button */}
          <CloseButton
            onClose={handleClose}
            className="absolute right-[35px] z-[101] h-28 md:right-[100px]"
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

        {/* Content */}
        <div className="px-8 pb-14 pt-8 md:px-20 md:pb-32 md:pt-12">
          <BookSessionForm sessionType={sessionType} />
        </div>
      </div>
    </div>,
    document.body // Render modal in body
  );
};

export default BookSessionModal;
