import { NextResponse } from 'next/server';
import { instructorsData } from '@/entities/instructor';

export async function GET() {
  return NextResponse.json(instructorsData);
}
