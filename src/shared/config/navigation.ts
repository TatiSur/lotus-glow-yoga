import { SECTION_IDS } from './sections';

export const navLinks = [
  {
    title: 'ABOUT THE LOTUS GLOW',
    shortTitle: 'About us',
    link: `#${SECTION_IDS.ABOUT_US}`,
  },
  {
    title: 'THE LOTUS YOGA TYPES',
    shortTitle: 'Lotus types',
    link: `#${SECTION_IDS.YOGA_TYPES}`,
  },
  {
    title: 'BOOK A SESSION',
    shortTitle: 'Join The Club',
    link: `#${SECTION_IDS.JOIN_THE_CLUB}`,
  },
  {
    title: 'LOTUS INSTRUCTORS',
    shortTitle: 'Instructors',
    link: `#${SECTION_IDS.INSTRUCTORS}`,
  },
] as const;
