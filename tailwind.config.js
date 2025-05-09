/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './context/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          card: 'var(--card-background)',
          primary: {
            DEFAULT: 'var(--primary)',
            foreground: 'var(--primary-foreground)',
          },
          secondary: {
            DEFAULT: 'var(--secondary)',
            foreground: 'var(--secondary-foreground)',
          },
          muted: {
            DEFAULT: 'var(--muted)',
            foreground: 'var(--muted-foreground)',
          },
          accent: {
            DEFAULT: 'var(--accent)',
            foreground: 'var(--accent-foreground)',
          },
          border: 'var(--border)',
          input: 'var(--input)',
          ring: 'var(--ring)',
        },
        fontFamily: {
          sans: ['var(--font-sans)'],
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        boxShadow: {
          'hover-lg': '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)',
        },
        animation: {
          'float': 'floating 5s ease-in-out infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'gradient-x': 'gradient 15s ease infinite',
        },
        keyframes: {
          floating: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-15px)' },
          },
          gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        },
        typography: {
          DEFAULT: {
            css: {
              maxWidth: '65ch',
              color: 'var(--foreground)',
              a: {
                color: 'var(--primary)',
                '&:hover': {
                  color: 'var(--primary)',
                },
              },
              strong: {
                color: 'var(--foreground)',
              },
              h1: {
                color: 'var(--foreground)',
              },
              h2: {
                color: 'var(--foreground)',
              },
              h3: {
                color: 'var(--foreground)',
              },
              h4: {
                color: 'var(--foreground)',
              },
              code: {
                color: 'var(--foreground)',
              },
              blockquote: {
                color: 'var(--foreground)',
                borderLeftColor: 'var(--border)',
              },
            },
          },
        },
        backgroundImage: {
          'grid-pattern': "url('/grid-pattern.svg')",
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          '.text-shadow': {
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          },
          '.text-shadow-lg': {
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
          },
        };
        addUtilities(newUtilities);
      },
    ],
  };