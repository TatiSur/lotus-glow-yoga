import { Toast } from '@/features/toast/ui/toast';
import { FC } from 'react';
import { ToastMessage } from '@/features/toast';

interface ToastListProps {
  toasts: ToastMessage[];
  removeToast: (id: number) => void;
}

const ToastList: FC<ToastListProps> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed left-1/2 top-5 z-50 flex w-96 min-w-[30%] max-w-[80%] -translate-x-1/2 flex-col gap-2">
      {toasts.map(({ id, message, type, duration }) => (
        <Toast
          key={id}
          message={message}
          type={type}
          duration={duration}
          onClose={() => removeToast(id)}
        />
      ))}
    </div>
  );
};

export default ToastList;
