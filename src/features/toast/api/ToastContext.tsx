'use client';

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { ToastList, ToastMessage, ToastType } from '@/features/toast';

interface ToastParams {
  message: string;
  type?: ToastType;
  duration?: number;
}

interface ToastContextType {
  addToast: (params: ToastParams) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = (id: number) =>
    setToasts((prev) => prev.filter((toast) => toast.id !== id));

  const addToast = useCallback(
    ({ message, type = 'info', duration = 3000 }: ToastParams) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type, duration }]);

      setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastList toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
