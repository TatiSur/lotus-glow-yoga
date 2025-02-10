import { FC } from 'react';
import Select, {
  ClassNamesConfig,
  GroupBase,
  Props as SelectProps,
} from 'react-select';
import clsx from 'clsx';
import { FieldLabel } from '@/shared/ui/field-label';
import { FieldError } from '@/shared/ui/field-error';

interface SelectOption {
  value: string;
  label: string;
}

// Extend Props interface `react-select`
interface CustomSelectProps<
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends SelectProps<Option, IsMulti, Group> {
  name: string;
  label?: string;
  errorMessage?: string;
}

const customClassNames: ClassNamesConfig<SelectOption> = {
  control: ({ isFocused }) =>
    clsx(
      'w-full appearance-none rounded-full border-2 border-light-text bg-transparent text-light-text outline-none',
      'pb-3.5 pl-10 pr-8 pt-6',
      'hover:ring-2 hover:ring-hover',
      { 'ring-2 ring-hover': isFocused }
    ),

  menu: () => 'rounded-lg bg-white shadow-lg border border-hover mt-1.5 py-2',

  option: ({ isSelected, isFocused }) =>
    clsx('cursor-pointer px-10 py-2 text-dark-text', {
      'bg-hover text-white': isSelected || isFocused,
    }),

  placeholder: () => 'text-light-text opacity-50',

  singleValue: () => 'text-light-text',
};

const CustomSelect: FC<CustomSelectProps> = ({
  id,
  name,
  label,
  errorMessage,
  isSearchable = false,
  ...props
}) => {
  const selectId = id || `select-${name}`;

  return (
    <div className="relative w-full">
      {label && <FieldLabel htmlFor={selectId}>{label}</FieldLabel>}
      <Select
        unstyled
        id={selectId}
        name={name}
        isSearchable={isSearchable}
        classNames={customClassNames}
        {...props}
      />
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </div>
  );
};

export default CustomSelect;
