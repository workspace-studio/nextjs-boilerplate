import type { Metadata } from 'next';

import '@styles/index.scss';
import React from 'react';

export const metadata: Metadata = {
  title: 'Project title',
  description: 'Project description',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
