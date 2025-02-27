import { NextResponse } from 'next/server';
import type { SessionSchedule } from '@/features/book-session';
import { sessionScheduleDetails } from '@/features/book-session';

export async function GET(
  request: Request
): Promise<
  NextResponse<{ data: SessionSchedule | null; error: string | null }>
> {
  try {
    const { searchParams } = new URL(request.url);
    const sessionTypeId = searchParams.get('sessionTypeId');

    if (!sessionTypeId || !sessionScheduleDetails[sessionTypeId]) {
      return NextResponse.json(
        { error: 'Invalid sessionTypeId', data: null },
        { status: 400 }
      );
    }

    return NextResponse.json({
      data: sessionScheduleDetails[sessionTypeId],
      error: null,
    });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || 'Something went wrong', data: null },
      { status: 500 }
    );
  }
}
