import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { FileTextIcon, DownloadSimpleIcon } from '@phosphor-icons/react';

import img1 from '../assets/ProductGalleryImage1.webp';
import img2 from '../assets/ProductGalleryImage2.png';
import img3 from '../assets/ProductGalleryImage3.webp';
import img4 from '../assets/ProductGalleryImage4.png';
import img5 from '../assets/ProductGalleryImage5.webp';
import img6 from '../assets/ProductGalleryImage6.png';
import img7 from '../assets/ProductGalleryImage7.png';

export const Products = () => {
    const catalogues = [
        { title: "Ajrakh Collection", description: "Explore our handcrafted Ajrakh block-printed textiles.", file: "Catalogue_AjrakhCollection.pdf" },
        { title: "GOTS Organic Collection", description: "Discover our premium 100% certified organic cotton line.", file: "Catalogue_GOTSCertifiedOrganicCollection.pdf" },
        { title: "Kala Cotton Collection", description: "Sustainable indigenous rain-fed cotton apparel and accessories.", file: "Catalogue_KalaCottonCollection.pdf" },
        { title: "Pet Beds", description: "Comfortable and eco-friendly resting places for your beloved pets.", file: "Catalogue_PedBeds.pdf" },
        { title: "Pet Products", description: "A complete collection of our sustainable pet clothing and accessories.", file: "Catalogue_PetProducts.pdf" }
    ];

    const handleScrollToCatalogues = () => {
        document.getElementById('catalogues')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Section>
            <Container>
                <div className="text-center mb-16">
                    <Heading level={1} className="text-4xl mb-4">Product Gallery</Heading>
                    <Text variant="lead">A glimpse into our sustainable collections for kids and pets.</Text>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    <div className="md:col-span-3 md:row-span-2 relative group overflow-hidden rounded-2xl">
                        <img
                            src={img1}
                            alt="Kids wearing sustainable clothing collection"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>

                    <div className="md:row-span-2 relative group overflow-hidden rounded-2xl">
                        <img
                            src={img2}
                            alt="Child modeling eco-friendly fashion"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl">
                        <img
                            src={img3}
                            alt="Close-up of artisan craftsmanship"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl">
                        <img
                            src={img4}
                            alt="Detailed view of sustainable textile texture"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-[var(--color-bg-warm)]">
                        <img
                            src={img5}
                            alt="Sustainable pet accessory on display"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl">
                        <img
                            src={img6}
                            alt="Kid wearing red dress"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl">
                        <img
                            src={img7}
                            alt="Kid wearing white dress with floral patterns"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div onClick={handleScrollToCatalogues} className="relative group overflow-hidden rounded-2xl bg-[var(--color-accent)] flex flex-col items-center justify-center text-white cursor-pointer hover:brightness-95 transition-all p-6 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FileTextIcon className="w-8 h-8" weight="duotone" />
                        </div>
                        <Heading level={3} className="text-xl text-white mb-2">View Catalogues</Heading>
                        <Text className="text-white/80 text-sm">Download our complete collection guides.</Text>
                    </div>
                </div>

                {/* Catalogues Download Section */}
                <div id="catalogues" className="mt-24 pt-16 border-t border-[var(--color-border)]">
                    <div className="text-center mb-12">
                        <Heading level={2} className="text-3xl mb-4">Download Catalogues</Heading>
                        <Text variant="lead">Explore our collections in detail.</Text>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {catalogues.map((cat, idx) => (
                            <a
                                key={idx}
                                href={`/catalogues/${cat.file}`}
                                download
                                className="group bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-md hover:border-[var(--color-accent-muted)] transition-all flex flex-col items-start text-left cursor-pointer"
                            >
                                <Heading level={4} className="text-lg mb-2 group-hover:text-[var(--color-accent)] transition-colors">{cat.title}</Heading>
                                <Text className="text-[var(--color-text-secondary)] text-sm mb-6 flex-grow">{cat.description}</Text>
                                <div className="flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
                                    <DownloadSimpleIcon weight="bold" />
                                    <span>Download</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};
