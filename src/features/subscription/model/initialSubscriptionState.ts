import { SubscriptionFormState } from './types';

export const initialSubscriptionState: SubscriptionFormState = {
  hasError: false,
  fieldError: '',
  message: '',
  values: {
    email: '',
  },
};
