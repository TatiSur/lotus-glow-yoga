'use client';

import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/ui/button';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';

type BookSessionButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BookSessionButton: FC<BookSessionButtonProps> = ({
  className,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/?modal=book-session', {
      scroll: false,
    });
  };

  return (
    <Button
      onClick={handleClick}
      className={clsx(
        'max-w-72 px-[20px] tracking-normal 2xs:tracking-[0.23em] xs:px-8',
        className
      )}
      {...props}
    >
      Book a Session
      <ArrowIcon />
    </Button>
  );
};

export default BookSessionButton;
