import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';
import { Scissors, Truck, Palette, Package, Users, Leaf, Heart, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const Services = () => {
    const services = [
        { title: 'Private Label Manufacturing', icon: <Scissors className="w-10 h-10" />, desc: 'End-to-end manufacturing with your brand tags and specifications.' },
        { title: 'Custom Design', icon: <Palette className="w-10 h-10" />, desc: 'Our design team helps bring your sketches and concepts to life.' },
        { title: 'Global Logistics', icon: <Truck className="w-10 h-10" />, desc: 'Efficient shipping solutions to over 30 countries worldwide.' },
        { title: 'Wholesale Sourcing', icon: <Package className="w-10 h-10" />, desc: 'Bulk ordering of our ready-to-ship sustainable collections.' },
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

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((s) => (
                            <Card key={s.title} className="flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-shadow">
                                <div className="p-4 bg-[var(--color-bg-warm)] rounded-full text-[var(--color-accent)]">
                                    {s.icon}
                                </div>
                                <div>
                                    <Heading level={3} className="text-xl mb-2">{s.title}</Heading>
                                    <Text>{s.desc}</Text>
                                </div>
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
                            { title: 'Collaboration', icon: <Users className="w-8 h-8" />, desc: 'We work directly with artisan communities to understand their strengths and traditions.' },
                            { title: 'Sourcing', icon: <Leaf className="w-8 h-8" />, desc: 'Selecting premium organic cottons and natural dyes that are kind to the planet.' },
                            { title: 'Manufacturing', icon: <Heart className="w-8 h-8" />, desc: 'Ethical production ensuring fair wages and safe working conditions for all makers.' },
                            { title: 'Delivery', icon: <Globe className="w-8 h-8" />, desc: 'Seamless global logistics ensuring your products arrive safely and on time.' },
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
