import { Lato, Maven_Pro } from 'next/font/google';

export const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal'],
  display: 'swap',
});

export const mavenPro = Maven_Pro({
  variable: '--font-maven-pro',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
  display: 'swap',
});
