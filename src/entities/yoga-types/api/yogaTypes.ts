import { apiRoutes } from '@/shared/api/apiRoutes';
import { YogaType } from '../model/types';

interface GetYogaTypesResponse {
  data: [] | YogaType[];
  error: string | null;
}

export const getYogaTypes = async (): Promise<GetYogaTypesResponse> => {
  try {
    const response = await fetch(apiRoutes.yogaTypes, {
      cache: 'force-cache',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch yogaTypes: ${response.statusText}`);
    }

    const data: YogaType[] = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching yogaTypes:', error);
    return { data: [], error: (error as Error).message };
  }
};
