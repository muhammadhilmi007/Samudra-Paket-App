/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    '../../packages/ui/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Color palette as defined in Windsurf Rules
        primary: '#2563EB', // Blue
        secondary: '#10B981', // Green
        accent: '#F59E0B', // Amber
        neutral: '#6B7280', // Gray
        error: '#EF4444', // Red
        success: '#22C55E',
        warning: '#F97316',
        info: '#3B82F6',
        background: '#F9FAFB',
        surface: '#FFFFFF',
        border: '#E5E7EB',
        'text-primary': '#111827',
        'text-secondary': '#4B5563',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
    },
    // Breakpoints as defined in Windsurf Rules
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
