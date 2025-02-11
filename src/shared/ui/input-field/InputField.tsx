import { FC, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import RequiredIcon from '@/shared/assets/icons/required-icon.svg';
import { FieldLabel } from '@/shared/ui/field-label';
import { FieldError } from '@/shared/ui/field-error';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
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
      <FieldLabel className={labelClassName} htmlFor={id || `${name}-input`}>
        {label}
      </FieldLabel>
      <input
        {...props}
        id={id}
        name={name}
        required={required}
        className={clsx(
          'w-full rounded-full border-2 border-light-text bg-transparent pb-3.5 pl-10 pt-6 text-light-text',
          'placeholder:text-light-text placeholder:opacity-50',
          'focus:outline-none focus:ring-2 focus:ring-hover',
          'hover:ring-2 hover:ring-hover',
          icon ? 'pr-20' : 'pr-10',
          errorMessage ? 'border-red-500' : '',
          className
        )}
      />
      {icon && (
        <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-light-text">
          {icon}
        </div>
      )}
      {required && (
        <div className="pointer-events-none absolute right-8 top-3.5 text-light-text">
          <RequiredIcon className="size-2" />
        </div>
      )}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </div>
  );
};

export default InputField;
