import type { Metadata } from 'next'
import { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'Lotus Glow | Yoga Club',
  description: 'Find your inner light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    {children}
    </body>
    </html>
  )
}
