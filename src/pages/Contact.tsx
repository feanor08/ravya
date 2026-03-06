import { ContactForm } from '../components/ContactForm';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@phosphor-icons/react';
import contactImage from '../assets/ContactKobe.png';

export const Contact = () => {
    return (
        <>
            <Section background="white" className="pb-0">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                        {/* Left Side: Image */}
                        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-md">
                            <img src={contactImage} alt="House of Ravya Pup" className="w-full h-full object-cover" />
                        </div>

                        {/* Right Side: Contact Details */}
                        <div className="flex flex-col gap-8 md:gap-10">
                            <div className="flex items-start gap-5 mb-2">
                                {/* Invisible spacer matching the 64px width of the icons below */}
                                <div className="w-16 flex-shrink-0 hidden sm:block"></div>
                                <div className="pt-2">
                                    <Heading level={1} className="text-4xl mb-2">Contact Us</Heading>
                                    <Text variant="lead">We'd love to hear from you.</Text>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center p-4 text-[var(--color-accent)] flex-shrink-0">
                                    <MapPinIcon size={32} weight="duotone" />
                                </div>
                                <div className="pt-1">
                                    <Heading level={4} className="text-xl mb-1">Visit Us</Heading>
                                    <Text className="text-[var(--color-text-secondary)] leading-relaxed">
                                        8 & 9, Jayaramappa Complex, Sy No. 353, <br className="hidden lg:block" />
                                        Bidaraguppe, Sarjapur-Attibele Road, <br className="hidden lg:block" />
                                        Bengaluru, Karnataka 572101
                                    </Text>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center p-4 text-[var(--color-accent)] flex-shrink-0">
                                    <PhoneIcon size={32} weight="duotone" />
                                </div>
                                <div className="pt-1">
                                    <Heading level={4} className="text-xl mb-1">Call Us</Heading>
                                    <a href="tel:+918310452882" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-lg">
                                        +91 83104 52882
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center p-4 text-[var(--color-accent)] flex-shrink-0">
                                    <EnvelopeIcon size={32} weight="duotone" />
                                </div>
                                <div className="pt-1">
                                    <Heading level={4} className="text-xl mb-1">Email Us</Heading>
                                    <a href="mailto:sales@houseofravya.com" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-lg">
                                        sales@houseofravya.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <ContactForm />
        </>
    );
};
