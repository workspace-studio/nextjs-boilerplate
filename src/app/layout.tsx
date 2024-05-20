import type { Metadata } from 'next';

import '@styles/index.scss';
import { Inter } from 'next/font/google';

import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Create Next App',
    template: '%s | Create Next App',
  },
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;