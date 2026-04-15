import type { Metadata } from 'next';
import { Bebas_Neue, DM_Serif_Display, Syne, Space_Mono } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-body',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'NeverForgetBaby™ | Never Leave Your Child in a Hot Car',
  description: 'NeverForgetBaby™ is the only system that alerts you — and calls 911 — if your child or pet is left in a hot car. Pressure pad sensor, real-time GPS, automatic emergency dispatch.',
  keywords: 'child car safety, hot car deaths, heatstroke prevention, baby car seat alarm, pet car safety',
  openGraph: {
    title: 'NeverForgetBaby™ | Saving Lives Through Technology',
    description: 'Never forget your child or pet in a hot car again.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${dmSerifDisplay.variable} ${syne.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
