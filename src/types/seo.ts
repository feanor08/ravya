export interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'profile';
    siteName?: string;
    author?: string;
}

export interface StructuredDataOrganization {
    "@context": string;
    "@type": "Organization";
    name: string;
    url: string;
    description: string;
    logo?: string;
}