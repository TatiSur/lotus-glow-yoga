import { z } from 'zod';

export const bookSessionSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  sessionTypeId: z.string().min(1, 'Session type is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
});
