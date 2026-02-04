/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "var(--color-border)",
                input: "var(--color-border)",
                ring: "var(--color-accent)",
                background: "var(--color-bg)",
                foreground: "var(--color-text-primary)",
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
