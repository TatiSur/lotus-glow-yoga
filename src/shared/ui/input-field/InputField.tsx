import { FC, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import RequiredIcon from '@/shared/assets/icons/required-icon.svg';
import { FieldLabel } from '@/shared/ui/field-label';
import { FieldError } from '@/shared/ui/field-error';
import { FieldIcon } from '../field-icon';

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
  disabled,
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
        disabled={disabled}
        className={clsx(
          'base-field-styles',
          icon ? 'pr-20' : 'pr-10',
          errorMessage && 'base-field-error-styles',
          className
        )}
      />
      {icon && <FieldIcon icon={icon} disabled={disabled} />}
      {required && (
        <div className="pointer-events-none absolute right-8 top-3.5">
          <RequiredIcon
            className={clsx(
              'size-2',
              disabled ? 'text-gray-500' : 'text-light-text'
            )}
          />
        </div>
      )}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </div>
  );
};

export default InputField;
