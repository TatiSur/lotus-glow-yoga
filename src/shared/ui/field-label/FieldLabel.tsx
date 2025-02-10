import { FC, LabelHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: ReactNode;
}

const FieldLabel: FC<FieldLabelProps> = ({
  htmlFor,
  children,
  className,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
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
