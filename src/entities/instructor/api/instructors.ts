import { apiRoutes } from '@/shared/api/apiRoutes';
import { Instructor } from '../model/types';

interface GetInstructorsResponse {
  data: [] | Instructor[];
  error: string | null;
}

export const getInstructors = async (): Promise<GetInstructorsResponse> => {
  try {
    const response = await fetch(apiRoutes.instructors, {
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch instructors: ${response.statusText}`);
    }

    const data: Instructor[] = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching instructors:', error);
    return { data: [], error: (error as Error).message };
  }
};
