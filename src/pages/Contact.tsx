import { ContactForm } from '../components/ContactForm';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { Envelope, MapPin, Phone } from '@phosphor-icons/react';

export const Contact = () => {
    return (
        <>
            <Section background="white" className="pb-0">
                <Container className="text-center">
                    <Heading level={1} className="text-4xl">Contact Us</Heading>
                    <Text variant="lead">We'd love to hear from you.</Text>

                    <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
                        <div className="flex flex-col items-center">
                            <div className="bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center text-[var(--color-accent)] mb-4"><MapPin size={32} weight="duotone" /></div>
                            <Heading level={4} className="text-lg">Visit Us</Heading>
                            <Text className="text-center">#473/D, 15th cross, 8th Main, Ideal Homes Township, Rajarajeshwari Nagar, Bangalore, 560098</Text>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center text-[var(--color-accent)] mb-4"><Phone size={32} weight="duotone" /></div>
                            <Heading level={4} className="text-lg">Call Us</Heading>
                            <Text>+91 9876543210</Text>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center text-[var(--color-accent)] mb-4"><Envelope size={32} weight="duotone" /></div>
                            <Heading level={4} className="text-lg">Email Us</Heading>
                            <Text>hello@houseofravya.com</Text>
                        </div>
                    </div>
                </Container>
            </Section>
            <ContactForm />
        </>
    );
};
