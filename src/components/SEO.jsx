import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, lang = 'en', image = '/banner.png', url, noindex = false }) {
    const siteUrl = 'https://aureussigmacapital.com';
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            <html lang={lang} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            <title>{title} | Aureus Sigma Capital</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={`${title} | Aureus Sigma Capital`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={`${title} | Aureus Sigma Capital`} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
