import { FC } from 'react';
import clsx from 'clsx';

import CloseIcon from '@/shared/assets/icons/close.svg';

interface CloseButtonProps {
  onClose: () => void;
  className?: string;
}

const CloseButton: FC<CloseButtonProps> = ({ onClose, className }) => {
  return (
    <button
      onClick={onClose}
      className={clsx(
        'absolute flex h-40 w-28 items-center justify-center rounded-b-full bg-background text-end md:h-32 md:w-24',
        className
      )}
    >
      <CloseIcon className="size-9 md:size-7" />
    </button>
  );
};

export default CloseButton;
