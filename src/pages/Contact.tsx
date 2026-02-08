import { ContactForm } from '../components/ContactForm';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
    return (
        <>
            <Section background="white" className="pb-0">
                <Container className="text-center">
                    <Heading level={1} className="text-4xl">Contact Us</Heading>
                    <Text variant="lead">We'd love to hear from you.</Text>

                    <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center text-[var(--color-accent)] mb-4"><MapPin /></div>
                            <Heading level={4} className="text-lg">Visit Us</Heading>
                            <Text className="text-center">123 Green Way, Eco City<br />Sustainable State, 560001</Text>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center text-[var(--color-accent)] mb-4"><Phone /></div>
                            <Heading level={4} className="text-lg">Call Us</Heading>
                            <Text>+91 9876543210</Text>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center text-[var(--color-accent)] mb-4"><Mail /></div>
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
