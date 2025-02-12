import { ButtonHTMLAttributes, FC, Ref } from 'react';

interface CustomDatePickerInputProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  onClick?: () => void;
  ref?: Ref<HTMLButtonElement>;
}

const CustomDatePickerInput: FC<CustomDatePickerInputProps> = ({
  value,
  onClick,
  ref,
  ...props
}) => {
  return (
    <button
      ref={ref}
      type="button"
      aria-haspopup="dialog"
      onClick={onClick}
      {...props}
    >
      {value || <span className="opacity-50">Select...</span>}
    </button>
  );
};

export default CustomDatePickerInput;
