/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accent2: 'rgb(var(--color-accent2) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"PT Serif"', 'Georgia', 'serif'],
        sans: ['"PT Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"PT Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      // Smooth ease-out curve used as the default for every `transition-*`
      // utility, so all hovers/color/transform transitions feel consistent.
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.22, 1, 0.36, 1)',
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        /* translate-only: scaling a blurred layer re-rasterizes the blur
           every frame, which is expensive. Translate reuses the cached
           layer, so the drift stays GPU-cheap. */
        'float': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(30px, -20px, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
