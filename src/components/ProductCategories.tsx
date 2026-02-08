import { Link } from 'react-router-dom';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Heading, Text } from './ui/Typography';

export function ProductCategories() {
  const categories = [
    { id: 'kids', title: 'For Kids', image: '/assets/kids-category.jpg', link: '/products?category=kids' },
    { id: 'pets', title: 'For Pets', image: '/assets/pets-category.jpg', link: '/products?category=pets' }
  ];

  return (
    <Section background="warm" className="text-center">
      <Container>
        <Heading level={2} className="mb-4 text-4xl">Our Collections</Heading>
        <Text className="mb-12 max-w-2xl mx-auto">
          Thoughtfully designed essentials for your loved ones, crafted with care for the planet.
        </Text>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.link} className="group relative block overflow-hidden rounded-lg aspect-[4/3] bg-gray-100">
              {/* Placeholder images if assets don't exist yet */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="sr-only">Image for {cat.title}</span>
              </div>

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur px-8 py-4 rounded-sm shadow-sm transition-transform group-hover:-translate-y-1">
                  <h3 className="text-2xl text-[var(--color-text-primary)] m-0">{cat.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
