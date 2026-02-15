import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    className = '',
    id,
    ...props
}) => {
    const generatedId = React.useId();
    const inputId = id || props.name || generatedId;

    return (
        <div className="w-full mb-4">
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1"
                >
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`
          flex h-11 w-full rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50
          ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}
          ${className}
        `}
                {...props}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};
