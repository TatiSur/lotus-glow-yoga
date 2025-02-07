'use client';

import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { CloseButton } from '@/shared/ui/close-button';
import Image from 'next/image';
import { Title } from '@/shared/ui/title';
import { createPortal } from 'react-dom';
import BookSessionForm from '../book-session-form/BookSessionForm';

interface BookSessionModalProps {
  onClose: () => void;
  className?: string;
}

const BookSessionModal: FC<BookSessionModalProps> = ({
  onClose,
  className,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Block scrolling when the modal is open
    document.body.classList.add('overflow-hidden');

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      // Remove the overflow-hidden class when the modal is closed
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
  };

  return createPortal(
    <div
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
          <BookSessionForm />
        </div>
      </div>
    </div>,
    document.body // Render modal in body
  );
};

export default BookSessionModal;
