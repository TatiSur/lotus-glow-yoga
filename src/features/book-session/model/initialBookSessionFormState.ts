import type { BookSessionFormState } from './types';

export const initialBookSessionFormState: BookSessionFormState = {
  hasError: false,
  fieldErrors: {},
  message: '',
  values: {
    fullName: '',
    email: '',
    phone: '',
    sessionTypeId: '',
    date: '',
    time: '',
  },
};
