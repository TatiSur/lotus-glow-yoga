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

export interface SessionSchedule {
  // Index of days of the week (0 = Sunday, 1 = Monday, etc.)
  unavailableDays: number[];

  // Date as key, array of booked slots
  bookedSlots: Record<string, { time: string; booked: number; max: number }[]>;

  // Duration of the session in minutes
  sessionDuration: number;
  sessionHours: { start: string; end: string };
}

export type SessionScheduleDetails = Record<string, SessionSchedule>;
