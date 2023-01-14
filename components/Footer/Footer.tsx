import React from 'react';
import Image from 'next/image';

import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.container}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
    </a>
  </footer>
);

export default Footer;
