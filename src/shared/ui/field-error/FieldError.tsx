import { FC, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface FieldErrorProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const FieldError: FC<FieldErrorProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'absolute -bottom-3 left-10 translate-y-1/2 text-sm text-red-500',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default FieldError;
