import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  ogImage = 'https://onetapxmedia.com/og-image.jpg'
}) => {
  const fullUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={fullUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEOHelmet;