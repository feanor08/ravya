import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'flat';
}

export const Card: React.FC<CardProps> = ({
    children,
    variant = 'default',
    className = '',
    ...props
}) => {
    const variants = {
        default: 'bg-white shadow-md border border-[var(--color-border)]',
        outline: 'bg-transparent border border-[var(--color-border)]',
        flat: 'bg-[var(--color-bg-alt)] border-none',
    };

    return (
        <div className={`rounded-xl p-6 ${variants[variant]} ${className}`} {...props}>
            {children}
        </div>
    );
};
