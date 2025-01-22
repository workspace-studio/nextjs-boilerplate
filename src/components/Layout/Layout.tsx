import { PropsWithChildren } from 'react';

import Footer from '@/components//Footer';
import Header from '@/components/Header';

import styles from './Layout.module.scss';

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
);

export default Layout;
