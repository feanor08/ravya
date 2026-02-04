import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    background?: 'default' | 'warm' | 'white';
}

export const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    background = 'default',
    ...props
}) => {
    const backgrounds = {
        default: 'bg-[var(--color-bg)]', // #FDFBF7
        warm: 'bg-[var(--color-bg-alt)]', // #F5EFEB
        white: 'bg-white',
    };

    return (
        <section className={`py-16 md:py-24 ${backgrounds[background]} ${className}`} {...props}>
            {children}
        </section>
    );
};
