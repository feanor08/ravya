import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ProductCategories } from '../components/ProductCategories';
import { ArtisanSection } from '../components/ArtisanSection';
import { ContactForm } from '../components/ContactForm';
import { FooterStats } from '../components/FooterStats';

export const Home = () => {
    return (
        <>
            <Hero />
            <FooterStats />
            <Features />
            <ProductCategories />
            <ArtisanSection />
            <ContactForm />
        </>
    );
};
