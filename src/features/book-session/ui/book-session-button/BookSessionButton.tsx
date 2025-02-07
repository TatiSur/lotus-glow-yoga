'use client';

import { ButtonHTMLAttributes, FC, useState } from 'react';
import { Button } from '@/shared/ui/button';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import clsx from 'clsx';
import BookSessionModal from '@/features/book-session/ui/book-session-modal/BookSessionModal';

type BookSessionButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BookSessionButton: FC<BookSessionButtonProps> = ({
  className,
  ...props
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Button
        onClick={toggleModal}
        className={clsx(
          'max-w-72 px-[20px] tracking-normal 2xs:tracking-[0.23em] xs:px-8',
          className
        )}
        {...props}
      >
        Book a Session
        <ArrowIcon />
      </Button>
      {showModal && <BookSessionModal onClose={toggleModal} />}
    </>
  );
};

export default BookSessionButton;
