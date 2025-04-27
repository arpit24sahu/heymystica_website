import type { Config } from 'tailwindcss';
import { themeColors } from './lib/theme-colors';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        'deep-purple': themeColors.deepPurple.hex,
        'midnight-purple': themeColors.midnightPurple.hex,
        'royal-purple': themeColors.royalPurple.hex,
        'bright-purple': themeColors.brightPurple.hex,
        'lavender': themeColors.lavender.hex,
        'orchid': themeColors.orchid.hex,
        'gold': themeColors.gold.hex,
        'light-gold': themeColors.lightGold.hex,
        'starlight': themeColors.starlight.hex,
        'cosmic-gray': themeColors.cosmicGray.hex,
        'mystical-black': themeColors.mysticalBlack.hex,
        'amethyst': themeColors.amethyst.hex,
        'celestial-blue': themeColors.celestialBlue.hex,
        'emerald': themeColors.emerald.hex,
        'dark-green': themeColors.darkGreen.hex,
        'mint-green': themeColors.mintGreen.hex,
        'jade': themeColors.jade.hex,
        'purple': {
          50: 'rgba(74, 20, 140, 0.05)',
          100: 'rgba(74, 20, 140, 0.1)',
          200: 'rgba(74, 20, 140, 0.2)',
          300: 'rgba(74, 20, 140, 0.3)',
          400: 'rgba(74, 20, 140, 0.4)',
          500: 'rgba(74, 20, 140, 0.5)',
          600: 'rgba(74, 20, 140, 0.6)',
          700: 'rgba(74, 20, 140, 0.7)',
          800: 'rgba(74, 20, 140, 0.8)',
          900: 'rgba(74, 20, 140, 0.9)',
          DEFAULT: 'rgba(74, 20, 140, 1)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        heading: ['var(--font-cinzel)'],
        decorative: ['var(--font-cinzel-decorative)'],
        body: ['var(--font-alegreya)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-white': 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
        'mystic': `linear-gradient(to bottom right, ${themeColors.deepPurple.hex}, ${themeColors.royalPurple.hex})`,
        'purple-accent': `linear-gradient(to right, ${themeColors.royalPurple.hex}, ${themeColors.brightPurple.hex})`,
        'purple-lavender': `linear-gradient(to right, ${themeColors.brightPurple.hex}, ${themeColors.lavender.hex})`,
        'purple-glow': `radial-gradient(circle at center, ${themeColors.royalPurple.hex} 0%, ${themeColors.midnightPurple.hex} 100%)`,
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-purple': {
          '0%, 100%': { boxShadow: `0 0 20px 5px rgba(74, 20, 140, 0.2)` },
          '50%': { boxShadow: `0 0 20px 5px rgba(74, 20, 140, 0.5)` },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-purple': 'pulse-purple 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'purple-sm': '0 1px 2px 0 rgba(74, 20, 140, 0.05)',
        'purple': '0 0 15px 0 rgba(74, 20, 140, 0.3)',
        'purple-md': '0 0 20px 0 rgba(74, 20, 140, 0.4)',
        'purple-lg': '0 0 25px 0 rgba(74, 20, 140, 0.5)',
        'purple-xl': '0 0 35px 5px rgba(74, 20, 140, 0.6)',
        'amethyst': '0 0 20px 0 rgba(153, 102, 204, 0.4)',
        'bright-purple': '0 0 20px 0 rgba(106, 27, 154, 0.4)',
      },
      textShadow: {
        'purple-sm': '0 0 2px rgba(74, 20, 140, 0.3)',
        'purple': '0 0 4px rgba(74, 20, 140, 0.4)',
        'purple-lg': '0 0 8px rgba(74, 20, 140, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities, theme }) {
      const textShadows = theme('textShadow');
      const utilities = {};
      
      if (textShadows) {
        Object.entries(textShadows).forEach(([key, value]) => {
          utilities[`.text-shadow${key === 'DEFAULT' ? '' : `-${key}`}`] = {
            textShadow: value,
          };
        });
        
        addUtilities(utilities);
      }
    },
  ],
};
export default config;