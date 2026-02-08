import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { FileText } from 'lucide-react';

import img1 from '../assets/ProductGalleryImage1.webp';
import img2 from '../assets/ProductGalleryImage2.webp';
import img3 from '../assets/ProductGalleryImage3.webp';
import img4 from '../assets/ProductGalleryImage4.webp';
import img5 from '../assets/ProductGalleryImage5.png';

export const Products = () => {
    return (
        <Section>
            <Container>
                <div className="text-center mb-16">
                    <Heading level={1} className="text-4xl">Product Gallery</Heading>
                    <Text variant="lead">A glimpse into our sustainable collections for kids and pets.</Text>
                </div>

                {/* Collage Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Large Feature */}
                    <div className="md:col-span-3 md:row-span-2 relative group overflow-hidden rounded-2xl">
                        <img
                            src={img1}
                            alt="Collection Highlight"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>

                    {/* Tall Portrait */}
                    <div className="md:row-span-2 relative group overflow-hidden rounded-2xl">
                        <img
                            src={img2}
                            alt="Sustainable Fashion"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Standard Landscape */}
                    <div className="relative group overflow-hidden rounded-2xl">
                        <img
                            src={img3}
                            alt="Artisan Detail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Standard Landscape */}
                    <div className="relative group overflow-hidden rounded-2xl">
                        <img
                            src={img4}
                            alt="Pet Accessory"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Wide Span Bottom */}
                    <div className="md:col-span-1 relative group overflow-hidden rounded-2xl">
                        <img
                            src={img5}
                            alt="Textile Texture"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Catalogue Card */}
                    <div className="relative group overflow-hidden rounded-2xl bg-[var(--color-accent)] flex flex-col items-center justify-center text-white cursor-pointer hover:brightness-95 transition-all p-6 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FileText className="w-8 h-8" />
                        </div>
                        <Heading level={3} className="text-xl text-white mb-2">Full Catalogue</Heading>
                        <Text className="text-white/80 text-sm">Download our complete wholesale price list and collection guide.</Text>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
