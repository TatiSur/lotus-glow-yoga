import { apiRoutes } from '@/shared/api/apiRoutes';
import { SessionType } from '../model/types';

interface GetSessionTypesResponse {
  data: [] | SessionType[];
  error: string | null;
}

export const getSessionTypes = async (): Promise<GetSessionTypesResponse> => {
  try {
    const response = await fetch(apiRoutes.sessionTypes, {
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch sessionTypes: ${response.statusText}`);
    }

    const data: SessionType[] = await response.json();

    const formattedData = data.map((sessionType) => ({
      ...sessionType,
      label: `${sessionType.label} | ${sessionType.instructorName} (${sessionType.sessionDuration}min) `,
    }));

    return { data: formattedData, error: null };
  } catch (error) {
    return { data: [], error: (error as Error).message };
  }
};
