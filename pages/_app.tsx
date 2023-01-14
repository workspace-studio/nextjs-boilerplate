import React from 'react';

import { AppProps } from 'next/app';

import '../styles/index.scss';

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default CustomApp;
