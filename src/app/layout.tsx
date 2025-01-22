import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Lato, Maven_Pro } from 'next/font/google';

import './globals.css';

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal'],
  display: 'swap',
});

const mavenPro = Maven_Pro({
  variable: '--font-maven-pro',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lotus Glow | Yoga Club',
  description: 'Find your inner light',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${lato.variable} ${mavenPro.variable}`}>
      <body className="relative bg-background">{children}</body>
    </html>
  );
}
