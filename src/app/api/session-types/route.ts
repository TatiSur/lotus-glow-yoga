import { NextResponse } from 'next/server';
import { sessionTypes } from '@/entities/session-types';

export async function GET() {
  return NextResponse.json(sessionTypes);
}
