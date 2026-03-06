import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Heading, Text } from './ui/Typography';
import { Card } from './ui/Card';
import { EyeIcon, TargetIcon } from '@phosphor-icons/react';
import { useInView } from '../hooks/useInView';

export const VisionMission = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    return (
        <Section background="white">
            <Container>
                <Heading level={2} className={`text-center mb-12 text-4xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    Our Purpose
                </Heading>
                <div ref={ref} className="grid md:grid-cols-2 gap-8">
                    {/* Vision */}
                    <Card variant="flat" className={`relative overflow-hidden p-8 h-full border border-[var(--color-bg-warm)] transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        {/* Animated Border */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
                            <rect
                                x="0" y="0" width="100%" height="100%" rx="12" ry="12" fill="none"
                                stroke="var(--color-accent)" strokeWidth="4" pathLength="100" strokeDasharray="100"
                                strokeDashoffset={isInView ? 0 : 100}
                                style={{ transition: 'stroke-dashoffset 2s ease-in-out 0.8s' }}
                            />
                        </svg>

                        <div className="absolute top-6 right-6 w-12 h-12 bg-[var(--color-bg-warm)] text-[var(--color-accent)] z-10">
                            <EyeIcon size={32} weight="duotone" />
                        </div>
                        <div className="mb-6 pr-12 relative z-10">
                            <Heading level={3} className="text-2xl m-0">Vision</Heading>
                        </div>
                        <Text className="text-lg leading-relaxed text-[var(--color-text-secondary)] relative z-10">
                            To become a globally recognized and trusted partner in sustainable lifestyle products, empowering rural artisans and tribal women while delivering consciously crafted kidswear, pet essentials, and accessories that bring joy, safety, and meaning to everyday life.
                        </Text>
                    </Card>

                    {/* Mission */}
                    <Card variant="flat" className={`relative overflow-hidden p-8 h-full border border-[var(--color-bg-warm)] transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        {/* Animated Border */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
                            <rect
                                x="0" y="0" width="100%" height="100%" rx="12" ry="12" fill="none"
                                stroke="var(--color-accent)" strokeWidth="4" pathLength="100" strokeDasharray="100"
                                strokeDashoffset={isInView ? 0 : 100}
                                style={{ transition: 'stroke-dashoffset 2s ease-in-out 1s' }}
                            />
                        </svg>

                        <div className="absolute top-6 right-6 w-12 h-12 bg-[var(--color-bg-warm)] text-[var(--color-accent)] z-10">
                            <TargetIcon size={32} weight="duotone" />
                        </div>
                        <div className="mb-6 pr-12 relative z-10">
                            <Heading level={3} className="text-2xl m-0">Mission</Heading>
                        </div>
                        <Text className="text-lg leading-relaxed text-[var(--color-text-secondary)] relative z-10">
                            Ethically made items that care for the planet and its people. Kids and pet ranges meeting international safety standards. Reliable, innovation‑driven manufacturing for global partners. Creativity, sustainability and social impact at our core.
                        </Text>
                    </Card>
                </div>
            </Container>
        </Section>
    );
};
