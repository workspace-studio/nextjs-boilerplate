import type { Metadata } from 'next';

import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: '404',
  robots: {
    index: false,
  },
};

const Error404Page = () => (
  <Layout>
    <h1>404 - Page Not Found</h1>
  </Layout>
);

export default Error404Page;
