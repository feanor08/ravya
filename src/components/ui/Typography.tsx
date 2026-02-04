import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
    children,
    level = 2,
    className = '',
    ...props
}) => {
    const Tag = `h${level}` as React.ElementType;
    const baseStyle = 'mb-4';

    // Tailwind classes aren't set up for "h1", "h2" etc in a utility way without a plugin usually, 
    // but we defined base styles in index.css. 
    // We can add utility classes here if needed or just rely on index.css + overrides.

    return (
        <Tag className={`${baseStyle} ${className}`} {...props}>
            {children}
        </Tag>
    );
};

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: 'body' | 'muted' | 'small' | 'lead';
    className?: string;
}

export const Text: React.FC<TextProps> = ({
    children,
    variant = 'body',
    className = '',
    ...props
}) => {
    const variants = {
        body: 'text-base leading-relaxed',
        muted: 'text-base opacity-70 leading-relaxed',
        small: 'text-sm opacity-80',
        lead: 'text-xl font-light leading-relaxed',
    };

    return (
        <p className={`${variants[variant]} ${className}`} {...props}>
            {children}
        </p>
    );
};
