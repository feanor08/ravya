import { Link } from 'react-router-dom';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Heading, Text } from './ui/Typography';
import { CheckCircleIcon } from '@phosphor-icons/react';
import imgKids from '../assets/ForKids.png';
import imgPets from '../assets/ForPets.png';

export function ProductCategories() {
  const categories = [
    {
      id: 'kids',
      title: 'For Kids',
      image: imgKids,
      link: '/products?category=kids',
      features: [
        'Organic cotton & natural fibres',
        'Safe, skin-friendly dyes',
        'Age-appropriate sizing'
      ]
    },
    {
      id: 'pets',
      title: 'For Pets',
      image: imgPets,
      link: '/products?category=pets',
      features: [
        'Pet-safe, bite-resistant textiles',
        'Weather-resistant coatings',
        'Easy-clean construction',
        'Low-impact stuffing options'
      ]
    }
  ];

  return (
    <Section background="warm" className="text-center">
      <Container>
        <Heading level={2} className="mb-4 text-4xl">Our Collections</Heading>
        <Text className="mb-12 max-w-2xl mx-auto">
          Thoughtfully designed essentials for your loved ones, crafted with care for the planet.
        </Text>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.link} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border-2 border-[var(--color-bg-warm)]">

              {/* Top: Image Section */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg-alt)]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
              </div>

              {/* Bottom: Text & Features Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-medium text-[var(--color-text-primary)] mb-4">{cat.title}</h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {cat.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon weight="fill" className="text-[var(--color-accent)] mt-1 flex-shrink-0" size={18} />
                      <span className="text-base text-[var(--color-text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <span className="inline-block font-medium text-[var(--color-accent)] group-hover:underline underline-offset-4 decoration-2">
                    Explore Collection &rarr;
                  </span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
