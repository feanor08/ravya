import { Hero } from '../components/Hero';
import { VisionMission } from '../components/VisionMission';
import { ProductCategories } from '../components/ProductCategories';
import { ContactForm } from '../components/ContactForm';

export const Home = () => {
    return (
        <>
            <Hero />
            <VisionMission />
            <ProductCategories />
            <ContactForm />
        </>
    );
};
