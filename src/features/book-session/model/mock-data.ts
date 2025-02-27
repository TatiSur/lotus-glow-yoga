import type { SessionScheduleDetails } from './types';

export const sessionScheduleDetails: SessionScheduleDetails = {
  '1': {
    unavailableDays: [0, 6],
    bookedSlots: {
      '2025-03-10': [{ time: '10:00', booked: 3, max: 3 }],
      '2025-03-12': [{ time: '14:00', booked: 1, max: 3 }],
    },
    sessionDuration: 60,
    sessionHours: { start: '09:00', end: '18:00' },
  },
  '2': {
    unavailableDays: [1],
    bookedSlots: {
      '2025-03-11': [{ time: '11:00', booked: 2, max: 3 }],
    },
    sessionDuration: 45,
    sessionHours: { start: '08:00', end: '17:00' },
  },
  '3': {
    unavailableDays: [5, 6],
    bookedSlots: {
      '2025-03-15': [{ time: '16:00', booked: 3, max: 3 }],
    },
    sessionDuration: 90,
    sessionHours: { start: '10:00', end: '20:00' },
  },
  '4': {
    unavailableDays: [0],
    bookedSlots: {
      '2025-03-14': [{ time: '09:00', booked: 1, max: 3 }],
    },
    sessionDuration: 60,
    sessionHours: { start: '07:00', end: '19:00' },
  },
  '5': {
    unavailableDays: [2],
    bookedSlots: {
      '2025-03-18': [{ time: '13:00', booked: 2, max: 3 }],
    },
    sessionDuration: 75,
    sessionHours: { start: '08:30', end: '16:30' },
  },
  '6': {
    unavailableDays: [3],
    bookedSlots: {
      '2025-03-20': [{ time: '12:30', booked: 1, max: 3 }],
    },
    sessionDuration: 50,
    sessionHours: { start: '09:00', end: '18:00' },
  },
  '7': {
    unavailableDays: [4],
    bookedSlots: {
      '2025-03-21': [{ time: '15:00', booked: 3, max: 3 }],
    },
    sessionDuration: 60,
    sessionHours: { start: '10:00', end: '20:00' },
  },
  '8': {
    unavailableDays: [5],
    bookedSlots: {
      '2025-03-22': [{ time: '17:00', booked: 1, max: 3 }],
    },
    sessionDuration: 45,
    sessionHours: { start: '08:00', end: '19:30' },
  },
};
