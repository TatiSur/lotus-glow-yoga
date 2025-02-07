'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import CloseIcon from '@/shared/assets/icons/close.svg';

import { ToastType } from '@/features/toast';

interface ToastProps {
  message: string;
  type: ToastType;
  duration: number;
  onClose?: () => void;
}

const ICONS: Record<ToastType, string> = {
  success: '✅',
  error: '❌',
  info: 'ℹ️',
};

const Toast: FC<ToastProps> = ({ message, type, duration, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = useCallback(() => {
    setVisible(false);
    requestAnimationFrame(() => setTimeout(() => onClose?.(), 300));
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(handleClose, duration);
    return () => clearTimeout(timer);
  }, [handleClose, duration]);

  return (
    <div
      role="alert"
      aria-live="polite"
      inert={!visible}
      className={clsx(
        'flex gap-2 rounded-lg border-b-4 bg-taupe-dark pb-6 pl-4 pr-8 pt-8 text-light-text shadow-lg transition-all duration-300',
        {
          'border-b-green-500': type === 'success',
          'border-b-red-500': type === 'error',
          'border-b-blue-500': type === 'info',
          'translate-y-[-100%] opacity-0': !visible,
          'translate-y-0 opacity-100': visible,
        }
      )}
    >
      <button
        onClick={handleClose}
        className="absolute right-3 top-0 flex size-8 items-center justify-center rounded-b-full bg-primary shadow-md"
      >
        <CloseIcon className="size-4 text-dark-text" />
      </button>
      <span>{ICONS[type]}</span>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
