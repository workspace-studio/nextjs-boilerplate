import dynamic from 'next/dynamic';

import Layout from '@/components/Layout';

const FirstSection = dynamic(() => import('@/views/home/FirstSection'));
const SecondSection = dynamic(() => import('@/views/home/SecondSection'));

const HomePage = () => (
  <Layout>
    <FirstSection />
    <SecondSection />
  </Layout>
);

export default HomePage;
