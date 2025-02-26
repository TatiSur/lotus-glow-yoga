import { NextResponse } from 'next/server';
import { yogaTypes } from '@/entities/yoga-types';

export async function GET() {
  return NextResponse.json(yogaTypes);
}
