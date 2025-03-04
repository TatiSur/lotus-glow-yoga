import type { SessionScheduleDetails } from './types';

export const sessionScheduleDetails: SessionScheduleDetails = {
  '1': {
    unavailableDays: [0, 6],
    bookedDates: {
      '2025-03-10': {
        fullyBooked: true,
      },
      '2025-03-11': {
        fullyBooked: false,
        partlyBooked: true,
      },
    },
    sessionTimes: {
      1: ['10:00', '12:00', '14:00'],
      2: ['11:00', '13:00', '15:00'],
      3: ['10:00', '16:00', '20:00'],
      4: ['11:00', '15:00'],
      5: ['12:00', '15:00'],
    },
  },
  '2': {
    unavailableDays: [1],
    bookedDates: {
      '2025-03-11': {
        fullyBooked: false,
        partlyBooked: true,
      },
    },
    sessionTimes: {
      0: ['09:00', '12:00', '18:00'],
      2: ['11:00', '13:00', '21:00'],
      3: ['10:00', '16:00', '20:00'],
      4: ['11:00', '15:00'],
      5: ['12:00', '15:00'],
      6: ['12:00', '15:00'],
    },
  },
  '3': {
    unavailableDays: [5, 6],
    bookedDates: {
      '2025-03-15': {
        fullyBooked: false,
        partlyBooked: true,
      },
    },
    sessionTimes: {
      0: ['09:00', '12:00', '18:00'],
      1: ['11:00', '13:00', '21:00'],
      2: ['10:00', '16:00', '20:00'],
      3: ['11:00', '15:00'],
      4: ['12:00', '15:00'],
    },
  },
  '4': {
    unavailableDays: [0],
    bookedDates: {
      '2025-03-14': {
        fullyBooked: true,
      },
    },
    sessionTimes: {
      1: ['11:00', '13:00', '21:00'],
      2: ['10:00', '16:00', '20:00'],
      3: ['11:00', '15:00'],
      4: ['12:00', '15:00'],
      5: ['12:00', '15:00'],
      6: ['09:00', '12:00', '18:00'],
    },
  },
  '5': {
    unavailableDays: [2],
    bookedDates: {
      '2025-03-19': {
        fullyBooked: false,
        partlyBooked: true,
      },
    },
    sessionTimes: {
      0: ['09:00', '12:00', '18:00'],
      1: ['11:00', '13:00', '21:00'],
      3: ['10:00', '16:00', '20:00'],
      4: ['11:00', '15:00'],
      5: ['12:00', '15:00'],
      6: ['12:00', '15:00'],
    },
  },
  '6': {
    unavailableDays: [3],
    bookedDates: {
      '2025-03-20': {
        fullyBooked: false,
        partlyBooked: true,
      },
    },
    sessionTimes: {
      0: ['09:00', '12:00', '18:00'],
      1: ['11:00', '13:00', '21:00'],
      2: ['10:00', '16:00', '20:00'],
      4: ['12:00', '15:00'],
      5: ['12:00', '15:00'],
      6: ['09:00', '12:00', '18:00'],
    },
  },
  '7': {
    unavailableDays: [4, 5],
    bookedDates: {
      '2025-03-21': {
        fullyBooked: true,
      },
    },
    sessionTimes: {
      0: ['09:00', '12:00', '18:00'],
      1: ['11:00', '13:00', '21:00'],
      2: ['10:00', '16:00', '20:00'],
      3: ['11:00', '15:00'],
      6: ['09:00', '12:00', '18:00'],
    },
  },
  '8': {
    unavailableDays: [5],
    bookedDates: {
      '2025-03-22': {
        fullyBooked: false,
        partlyBooked: true,
      },
    },
    sessionTimes: {
      0: ['09:00', '12:00', '18:00'],
      1: ['11:00', '13:00', '21:00'],
      2: ['10:00', '16:00', '20:00'],
      3: ['11:00', '15:00'],
      4: ['11:00', '15:00'],
      6: ['09:00', '12:00', '18:00'],
    },
  },
};
