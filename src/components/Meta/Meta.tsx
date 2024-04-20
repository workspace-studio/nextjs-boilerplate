import React from 'react';
import Head from 'next/head';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

const Meta: React.FC<MetaProps> = ({ title, description, image, noIndex = false }) => {
  const domain = 'example.com';
  const siteUrl = 'https://example.com';
  const metaTitle = title ? `${title} | My App` : 'My App';
  const metaDescription = description || 'Cool description goes here.';
  const metaImage = image || `${siteUrl}/images/meta/og-image.png`;

  return (
    <Head>
      {/*  HTML Meta Tags  */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content="www.workspace.hr" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      {noIndex && <meta name="robots" content="noindex" />}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      {/*  Facebook Meta Tags */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {/* Meta Assets */}
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
    </Head>
  );
};

export default Meta;
