import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { lato, mavenPro } from '@/shared/config/fonts';
import { Providers } from '@/app/providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lotus Glow | Yoga Club',
  description: 'Find your inner light',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${lato.variable} ${mavenPro.variable}`}>
      <body className="bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
