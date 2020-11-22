module.exports = {
  purge: false,
  target: "relaxed",
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',

        form: 'var(--bg-background-form)',
      },
      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },
      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },
    },
    fontFamily: {
      title: ['calgary-script-ot', 'sans-serif'],
      sans: ['futura-pt', 'sans-serif'],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['monospace']
    },
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      }
    }
  },
  variants: {},
  plugins: [],
};
