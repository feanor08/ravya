import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className = '',
    size = 'lg'
}) => {
    const sizes = {
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
    };

    return (
        <div className={`w-full mx-auto px-4 md:px-6 ${sizes[size]} ${className}`}>
            {children}
        </div>
    );
};
