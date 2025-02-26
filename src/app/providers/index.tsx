import { ReactNode } from 'react';
import { ToastProvider } from '@/features/toast';

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ToastProvider>{children}</ToastProvider>;
};
