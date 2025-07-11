import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps, StructuredDataOrganization } from '../../types/seo';

const SEOHead: React.FC<SEOProps> = ({
    title = "Ravya - Professional Business Services",
    description = "Ravya provides professional business services and solutions. Expert consulting, modern solutions for your business needs.",
    keywords = "business services, consulting, professional solutions, ravya",
    image = "/og-image.jpg",
    url = "https://ravya.com",
    type = "website",
    siteName = "Ravya",
    author = "Ravya Team"
}) => {
    const structuredData: StructuredDataOrganization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": url,
        "description": description,
        "logo": `${url}/logo.png`
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="author" content={author} />
            <meta name="theme-color" content="#000000" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEOHead;