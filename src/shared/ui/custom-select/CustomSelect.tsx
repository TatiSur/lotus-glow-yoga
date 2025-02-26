import { FC } from 'react';
import Select, {
  ClassNamesConfig,
  GroupBase,
  Props as SelectProps,
} from 'react-select';
import clsx from 'clsx';
import { FieldLabel } from '@/shared/ui/field-label';
import { FieldError } from '@/shared/ui/field-error';

export interface SelectOption {
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

const customClassNames = (
  isError: boolean
): ClassNamesConfig<SelectOption> => ({
  control: ({ isFocused, isDisabled }) =>
    clsx('base-field-styles pr-8', {
      'ring-2 ring-hover': isFocused,
      'base-field-error-styles': isError,
      'border-gray-500/50 bg-gray-500/50 text-gray-500': isDisabled,
    }),

  menu: () =>
    'rounded-lg bg-background shadow-lg border border-2 border-hover mt-1.5 py-2',

  option: ({ isSelected, isFocused }) =>
    clsx('cursor-pointer px-10 py-2 text-light-text', {
      'bg-hover font-bold hover:bg-primary': isSelected,
      'bg-primary': isFocused,
    }),

  placeholder: () => 'text-light-text opacity-50',

  singleValue: () => 'text-light-text',
});

const CustomSelect: FC<CustomSelectProps> = ({
  name,
  label,
  errorMessage = '',
  isSearchable = false,
  ...props
}) => {
  const selectId = `select-${name}`;

  return (
    <div className="relative w-full">
      {label && <FieldLabel>{label}</FieldLabel>}
      <Select
        unstyled
        instanceId={selectId}
        name={name}
        isSearchable={isSearchable}
        classNames={customClassNames(!!errorMessage)}
        {...props}
      />
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </div>
  );
};

export default CustomSelect;
