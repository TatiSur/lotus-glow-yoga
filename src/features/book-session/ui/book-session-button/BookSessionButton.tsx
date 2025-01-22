'use client';

import { FC } from 'react';
import { Button } from '@/shared/ui/button';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import clsx from 'clsx';

interface BookSessionButtonProps {
  className?: string;
}

const BookSessionButton: FC<BookSessionButtonProps> = ({ className }) => {
  return (
    <Button
      onClick={() => console.log('Book a Session')}
      className={clsx('max-w-72 px-[20px] tracking-normal 2xs:tracking-[0.23em] xs:px-8', className)}
    >
      Book a Session
      <ArrowIcon />
    </Button>
  );
};

export default BookSessionButton;
