import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

import logo from '../assets/HeaderLogo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ];

  const location = useLocation();
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const updateSlider = () => {
      const activeIndex = navItems.findIndex(item =>
        item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path)
      );

      if (activeIndex !== -1 && itemsRef.current[activeIndex]) {
        const element = itemsRef.current[activeIndex];
        if (element) {
          setSliderStyle({
            left: element.offsetLeft,
            width: element.offsetWidth
          });
        }
      } else {
        setSliderStyle({ left: 0, width: 0 });
      }
    };

    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [location.pathname]);

  const content = (
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <img src={logo} alt="House of Ravya" className="h-10 w-auto object-contain" />
      </Link>

      {/* Desktop Nav */}
      <nav ref={navRef} className="hidden md:flex items-center gap-8 relative py-2">
        {navItems.map((item, index) => (
          <NavLink
            key={item.label}
            ref={(el) => { itemsRef.current[index] = el; }}
            to={item.path}
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition-colors relative z-10 ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
        {/* Slider */}
        <div
          className="absolute bottom-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 ease-in-out rounded-full"
          style={{
            left: `${sliderStyle.left}px`,
            width: `${sliderStyle.width}px`,
            opacity: sliderStyle.width > 0 ? 1 : 0
          }}
        />
      </nav>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-6">
        <a href="tel:+91 83104 52882" className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]">
          <Phone size={18} />
          <span>+91 83104 52882</span>
        </a>
        <Button size="sm" variant="primary">Catalogue</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 text-[var(--color-text-primary)]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <Container>
        {content}
      </Container>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-bg)] border-b border-[var(--color-border)] py-6 shadow-lg">
          <Container>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg font-medium py-2 border-b border-[var(--color-border)] ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-primary)]'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a href="tel:+919876543210" className="flex items-center gap-2 font-medium">
                  <Phone size={18} />
                  <span>+91 9876543210</span>
                </a>
                <Button fullWidth>Request Catalogue</Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
