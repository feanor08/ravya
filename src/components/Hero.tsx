import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Heading, Text } from './ui/Typography';

import carousel1 from '../assets/CarouselImage1.webp';
import carousel2 from '../assets/CarouselImage2.webp';
import carousel3 from '../assets/CarouselImage3.webp';

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-[var(--color-bg)] overflow-hidden">
      {/* Background Graphic/Shape - Placeholder for now */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-bg-alt)] rounded-bl-[100px] z-0 opacity-50 hidden md:block" /> */}

      <Container className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-sm font-semibold tracking-wide mb-6 animate-slide-up-fade">
            EST. 2024
          </span>
          <Heading
            level={1}
            className="text-5xl md:text-6xl lg:text-7xl mb-6 opacity-0 animate-slide-up-fade"
            style={{ animationDelay: '0.2s' }}
          >
            Conscious Apparel, <br />
            <span className="text-[var(--color-accent)]">Crafted for Little Ones</span>
          </Heading>
          <div className="opacity-0 animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
            <Text variant="lead" className="mb-8 max-w-lg">
              Sustainably sourced kidswear and pet products. We blend artisan craftsmanship with eco-friendly materials for the modern wholesale buyer.
            </Text>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg">Explore Collection</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Request Catalogue</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image Carousel */}
        <div className="relative aspect-[4/5] md:aspect-square bg-[var(--color-bg-alt)] rounded-[1rem] overflow-hidden shadow-xl group">
          <Carousel />
        </div>
      </Container>
    </section>
  );
}

function Carousel() {
  const images = [
    {
      src: carousel1,
      alt: "Sustainable Kidswear"
    },
    {
      src: carousel2,
      alt: "Pet Accessories"
    },
    {
      src: carousel3,
      alt: "Artisan Fabrics"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]); // Reset timer whenever activeIndex changes (auto or manual)

  return (
    <div className="relative w-full h-full">
      {/* Images container */}
      <div className="flex w-full h-full transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10 items-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="group relative flex items-center justify-center p-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === activeIndex ? (
              // Active Indicator: Linear Progress Bar
              <div className="w-12 h-1.5 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full origin-left"
                  style={{ animation: 'progressLinear 5s linear forwards' }}
                />
              </div>
            ) : (
              // Inactive Dot
              <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white/80 transition-all duration-300 transform group-hover:scale-125" />
            )}
          </button>
        ))}
      </div>

      {/* Inline styles for the linear progress animation */}
      <style>{`
        @keyframes progressLinear {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
