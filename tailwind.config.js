/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-void': '#0a0a0f',
        'cosmic-white': '#f8f8ff',
        'void-purple': '#4a148c',
        'eldritch-green': '#1b5e20',
        'portal-blue': '#311b92',
        'starlight-silver': '#c0c0c0',
        'dark-matter': '#212121',
        'raw-bg': '#0f0f0f',
        'raw-text': '#e8e8e8',
        'modern-bg': '#151515',
        'modern-text': '#ffffff',
        'atmospheric-secondary': '#1a1a2e',
        'raw-secondary': '#2d2d2d',
        'modern-secondary': '#424242',
      },
      fontFamily: {
        'cosmic-header': ['Orbitron', 'sans-serif'],
        'atmospheric': ['Cinzel', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'cosmic-pulse': 'cosmicPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        cosmicPulse: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 