import { NextResponse } from 'next/server';
import { instructorsData } from '@/entities/instructor';
import { sessionTypes } from '@/entities/session-types';

export async function GET() {
  const data = instructorsData.map(({ sessionTypeIds, ...instructor }) => ({
    ...instructor,
    sessionTypes: sessionTypeIds.map((sessionTypeId) =>
      sessionTypes.find(({ id }) => id === sessionTypeId)
    ),
  }));

  return NextResponse.json(data);
}
