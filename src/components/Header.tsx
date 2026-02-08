import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Container } from './ui/Container';

import logo from '../assets/HeaderLogo.png';

export function Header() {
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
    <div className="flex items-center justify-center md:justify-between h-20">
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
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <Container>
        {content}
      </Container>
    </header>
  );
}
