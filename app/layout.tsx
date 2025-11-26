import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ModeProvider } from '@/lib/ModeContext';
import Navigation from '@/components/Navigation';
import ClientRoot from '@/components/ClientRoot';
import { BootProvider } from '@/components/BootContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://colinsears.dev'), // Update with your actual domain
  title: {
    default: 'Colin Sears - Software Engineer & Creative',
    template: '%s | Colin Sears',
  },
  description: 'Portfolio showcasing professional software engineering work and creative tabletop gaming projects.',
  keywords: ['software engineer', 'web developer', 'full-stack developer', 'tabletop gaming', 'world-building', 'creative projects'],
  authors: [{ name: 'Colin Sears' }],
  creator: 'Colin Sears',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://colinsears.dev',
    siteName: 'Colin Sears Portfolio',
    title: 'Colin Sears - Software Engineer & Creative',
    description: 'Portfolio showcasing professional software engineering work and creative tabletop gaming projects.',
    images: [
      {
        url: '/og-image.png', // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Colin Sears Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colin Sears - Software Engineer & Creative',
    description: 'Portfolio showcasing professional software engineering work and creative tabletop gaming projects.',
    images: ['/og-image.png'], // Add this image to your public folder
    creator: '@yourtwitterhandle', // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Add when you set up Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ModeProvider>
          <BootProvider>
            <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-black text-white px-3 py-2"
          >
            Skip to content
            </a>
            <Navigation />
            <ClientRoot>{children}</ClientRoot>
          </BootProvider>
        </ModeProvider>
      </body>
    </html>
  );
}
