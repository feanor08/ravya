import { ContactForm } from '../components/ContactForm';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@phosphor-icons/react';

export const Contact = () => {
    return (
        <>
            <Section background="white" className="pb-0">
                <Container className="text-center">
                    <Heading level={1} className="text-4xl">Contact Us</Heading>
                    <Text variant="lead">We'd love to hear from you.</Text>

                    <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
                        <div className="flex flex-col items-center">
                            <div className="bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center text-[var(--color-accent)] mb-4"><MapPinIcon size={32} weight="duotone" /></div>
                            <Heading level={4} className="text-lg">Visit Us</Heading>
                            <Text className="text-center">8 & 9, Jayaramappa Complex, Sy No. 353, Bidaraguppe, Sarjapur-Attibele Road, Bengaluru, Karnataka 572101</Text>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center text-[var(--color-accent)] mb-4"><PhoneIcon size={32} weight="duotone" /></div>
                            <Heading level={4} className="text-lg">Call Us</Heading>
                            <a href="tel:+918310452882" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                                +91 83104 52882
                            </a>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center text-[var(--color-accent)] mb-4"><EnvelopeIcon size={32} weight="duotone" /></div>
                            <Heading level={4} className="text-lg">Email Us</Heading>
                            <a href="mailto:sales@houseofravya.com" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                                sales@houseofravya.com
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
            <ContactForm />
        </>
    );
};
