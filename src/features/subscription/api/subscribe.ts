import { apiRoutes } from '@/shared/api/apiRoutes';

export const subscribe = async (
  email: string
): Promise<{ message: string }> => {
  const response = await fetch(apiRoutes.subscription, {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse?.message);
  }

  return response.json();
};
