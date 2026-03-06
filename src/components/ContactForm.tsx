import { useState } from 'react';
import { BabyIcon, PawPrintIcon, CheckIcon } from '@phosphor-icons/react';
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
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Build the message payload
      let finalMessage = `Interests:\n`;
      if (formData.kidswear) finalMessage += `- Kidswear\n`;
      if (formData.petProducts) finalMessage += `- Pet Wear\n`;
      if (!formData.kidswear && !formData.petProducts) finalMessage += `- General Inquiry\n`;

      finalMessage += `\nMessage:\n${formData.message}`;
      if (formData.company) finalMessage = `Company: ${formData.company}\n\n${finalMessage}`;

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: finalMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully.');

      // Optionally reset form
      setFormData({
        name: '', company: '', email: '', message: '', kidswear: false, petProducts: false
      });

    } catch (err: unknown) {
      console.error('Email error:', err);
      setSubmitStatus('error');
      setSubmitMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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

          {submitStatus === 'success' ? (
            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <CheckIcon className="w-8 h-8" weight="bold" />
              </div>
              <Heading level={3} className="text-green-800 mb-2">Message Sent!</Heading>
              <Text className="text-green-700">{submitMessage}</Text>
              <Button className="mt-6" onClick={() => setSubmitStatus('idle')} variant="outline">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto">
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm">
                  {submitMessage}
                </div>
              )}

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
                  placeholder="hello@example.com"
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
                      <BabyIcon className="w-5 h-5" weight="duotone" />
                    </div>
                    <Heading level={4} className={`text-base m-0 ${formData.kidswear ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-text-primary)]'}`}>Kidswear</Heading>
                    {formData.kidswear && (
                      <div className="absolute top-2 right-2 text-[var(--color-accent)]">
                        <CheckIcon className="w-4 h-4" weight="bold" />
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
                      <PawPrintIcon className="w-5 h-5" weight="duotone" />
                    </div>
                    <Heading level={4} className={`text-base m-0 ${formData.petProducts ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-text-primary)]'}`}>Pet Wear</Heading>
                    {formData.petProducts && (
                      <div className="absolute top-2 right-2 text-[var(--color-accent)]">
                        <CheckIcon className="w-4 h-4" weight="bold" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-y"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
