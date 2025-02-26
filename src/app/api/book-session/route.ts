import { NextResponse } from 'next/server';
import { bookSessionSchema } from '@/features/book-session';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const parsedData = bookSessionSchema.safeParse(data);
    if (!parsedData.success) {
      return NextResponse.json(
        { message: 'Invalid input', errors: parsedData.error.format() },
        { status: 400 }
      );
    }

    // Save booking data to db

    return NextResponse.json({ message: 'Booking successful' });
  } catch (error) {
    console.error('Booking error', error);

    return NextResponse.json(
      { message: (error as Error).message || 'Something went wrong' },
      { status: 500 }
    );
  }
}
