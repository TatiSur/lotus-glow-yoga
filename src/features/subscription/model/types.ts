export interface SubscriptionFormState {
  hasError: boolean;
  fieldError: string;
  message: string;
  values: {
    email: string;
  };
}
