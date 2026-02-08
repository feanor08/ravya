import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Info, Sparkles, ShoppingBag, Mail } from 'lucide-react';

export function MobileBottomNav() {
    const location = useLocation();
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
    const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    const navItems = [
        { path: '/', icon: <Home size={22} /> },
        { path: '/about', icon: <Info size={22} /> },
        { path: '/services', icon: <Sparkles size={22} /> },
        { path: '/products', icon: <ShoppingBag size={22} /> },
        { path: '/contact', icon: <Mail size={22} /> },
    ];

    useEffect(() => {
        const activeIndex = navItems.findIndex(item =>
            item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path)
        );

        if (activeIndex !== -1 && itemsRef.current[activeIndex]) {
            const element = itemsRef.current[activeIndex];
            if (element) {
                setPillStyle({
                    left: element.offsetLeft,
                    width: element.offsetWidth
                });
            }
        }
    }, [location.pathname]);

    return (
        <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-[60] px-2 py-2 bg-white/80 backdrop-blur-md border border-white/40 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] flex items-center justify-between pointer-events-auto">
            {/* Sliding Pill */}
            <div
                className="absolute top-1/2 -translate-y-1/2 h-[calc(100%-16px)] bg-[var(--color-accent)] rounded-full transition-all duration-300 ease-in-out z-0 pointer-events-none shadow-sm"
                style={{
                    left: `${pillStyle.left}px`,
                    width: `${pillStyle.width}px`,
                    opacity: pillStyle.width > 0 ? 1 : 0
                }}
            />

            {navItems.map((item, index) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    ref={(el) => { itemsRef.current[index] = el; }}
                    className="relative z-10 flex flex-col items-center justify-center w-full py-3"
                >
                    {({ isActive }) => (
                        <div className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-[var(--color-text-secondary)]'}`}>
                            {item.icon}
                        </div>
                    )}
                </NavLink>
            ))}
        </nav>
    );
}

