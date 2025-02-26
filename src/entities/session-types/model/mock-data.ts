import type { SessionType } from './types';

export const sessionTypes: SessionType[] = [
  { id: '1', value: 'yin1', label: 'Yin Yoga Beginner', yogaTypeId: 'yin' },
  { id: '2', value: 'yin2', label: 'Yin Yoga All Levels', yogaTypeId: 'yin' },
  { id: '3', value: 'yin3', label: 'Yin Yoga Pro', yogaTypeId: 'yin' },
  {
    id: '4',
    value: 'kundalini2',
    label: 'Kundalini Yoga All Levels',
    yogaTypeId: 'kundalini',
  },
  {
    id: '5',
    value: 'kundalini3',
    label: 'Kundalini Yoga Pro',
    yogaTypeId: 'kundalini',
  },
  {
    id: '6',
    value: 'iyengar1',
    label: 'Iyengar Yoga Beginner',
    yogaTypeId: 'iyengar',
  },
  {
    id: '7',
    value: 'iyengar3',
    label: 'Iyengar Yoga Pro',
    yogaTypeId: 'iyengar',
  },
  {
    id: '8',
    value: 'bikram1',
    label: 'Bikram Yoga Beginner',
    yogaTypeId: 'bikram',
  },
];
