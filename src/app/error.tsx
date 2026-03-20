'use client';

import Layout from '@/components/Layout';

const Error500Page = ({ reset }: { error: Error; reset: () => void }) => (
  <Layout>
    <h1>500 - Server-side error occurred</h1>
    <button type="button" onClick={reset}>
      Try again
    </button>
  </Layout>
);

export default Error500Page;
