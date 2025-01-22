import React from 'react';

import type { Metadata } from 'next';

import meta from '@/config/meta';
import '@/styles/index.scss';

export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  title: {
    default: meta.title,
    template: meta.titleTemplate,
  },
  description: meta.description,
  alternates: {
    canonical: meta.url,
  },
  authors: [{ name: meta.name, url: meta.url }],
  applicationName: meta.name,
  robots: {
    index: true,
  },
  openGraph: {
    type: 'website',
    url: meta.url,
    title: {
      default: meta.title,
      template: meta.titleTemplate,
    },
    description: meta.description,
    images: [
      {
        url: `${meta.url}/meta/og-image.png`,
        width: 1200,
        height: 630,
        alt: meta.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: meta.title,
      template: meta.titleTemplate,
    },
    description: meta.description,
    images: [`${meta.url}/meta/og-image.png`],
  },
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicons/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        url: '/favicons/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/favicons/site.webmanifest',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
