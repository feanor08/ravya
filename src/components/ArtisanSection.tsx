import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Heading, Text } from './ui/Typography';
import { Hammer, Plant, Scales } from '@phosphor-icons/react';

export function ArtisanSection() {
  const badges = [
    { icon: <Hammer className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-accent)]" weight="duotone" />, label: 'Crafted by Artisans' },
    { icon: <Plant className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-accent)]" weight="duotone" />, label: 'Eco-Friendly Materials' },
    { icon: <Scales className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-accent)]" weight="duotone" />, label: 'Ethically Made' },
  ];

  return (
    <Section background="default" className="relative overflow-hidden">
      <Container className="text-center">
        <Heading level={2} className="mb-6 text-4xl">Artisan Craftsmanship & Sustainable Fabric Sourcing</Heading>
        <Text variant="lead" className="mb-12 max-w-3xl mx-auto">
          We partner with skilled craftspeople to deliver premium kidswear and pet products made from natural, eco-friendly fabrics.
          Every piece tells a story of tradition, quality, and respect for our planet.
        </Text>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-3">
              <div className="p-4 bg-[var(--color-bg-warm)] rounded-full mb-2">
                {b.icon}
              </div>
              <span className="font-medium text-[var(--color-text-primary)] text-lg">{b.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
