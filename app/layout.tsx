import type { Metadata } from 'next';
import { Bebas_Neue, DM_Serif_Display, Syne, Space_Mono } from 'next/font/google';
import Script from 'next/script';
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
  manifest: "/manifest.webmanifest",
  title: 'NeverForgetBaby™ | Never Leave Your Child in a Hot Car',
  description: 'NeverForgetBaby™ is a connected child and pet vehicle safety system designed to alert caregivers and escalate notifications when someone may have been left behind.',
  keywords: 'child car safety, hot car deaths, heatstroke prevention, baby car seat alarm, pet car safety',
  openGraph: {
    title: 'NeverForgetBaby™ | Saving Lives Through Technology',
    description: 'Connected vehicle safety alerts for families and caregivers.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
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
        <Script
          src="https://now-hiring-eta.vercel.app/widget.js"
          data-icon="Baby"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
