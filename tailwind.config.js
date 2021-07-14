module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {},
        neumorphismSize: {
            xs: '0.05em',
            sm: '0.1em',
            default: '0.2em',
            lg: '0.4em',
            xl: '0.8em',
        },
    },
    variants: {
        extend: {
            opacity: ['disabled']
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss-neumorphism'),
        require('tailwind-scrollbar')
    ],
}