import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "BanavatNest | Research-Led Innovation Ecosystem",
    description = "BanavatNest transforms curiosity into practical, scalable, and impactful solutions through systematic investigation in AI, Cybersecurity, Smart Systems, and Agriculture.",
    keywords = "Research, Innovation, AI, ML, Cybersecurity, Agriculture, Smart Systems, BanavatNest",
    image = "/assets/logo.png", // Assuming a default logo path, adjust if needed
    url = "https://banavatnest.com",
    type = "website",
}) => {
    const siteTitle = "BanavatNest";
    const fullTitle = title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;

    // Organization Structured Data (JSON-LD)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BanavatNest",
        "url": "https://banavatnest.com",
        "logo": "https://banavatnest.com/logo.png",
        "sameAs": [
            "https://www.linkedin.com/company/banavatnest",
            "https://twitter.com/banavatnest"
            // Add other social profiles here
        ]
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
