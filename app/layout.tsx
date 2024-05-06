import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { AI } from './action';

import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Providers } from '@/components/providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const meta = {
  title: 'Prompt Engineering Course',
  description: 'Prompt Engineering Course ',
};
export const metadata: Metadata = {
  ...meta,
  title: {
    default: 'Prompt Engineering Course',
    template: `%s - Prompt Engineering Course`,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    ...meta,
    card: 'summary_large_image',
    site: '@ginetta',
  },
  openGraph: {
    ...meta,
    locale: 'en-US',
    type: 'website',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${montserrat.variable} `}>
        <Toaster />
        <AI>
          <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col justify-between">
              <Header />
              <main className="flex h-dvh flex-1 bg-muted/50">{children}</main>
            </div>
          </Providers>
        </AI>
        <Analytics />
      </body>
    </html>
  );
}

export const runtime = 'edge';
