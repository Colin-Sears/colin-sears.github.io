import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import ClientRoot from '@/components/ClientRoot';
import { BootProvider } from '@/components/BootContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://colinsears.dev'),
  title: {
    default: 'Colin Sears - Software Engineer',
    template: '%s | Colin Sears',
  },
  description: 'Portfolio showcasing professional software engineering work, web development projects, and technical expertise.',
  keywords: ['software engineer', 'web developer', 'full-stack developer', 'Azure', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Colin Sears' }],
  creator: 'Colin Sears',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://colinsears.dev',
    siteName: 'Colin Sears Portfolio',
    title: 'Colin Sears - Software Engineer',
    description: 'Portfolio showcasing professional software engineering work, web development projects, and technical expertise.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Colin Sears Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colin Sears - Software Engineer',
    description: 'Portfolio showcasing professional software engineering work, web development projects, and technical expertise.',
    images: ['/og-image.png'],
    creator: '@yourtwitterhandle',
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
    // google: 'your-google-verification-code',
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
      </body>
    </html>
  );
}
