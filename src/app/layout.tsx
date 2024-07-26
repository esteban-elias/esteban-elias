import type { Metadata } from 'next';
import { Alegreya_Sans_SC, EB_Garamond } from 'next/font/google';
import './globals.css';

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-garamond',
});

const alegreya = Alegreya_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'Esteban Elías',
  description: 'Personal page of Esteban Elías',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${alegreya.variable} font-garamond antialiased pb-16 sm:pb-24 bg-gradient-to-b from-amber-50 from-10% sm:from-15% via-sky-100 via-15% sm:via-30% to-sky-200 to-100%`}
      >
        {children}
      </body>
    </html>
  );
}
