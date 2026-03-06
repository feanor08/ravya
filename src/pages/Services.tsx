import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { ScissorsIcon, TruckIcon, PaletteIcon, PackageIcon, UsersIcon, PlantIcon, HeartIcon, GlobeIcon, LightbulbIcon, WrenchIcon } from '@phosphor-icons/react';
import { useInView } from '../hooks/useInView';

export const Services = () => {
    const services = [
        { title: 'Consultancy', icon: <LightbulbIcon size={32} weight="duotone" />, desc: 'Strategic guidance on sustainable materials, ethical sourcing, and building conscious brand identities.' },
        { title: 'Product Development', icon: <WrenchIcon size={32} weight="duotone" />, desc: 'From initial concept and prototyping to final production-ready designs for kidswear and pet essentials.' },
        { title: 'Private Label Manufacturing', icon: <ScissorsIcon size={32} weight="duotone" />, desc: 'End-to-end manufacturing with your brand tags and specifications.' },
        { title: 'Custom Design', icon: <PaletteIcon size={32} weight="duotone" />, desc: 'Our design team helps bring your sketches and concepts to life.' },
        { title: 'Global Logistics', icon: <TruckIcon size={32} weight="duotone" />, desc: 'Efficient shipping solutions to over 30 countries worldwide.' },
        { title: 'Wholesale Sourcing', icon: <PackageIcon size={32} weight="duotone" />, desc: 'Bulk ordering of our ready-to-ship sustainable collections.' },
    ];

    const { ref: processRef, isInView } = useInView({ threshold: 0.2 });

    return (
        <>
            <Section>
                <Container>
                    <div className="text-center mb-16">
                        <Heading level={1} className="text-4xl">Our Services</Heading>
                        <Text variant="lead">Comprehensive solutions for kidswear and pet product brands.</Text>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s) => (
                            <Card key={s.title} variant="flat" className="relative overflow-hidden p-8 h-full border border-[var(--color-bg-warm)] hover:shadow-md transition-shadow">
                                <div className="absolute top-6 right-6 text-[var(--color-accent)] z-10">
                                    {s.icon}
                                </div>
                                <div className="mb-6 pr-12 relative z-10">
                                    <Heading level={3} className="text-xl m-0">{s.title}</Heading>
                                </div>
                                <Text className="text-[var(--color-text-secondary)] relative z-10">
                                    {s.desc}
                                </Text>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section background="warm">
                <Container>
                    <Heading level={2} className="text-center mb-12 text-4xl">Our Process</Heading>
                    <div ref={processRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connection Line (Hidden on mobile) */}
                        <div
                            className={`hidden md:block absolute top-8 left-[12.5%] h-0.5 bg-[var(--color-border)] -z-10 transition-all duration-1500 ease-out`}
                            style={{ width: isInView ? '75%' : '0%' }}
                        />

                        {[
                            { title: 'Collaboration', icon: <UsersIcon className="w-8 h-8" weight="duotone" />, desc: 'We work directly with artisan communities to understand their strengths and traditions.' },
                            { title: 'Sourcing', icon: <PlantIcon className="w-8 h-8" weight="duotone" />, desc: 'Selecting premium organic cottons and natural dyes that are kind to the planet.' },
                            { title: 'Manufacturing', icon: <HeartIcon className="w-8 h-8" weight="duotone" />, desc: 'Ethical production ensuring fair wages and safe working conditions for all makers.' },
                            { title: 'Delivery', icon: <GlobeIcon className="w-8 h-8" weight="duotone" />, desc: 'Seamless global logistics ensuring your products arrive safely and on time.' },
                        ].map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center text-center group transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="w-16 h-16 bg-white border border-[var(--color-border)] rounded-full flex items-center justify-center text-[var(--color-accent)] mb-6 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                                    {step.icon}
                                </div>
                                <Heading level={4} className="text-lg mb-2">{step.title}</Heading>
                                <Text variant="small" className="text-[var(--color-text-secondary)]">{step.desc}</Text>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
};
