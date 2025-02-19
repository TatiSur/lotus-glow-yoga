import { apiRoutes } from '@/shared/api/apiRoutes';
import type { SessionType } from '@/entities/session-types';
import type { Instructor } from '../model/types';

interface InstructorWithSessionTypes
  extends Omit<Instructor, 'sessionTypeIds'> {
  sessionTypes: SessionType[];
}

interface InstructorsWithSessionTypesResponse {
  data: [] | InstructorWithSessionTypes[];
  error: string | null;
}

export const getInstructorsWithSessionTypes =
  async (): Promise<InstructorsWithSessionTypesResponse> => {
    try {
      const response = await fetch(apiRoutes.instructorsWithSessionTypes, {
        cache: 'force-cache',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch instructors: ${response.statusText}`);
      }

      const data: InstructorWithSessionTypes[] = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error('Error fetching instructors:', error);
      return { data: [], error: (error as Error).message };
    }
  };
