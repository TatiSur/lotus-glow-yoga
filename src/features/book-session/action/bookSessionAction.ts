'use server';

import { BookSessionFormState } from '../model/types';
import { bookSessionSchema } from '../model/schema';
import { bookSession } from '../api/bookSession';
import { initialBookSessionFormState } from '../model/initialBookSessionFormState';

export const bookSessionAction = async (
  prevState: BookSessionFormState,
  formData: FormData
): Promise<BookSessionFormState> => {
  // Get data from formData
  const rawData = {
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    sessionTypeId: formData.get('sessionTypeId'),
    date: formData.get('date'),
    time: formData.get('time'),
  };

  // Validate data
  const result = bookSessionSchema.safeParse(rawData);
  if (!result.success) {
    const fieldErrors = result.error.format();

    return {
      hasError: true,
      fieldErrors: Object.fromEntries(
        Object.entries(fieldErrors).map(([key, val]) => [
          key,
          Array.isArray(val)
            ? val[0] || 'Invalid'
            : val._errors?.[0] || 'Invalid',
        ])
      ),
      message: 'Validation failed',
      values: prevState.values,
    };
  }

  // Send data to API
  try {
    const response = await bookSession(result.data);
    return {
      hasError: false,
      fieldErrors: {},
      message: response.message,
      values: initialBookSessionFormState.values,
    };
  } catch (error) {
    return {
      hasError: true,
      fieldErrors: {},
      message:
        (error as Error)?.message || 'Failed to book session. Try again later.',
      values: prevState.values,
    };
  }
};
