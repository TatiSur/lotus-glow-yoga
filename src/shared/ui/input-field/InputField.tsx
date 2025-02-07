import { FC, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import RequiredIcon from '@/shared/assets/icons/required-icon.svg';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  icon?: ReactNode;
  wrapperClassName?: string;
  labelClassName?: string;
  errorMessage?: string;
}

const InputField: FC<InputFieldProps> = ({
  label,
  icon,
  wrapperClassName,
  labelClassName,
  className,
  id,
  name,
  required,
  errorMessage,
  ...props
}) => {
  return (
    <div className={clsx('relative flex items-center', wrapperClassName)}>
      <label
        className={clsx(
          'absolute left-[42px] top-3 text-[10px] font-bold uppercase tracking-[0.3em] text-background',
          labelClassName
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        {...props}
        id={id}
        name={name}
        required={required}
        className={clsx(
          'w-full rounded-full border-2 border-light-text bg-transparent pb-3.5 pl-10 pt-6 text-light-text',
          'placeholder:text-light-text placeholder:opacity-50',
          'focus:outline-none focus:ring-2 focus:ring-primary',
          icon ? 'pr-20' : 'pr-10',
          errorMessage ? 'border-red-500 focus:ring-red-500' : '',
          className
        )}
      />
      {icon && <div className="absolute right-8 text-light-text">{icon}</div>}
      {required && (
        <div className="absolute right-8 top-3.5 text-light-text">
          <RequiredIcon className="size-2" />
        </div>
      )}
      {errorMessage && (
        <p className="absolute -bottom-3 left-10 translate-y-1/2 text-sm text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
