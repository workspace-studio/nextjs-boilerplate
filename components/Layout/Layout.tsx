import React from 'react';
import Footer from 'components/Footer';
import Meta from 'components/Meta';

import styles from './Layout.module.scss';

interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, image, noIndex, children }) => (
  <div className={styles.container}>
    <Meta title={title} description={description} image={image} noIndex={noIndex} />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
