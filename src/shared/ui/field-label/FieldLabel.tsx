import { FC, LabelHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const FieldLabel: FC<FieldLabelProps> = ({ children, className, ...props }) => {
  return (
    <label
      className={clsx(
        'absolute left-[42px] top-3 text-[10px] font-bold uppercase tracking-[0.3em] text-background',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default FieldLabel;
