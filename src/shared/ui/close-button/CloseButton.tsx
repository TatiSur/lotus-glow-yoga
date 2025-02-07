import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

import CloseIcon from '@/shared/assets/icons/close.svg';

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClose: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({ onClose, className, ...props }) => {
  return (
    <button
      onClick={onClose}
      className={clsx(
        'absolute flex h-40 w-28 items-center justify-center rounded-b-full bg-background text-end md:h-32 md:w-24',
        className
      )}
      {...props}
    >
      <CloseIcon className="size-9 text-primary md:size-7" />
    </button>
  );
};

export default CloseButton;
