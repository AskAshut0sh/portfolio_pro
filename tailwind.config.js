/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#E50914', // Netflix-inspired red - red-600
        'secondary': '#F5F5F1', // Warm off-white - stone-100
        'accent': '#FFD700', // Strategic gold - yellow-400
        
        // Background Colors
        'background': '#141414', // Deep charcoal - gray-900
        'surface': '#1F1F1F', // Elevated surface - gray-800
        
        // Text Colors
        'text-primary': '#FFFFFF', // Pure white - white
        'text-secondary': '#B3B3B3', // Muted gray - gray-400
        
        // Status Colors
        'success': '#46D369', // Fresh green - green-500
        'warning': '#FFB800', // Warm amber - amber-500
        'error': '#FF6B6B', // Softer red - red-400
        
        // Border Colors
        'border': 'rgba(255, 255, 255, 0.1)', // Subtle white border
        'border-focus': 'rgba(229, 9, 20, 0.5)', // Primary focus border
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'caption': ['Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        'normal': '400',
        'semibold': '600',
        'bold': '700',
      },
      boxShadow: {
        'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'elevation-2': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'elevation-3': '0 8px 32px rgba(0, 0, 0, 0.35)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      scale: {
        '102': '1.02',
      },
      zIndex: {
        '1000': '1000',
        '1001': '1001',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}