import { useEffect, useState } from 'react';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import { ClipboardTextIcon, GlobeIcon, PlantIcon, ScissorsIcon } from '@phosphor-icons/react';

export const About = () => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        const scheduleCollapse = () => {
            // Currently Expanded. Wait 8s then collapse.
            timeout = setTimeout(() => {
                setExpanded(false);
                scheduleExpand();
            }, 8000);
        };

        const scheduleExpand = () => {
            // Currently Collapsed. Wait 4s then expand.
            timeout = setTimeout(() => {
                setExpanded(true);
                scheduleCollapse();
            }, 2000);
        };

        // Start cycle: Initial 4s delay before first expansion
        scheduleExpand();

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <Section background="warm">
                <Container>
                    <Heading level={1} className="text-center mb-12 text-4xl">About House of Ravya</Heading>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Heading level={3} className="text-xl mb-4">Our Story</Heading>
                            <Text className="mb-4">
                                House of Ravya was born from a desire to bring India&apos;s timeless textile heritage into the lives of families around the world. What began as a deep appreciation for handcrafted fabrics has grown into a conscious design house creating soulful babywear and pet accessories, woven with care and cultural depth. At HOR, we collaborate with master artisans across India—reviving age-old crafts like Ajrakh, hand block printing, and khadi weaving. Each piece is created slowly and mindfully, using natural materials and traditional processes that honor the earth and those who work with it. Our journey is rooted in simplicity, authenticity, and emotion. We believe that what touches the skin of a baby or a beloved pet should be as honest and pure as the love they bring into our lives. From the first thread to the final touch, every product carries a story of human hands, heritage, and heart. This is not just fashion—it is a homecoming to values we hold dear: warmth, comfort, and conscious living.
                            </Text>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm rotate-2">
                            <div className="aspect-video bg-[var(--color-bg)] rounded-lg flex items-center justify-center text-[var(--color-text-muted)] mb-4">
                                Image Placeholder: Workshop or Founders
                            </div>
                            <div className="text-center">
                                <div className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-2 text-lg font-medium text-[var(--color-text-primary)]">
                                    {[
                                        { letter: "R", word: "eviving" },
                                        { letter: "A", word: "rtisanal" },
                                        { letter: "V", word: "alue" },
                                        { letter: "Y", word: "ielding" },
                                        { letter: "A", word: "uthenticity" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-baseline">
                                            <span className="text-[var(--color-accent)] font-bold text-xl">{item.letter}</span>
                                            <span className={`overflow-hidden transition-all duration-700 ease-in-out whitespace-nowrap ${expanded ? 'max-w-[150px] opacity-100 ml-0.25' : 'max-w-0 opacity-0'}`}>
                                                {item.word}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section background="white">
                <Container>
                    <Heading level={2} className="text-center mb-12 text-4xl">Why choose House of Ravya?</Heading>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Card 1: Artisan Craftsmanship */}
                        <Card variant="flat" className="p-8">
                            <ScissorsIcon className="w-10 h-10 text-[var(--color-accent)] mb-4" weight="duotone" />
                            <Heading level={3} className="text-xl mb-4">Artisan Craftsmanship</Heading>
                            <div className="space-y-4">
                                <div>
                                    <Text variant="small" className="font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1">Handmade by Indian Artisans</Text>
                                    <Text>We partner with master artisans across India to revive and celebrate heritage crafts like Ajrakh, Jaipuri block printing, Jamdani, IKAT and other timeless Indian textiles.</Text>
                                </div>
                                <div>
                                    <Text variant="small" className="font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1">Textiles with a Story</Text>
                                    <Text>Each product is rooted in centuries-old techniques and tells a story of tradition, care, and cultural pride.</Text>
                                </div>
                                <div>
                                    <Text variant="small" className="font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1">Designed for Babies & Pets</Text>
                                    <Text>A rare blend of form and function—our creations bring softness, beauty, and heritage to everyday essentials for children and companion animals.</Text>
                                </div>
                            </div>
                        </Card>

                        {/* Card 2: Sustainability */}
                        <Card variant="flat" className="p-8">
                            <PlantIcon className="w-10 h-10 text-[var(--color-accent)] mb-4" weight="duotone" />
                            <Heading level={3} className="text-xl mb-4">Sustainability</Heading>
                            <div className="space-y-4">
                                <div>
                                    <Text variant="small" className="font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1">Natural Fibers & Dyes</Text>
                                    <Text>We use breathable cottons, eco-friendly dyes, and slow processes that are safe for sensitive skin and the planet.</Text>
                                </div>
                                <div>
                                    <Text variant="small" className="font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1">Low-Impact Production</Text>
                                    <Text>Every step is intentional—from small-batch dyeing to waste-conscious cutting—ensuring we leave a lighter footprint.</Text>
                                </div>
                                <div>
                                    <Text variant="small" className="font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1">Ethical & Transparent</Text>
                                    <Text>We ensure fair wages, dignified livelihoods, and full supply chain traceability—empowering the makers behind each piece.</Text>
                                </div>
                            </div>
                        </Card>

                        {/* Card 3: Global Appeal */}
                        <Card variant="flat" className="p-8">
                            <GlobeIcon className="w-10 h-10 text-[var(--color-accent)] mb-4" weight="duotone" />
                            <Heading level={3} className="text-xl mb-4">Global Appeal</Heading>
                            <div className="space-y-4">
                                <div>
                                    <Text variant="small" className="font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1">Design Led Craftmanship, Export-Ready Quality</Text>
                                    <Text>We offer small-batch exclusivity with reliable, high-quality craftsmanship that appeals to discerning international buyers and concept stores.</Text>
                                </div>
                                <div>
                                    <Text variant="small" className="font-bold uppercase tracking-wider text-[var(--color-accent)] mb-1">Made in India, Celebrated Worldwide</Text>
                                    <Text>Each product brings the soul of Indian craftsmanship into homes across the world, reflecting a commitment to quality, heritage, and thoughtful design.</Text>
                                </div>
                            </div>
                        </Card>

                        {/* Card 4: Low MoQ & Certification */}
                        <Card variant="flat" className="p-8">
                            <ClipboardTextIcon className="w-10 h-10 text-[var(--color-accent)] mb-4" weight="duotone" />
                            <Heading level={3} className="text-xl mb-4">Low MoQ & Certification</Heading>
                            <Text>
                                We offer low minimum order quantities, backed by a proactive sampling squad that refines prototypes rapidly, ensuring fit, finish, and compliance.
                            </Text>
                            <br />
                            <Text>
                                Once designs are signed off, our streamlined, artisan-powered production moves seamlessly into small-batch manufacturing, delivering export-ready kidswear and pet collections worldwide within a reliable 30-to-45-day window turnaround.
                            </Text>
                        </Card>
                    </div>
                </Container>
            </Section>

        </>
    );
};
