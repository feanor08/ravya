import { useState } from 'react';
import { Baby, PawPrint, Check } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Heading, Text } from './ui/Typography';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    kidswear: false,
    petProducts: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const toggleInterest = (interest: 'kidswear' | 'petProducts') => {
    setFormData(prev => ({
      ...prev,
      [interest]: !prev[interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <Section background="warm" id="contact">
      <Container size="md">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[var(--color-border)]">
          <div className="text-center mb-10">
            <Heading level={2} className="text-3xl font-semibold mb-3">Get in Touch</Heading>
            <Text className="text-[var(--color-text-secondary)]">
              Interested in our collections? Request a quote or catalogue today.
            </Text>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto">
            {/* Standard Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <Input
                label="Full Name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Company Name"
                name="company"
                placeholder="Business Ltd."
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="w-full">
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Card-based Interest Selection */}
            <div className="w-full space-y-4">
              <label className="block text-sm font-semibold text-[var(--color-text-primary)]">What are you interested in?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Kidswear Card */}
                <div
                  onClick={() => toggleInterest('kidswear')}
                  className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col items-center gap-2 text-center group ${formData.kidswear
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent-light)]/30'
                    : 'border-[var(--color-border)] hover:border-[var(--color-accent-muted)] bg-white'
                    }`}
                >
                  <div className={`p-2.5 rounded-full transition-colors ${formData.kidswear ? 'bg-[var(--color-accent)] text-white' : 'bg-gray-50 text-gray-400 group-hover:text-[var(--color-accent)]'}`}>
                    <Baby className="w-5 h-5" />
                  </div>
                  <Heading level={4} className={`text-base m-0 ${formData.kidswear ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-text-primary)]'}`}>Kidswear</Heading>
                  {formData.kidswear && (
                    <div className="absolute top-2 right-2 text-[var(--color-accent)]">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Pet Products Card */}
                <div
                  onClick={() => toggleInterest('petProducts')}
                  className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col items-center gap-2 text-center group ${formData.petProducts
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent-light)]/30'
                    : 'border-[var(--color-border)] hover:border-[var(--color-accent-muted)] bg-white'
                    }`}
                >
                  <div className={`p-2.5 rounded-full transition-colors ${formData.petProducts ? 'bg-[var(--color-accent)] text-white' : 'bg-gray-50 text-gray-400 group-hover:text-[var(--color-accent)]'}`}>
                    <PawPrint className="w-5 h-5" />
                  </div>
                  <Heading level={4} className={`text-base m-0 ${formData.petProducts ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-text-primary)]'}`}>Pet Wear</Heading>
                  {formData.petProducts && (
                    <div className="absolute top-2 right-2 text-[var(--color-accent)]">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button type="submit" fullWidth size="lg">Send Inquiry</Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}
