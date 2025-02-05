'use client';

import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose?: () => void;
}

const icons = {
  success: '✅',
  error: '❌',
  info: 'ℹ️',
};

const Toast: FC<ToastProps> = ({ message, type = 'info', onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) requestAnimationFrame(() => setTimeout(onClose, 300));
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={clsx(
        'fixed left-1/2 top-5 z-50 flex max-w-[80%] -translate-x-1/2 cursor-pointer items-center gap-2 rounded-lg border-l-8 bg-white px-6 py-4 text-dark-text shadow-lg transition-all duration-300',
        {
          'border-l-green-500': type === 'success',
          'border-l-red-500': type === 'error',
          'border-l-blue-500': type === 'info',
          'translate-y-[-20px] opacity-0': !visible,
          'translate-y-0 opacity-100': visible,
        }
      )}
      onClick={() => setVisible(false)}
    >
      <span>{icons[type]}</span>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
