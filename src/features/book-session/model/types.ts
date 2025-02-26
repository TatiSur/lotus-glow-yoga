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
