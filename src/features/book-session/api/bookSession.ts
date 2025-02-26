import { BookSessionData } from '../model/types';
import { apiRoutes } from '@/shared/api/apiRoutes';

export const bookSession = async (
  data: BookSessionData
): Promise<{ message: string }> => {
  const res = await fetch(apiRoutes.bookSession, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to book session');
  }

  return res.json();
};
