export interface BookSessionData {
  fullName: string;
  email: string;
  phone?: string;
  sessionTypeId: string;
  date: string;
  time: string;
}

export interface BookSessionFormState {
  hasError: boolean;
  fieldErrors: Partial<Record<keyof BookSessionData, string>>;
  message: string;
  values: BookSessionData;
}

export interface BookedDates {
  [date: string]: {
    fullyBooked: boolean;
    partlyBooked?: boolean;
  };
}

export interface SessionSchedule {
  // Index of days of the week (0 = Sunday, 1 = Monday, etc.)
  unavailableDays: number[];

  bookedDates: BookedDates;

  // Key is day of week (0 = Sunday, 1 = Monday, etc.), value is an array of available times in format 'HH:mm'
  sessionTimes: Record<number, string[]>;
}

export type SessionScheduleDetails = Record<string, SessionSchedule>;
