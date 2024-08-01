const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        xxs: '10px',
      },
      fontFamily: {
        mtavruli: ['BPG Nino Mtavruli', 'sans-serif'],
      },
      colors: {
        // figma
        primary: '#141719',
        secondary: { DEFAULT: '#6F787B', disabled: '#E9EBEC' },
        positive: {
          DEFAULT: '#25D272',
          secondary: '#62cead',
        },
        surface: {
          dark: '#333333',
          canvas: '#F9FAFA',
          brand: '#ff4648',
          highest: '#EEF1F1',
        },
        soft: {
          DEFAULT: '#E1E4E5',
          active: '#989898',
        },
        text: {
          disabled: '#A5AAAC',
        },
        // shadcn
        mainColor: 'hsl(var(--accent-color))',
        textColor: 'rgb(var(--text-color) / <alpha-value>)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        palette: {
          lighter: 'hsl(var(--palette-primary-lighter))',
          light: 'hsl(var(--palette-primary-light))',
          main: 'hsl(var(--palette-primary-main))',
          logo: 'hsl(var(--palette-primary-logo))',
          dark: 'hsl(var(--palette-primary-dark))',
          darker: 'hsl(var(--palette-primary-darker))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
};

export default config;
