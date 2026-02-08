import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Heading, Text } from './ui/Typography';
import { Anchor, Globe, Scissors, Leaf } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Anchor className="w-8 h-8 text-[var(--color-accent)]" />,
      title: 'Low MOQ',
      subtitle: 'Flexible ordering for growing businesses.',
    },
    {
      icon: <Scissors className="w-8 h-8 text-[var(--color-accent)]" />,
      title: 'Private Label',
      subtitle: 'Custom manufacturing tailored to your brand.',
    },
    {
      icon: <Globe className="w-8 h-8 text-[var(--color-accent)]" />,
      title: 'Global Export',
      subtitle: 'Seamless shipping to over 30 countries.',
    },
    {
      icon: <Leaf className="w-8 h-8 text-[var(--color-accent)]" />,
      title: 'Eco-Friendly',
      subtitle: '100% natural, sustainable materials/fabrics.',
    },
  ];

  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12 text-4xl">
          <Heading level={2}>Why House of Ravya?</Heading>
          <Text className="max-w-2xl mx-auto text-[var(--color-text-secondary)]">
            We are committed to quality, sustainability, and ethical manufacturing practices.
          </Text>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card key={i} variant="flat" className="text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-bg)]">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">{f.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{f.subtitle}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
