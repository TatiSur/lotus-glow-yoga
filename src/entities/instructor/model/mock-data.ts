import type { Instructor } from './types';

export const instructorsData: Instructor[] = [
  {
    id: '1',
    name: 'Ava Hart',
    photo: '/images/instructors/ava-hart.webp',
    description:
      'Ava Hart is a dedicated instructor specializing in Kundalini Yoga. With over 10 years of experience, Ava is known for her ability to guide students through transformative practices that awaken spiritual energy and promote self-awareness. Her classes integrate dynamic postures, breathwork, and meditation to help students achieve a deeper connection with their inner selves.',
    socialLinks: [
      { id: '1', name: 'Instagram', url: '#' },
      { id: '2', name: 'YouTube', url: '#' },
      { id: '3', name: 'Pinterest', url: '#' },
    ],
    sessionTypeIds: ['4', '5'],
  },
  {
    id: '2',
    name: 'Sofia Wells',
    photo: '/images/instructors/sofia-wells.webp',
    description:
      'Sofia Wells focuses on Yin Yoga, bringing a calming and restorative approach to her practice. With extensive training in gentle, long-held postures, Sofia helps students release deep-seated tension and improve flexibility. Her nurturing guidance and emphasis on mindfulness create a serene environment for deep relaxation and healing.',
    socialLinks: [
      { id: '2', name: 'YouTube', url: '#' },
      { id: '3', name: 'Pinterest', url: '#' },
    ],
    sessionTypeIds: ['1', '2', '3'],
  },
  {
    id: '3',
    name: 'Maya Collins',
    photo: '/images/instructors/maya-collins.webp',
    description:
      'Maya Collins is an expert in Bikram Yoga and Iyengar Yoga. Her Bikram classes are held in a heated environment to enhance detoxification and flexibility, while her Iyengar sessions emphasize precise alignment and the use of props to support students’ practice. Maya’s comprehensive approach ensures a well-rounded and effective yoga experience for all levels.',
    socialLinks: [
      { id: '1', name: 'Instagram', url: '#' },
      { id: '3', name: 'Pinterest', url: '#' },
    ],
    sessionTypeIds: ['6', '7', '8'],
  },
];
