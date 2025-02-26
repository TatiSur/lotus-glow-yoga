import { NextResponse } from 'next/server';
import { EMAIL_REGEX } from '@/shared/lib/validators';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // check if email is valid
    if (!email || !email.match(EMAIL_REGEX)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // check if email already exists
    // write to db

    return NextResponse.json({ message: 'Subscription successful' });
  } catch (error) {
    console.log('Subscription error', error);

    return NextResponse.json(
      { message: (error as Error).message || 'Something went wrong' },
      { status: 500 }
    );
  }
}
