import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // First reset to top
        window.scrollTo(0, 0);

        // If there's a hash, scroll to that element after the page renders
        if (hash) {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // 100ms timeout provides enough time for React to render the new page layout
        }
    }, [pathname, hash]);

    return null;
}
