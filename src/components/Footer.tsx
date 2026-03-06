import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { Container } from './ui/Container';
import { Heading } from './ui/Typography';

import footerLogo from '../assets/FooterLogo.png';

export const Footer = () => {
    return (
        <footer className="bg-[var(--color-text-primary)] text-white py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-sm">
                    {/* Column 1: Company Info */}
                    <div className="space-y-4 lg:col-span-4 flex flex-col items-center text-center">
                        <img src={footerLogo} alt="House of Ravya" className="w-[80%] object-contain mb-2" />
                        <p className="text-[var(--color-accent-light)] text-sm">
                            Reviving Artisanal Value <br /> Yielding Authenticity
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2">
                        <Heading level={4} className="text-lg text-white mb-6 font-semibold">Quick Links</Heading>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Services</Link></li>
                            <li><Link to="/products" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Products</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Products */}
                    <div className="lg:col-span-2">
                        <Heading level={4} className="text-lg text-white mb-6 font-semibold">Products</Heading>
                        <ul className="space-y-3">
                            <li><Link to="/products" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Kids Wear</Link></li>
                            <li><Link to="/products" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Pets Wear</Link></li>
                            <li><Link to="/products" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">Pet Beds</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="lg:col-span-4">
                        <Heading level={4} className="text-lg text-white mb-6 font-semibold">Contact Us</Heading>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPinIcon className="w-5 h-5 flex-shrink-0" weight="duotone" />
                                <span className="text-gray-300">8 & 9, Jayaramappa Complex, Sy No. 353, Bidaraguppe, Sarjapur-Attibele Road, Bengaluru, Karnataka 572101</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <PhoneIcon className="w-5 h-5 flex-shrink-0" weight="duotone" />
                                <a href="tel:+918310452882" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">
                                    +91 83104 52882
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <EnvelopeIcon className="w-5 h-5 flex-shrink-0" weight="duotone" />
                                <a href="mailto:sales@houseofravya.com" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">
                                    sales@houseofravya.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-300 mt-16 pt-8 text-center text-gray-300 text-sm">
                    <p>&copy; {new Date().getFullYear()} House of Ravya. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};
