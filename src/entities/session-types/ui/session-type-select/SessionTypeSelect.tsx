'use client';

import { FC } from 'react';
import type { SingleValue } from 'react-select';

import { CustomSelect } from '@/shared/ui/custom-select';
import type { SelectOption } from '@/shared/ui/custom-select/CustomSelect';
import type { SessionType } from '@/entities/session-types/model/types';

interface SessionTypeSelectProps {
  sessionTypes?: SessionType[];
  sessionType?: SessionType | null;
  onSelect?: (value: SingleValue<SelectOption>) => void;
  errorMessage?: string;
  onInputChange?: () => void;
}

const SessionTypeSelect: FC<SessionTypeSelectProps> = ({
  sessionTypes,
  sessionType,
  onSelect,
  errorMessage,
  onInputChange,
}) => {
  const handleSessionTypeChange = (
    newValue: SingleValue<SelectOption>
  ): void => {
    onSelect?.(newValue);
  };

  return (
    <CustomSelect
      name="sessionTypeId"
      label="Preferred Session Type"
      value={sessionType}
      onChange={handleSessionTypeChange}
      options={sessionTypes}
      errorMessage={errorMessage}
      onInputChange={onInputChange}
    />
  );
};

export default SessionTypeSelect;
