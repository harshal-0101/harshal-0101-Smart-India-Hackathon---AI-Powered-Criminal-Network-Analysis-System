import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        defense: {
          950: '#060709',
          900: '#0B0D10', // near-black primary background
          850: '#0F1217',
          800: '#14181F', // card surface
          750: '#1A202A',
          700: '#232B38', // borders
          600: '#344154',
          400: '#64748B',
          300: '#94A3B8',
          100: '#E2E8F0',
        },
        cyan: {
          DEFAULT: '#22D3C7',
          400: '#22D3C7',
          500: '#14B8A6',
          bright: '#38F6E8',
          glow: 'rgba(34, 211, 199, 0.15)',
        },
        risk: {
          red: '#E24B4A',
          'red-glow': 'rgba(226, 75, 74, 0.18)',
          amber: '#EF9F27',
          'amber-glow': 'rgba(239, 159, 39, 0.18)',
          neutral: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(34, 211, 199, 0.08) 1px, transparent 1px)",
        'radial-vignette': "radial-gradient(circle at 50% 30%, rgba(34, 211, 199, 0.06), transparent 70%)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
