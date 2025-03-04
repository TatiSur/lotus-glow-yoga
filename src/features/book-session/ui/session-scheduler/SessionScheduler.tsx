'use client';

import { FC, useEffect, useState } from 'react';
import { type SessionType, SessionTypeSelect } from '@/entities/session-types';
import DateTimePicker from '@/features/book-session/ui/date-time-picker/DateTimePicker';
import type { SingleValue } from 'react-select';
import type { SelectOption } from '@/shared/ui/custom-select/CustomSelect';
import type { SessionSchedule } from '../../model/types';
import { getSessionScheduleDetails } from '@/features/book-session/api/getSessionScheduleDetails';
import { useToast } from '@/features/toast';

interface SessionSchedulerProps {
  sessionTypes?: SessionType[];
  dateErrorMessage: string;
  timeErrorMessage: string;
  sessionTypeErrorMessage?: string;
  removeErrorMessage: (fieldName: string) => void;
}

const SessionScheduler: FC<SessionSchedulerProps> = ({
  sessionTypes,
  sessionTypeErrorMessage,
  timeErrorMessage,
  dateErrorMessage,
  removeErrorMessage,
}) => {
  const { addToast } = useToast();

  const [selectedSessionType, setSelectedSessionType] =
    useState<SessionType | null>(null);
  const [sessionSchedule, setSessionSchedule] =
    useState<SessionSchedule | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sessionTypeIds = sessionStorage.getItem('sessionTypeIds');
    if (sessionTypeIds) {
      sessionStorage.removeItem('sessionTypeIds');

      const sessionTypeIdsArr = JSON.parse(sessionTypeIds);

      const selectedSessionType = sessionTypes?.find(({ id }) =>
        sessionTypeIdsArr.includes(id)
      );

      if (selectedSessionType) setSelectedSessionType(selectedSessionType);
    }
  }, []);

  useEffect(() => {
    if (!selectedSessionType) {
      setSessionSchedule(null);
      return;
    }

    const fetchSessionSchedule = async () => {
      setLoading(true);
      try {
        const { data } = await getSessionScheduleDetails(
          selectedSessionType.id
        );

        setSessionSchedule(data);
      } catch (error) {
        setSessionSchedule(null);
        addToast({ message: (error as Error).message, type: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchSessionSchedule();
  }, [selectedSessionType]);

  const handleSelectSessionType = (newValue: SingleValue<SelectOption>) => {
    setSelectedSessionType(newValue as SessionType);
    setSessionSchedule(null);
  };

  return (
    <>
      <SessionTypeSelect
        sessionTypes={sessionTypes}
        sessionType={selectedSessionType}
        onSelect={handleSelectSessionType}
        errorMessage={sessionTypeErrorMessage}
        onInputChange={() => removeErrorMessage('sessionTypeId')}
      />

      <DateTimePicker
        reset={loading}
        loading={loading}
        dateErrorMessage={dateErrorMessage}
        timeErrorMessage={timeErrorMessage}
        disabledAll={!selectedSessionType || loading}
        onChangeDate={() => removeErrorMessage('date')}
        onChangeTime={() => removeErrorMessage('time')}
        unavailableDays={sessionSchedule?.unavailableDays || []}
        bookedDates={sessionSchedule?.bookedDates || {}}
        sessionTimes={sessionSchedule?.sessionTimes || {}}
      />
    </>
  );
};

export default SessionScheduler;
