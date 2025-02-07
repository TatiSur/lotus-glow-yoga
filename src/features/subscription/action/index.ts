'use server';

import { MESSAGES } from '@/shared/config/messages';
import { EMAIL_REGEX } from '@/shared/lib/validators';

import { subscribe } from '../api/subscribe';
import { SubscriptionFormState } from '../model/types';
import { initialSubscriptionState } from '../model/initialSubscriptionState';

export const subscribeAction = async (
  prevState: SubscriptionFormState,
  formData: FormData
): Promise<SubscriptionFormState> => {
  const email = formData.get('email')?.toString().trim() || '';

  const newState: SubscriptionFormState = {
    ...initialSubscriptionState,
    values: { email },
  };

  if (!email) {
    return {
      ...newState,
      fieldError: MESSAGES.requiredField,
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      ...newState,
      fieldError: MESSAGES.invalidEmail,
    };
  }

  try {
    await subscribe(email);

    return {
      ...newState,
      message: MESSAGES.success(email),
      values: { email: '' },
    };
  } catch (error) {
    return {
      ...newState,
      hasError: true,
      message: (error as Error).message || MESSAGES.serverError,
    };
  }
};
