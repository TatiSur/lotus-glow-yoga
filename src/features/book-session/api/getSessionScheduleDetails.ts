import { apiRoutes } from '@/shared/api/apiRoutes';
import type { SessionSchedule } from '@/features/book-session';

export const getSessionScheduleDetails = async (
  sessionTypeId: string
): Promise<{ data: SessionSchedule | null; error: string | null }> => {
  const response = await fetch(apiRoutes.sessionScheduleDetails(sessionTypeId));

  return await response.json();
};
