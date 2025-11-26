/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(4rem, 12vw, 16rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'section': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'project': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': 'clamp(8rem, 20vh, 16rem)',
      },
      maxWidth: {
        'content': '1400px',
      },
    },
  },
  plugins: [],
}
