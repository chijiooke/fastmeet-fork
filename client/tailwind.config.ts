/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#body',
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '.45rem',
        md: '.5rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: {
          main: 'var(--color-primary-main)',
          submain: 'var(--color-primary-submain)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
          lighter: 'var(--color-primary-lighter)',
          darker: 'var(--color-primary-darker)',
          contrastText: 'var(--color-primary-contrastText)',
        },
        secondary: {
          main: 'var(--color-secondary-main)',
          submain: 'var(--color-secondary-submain)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
          lighter: 'var(--color-secondary-lighter)',
          darker: 'var(--color-secondary-darker)',
          contrastText: 'var(--color-secondary-contrastText)',
        },
        complementary: {
          main: 'var(--color-complementary-main)',
          light: 'var(--color-complementary-light)',
          dark: 'var(--color-complementary-dark)',
          lighter: 'var(--color-complementary-lighter)',
          darker: 'var(--color-complementary-darker)',
          contrastText: 'var(--color-complementary-contrastText)',
        },
        success: {
          main: 'var(--color-success-main)',
          light: 'var(--color-success-light)',
          dark: 'var(--color-success-dark)',
          lighter: 'var(--color-success-lighter)',
          darker: 'var(--color-success-darker)',
          contrastText: 'var(--color-success-contrastText)',
        },
        info: {
          main: 'var(--color-info-main)',
          light: 'var(--color-info-light)',
          dark: 'var(--color-info-dark)',
          lighter: 'var(--color-info-lighter)',
          darker: 'var(--color-info-darker)',
          contrastText: 'var(--color-info-contrastText)',
        },
        warning: {
          main: 'var(--color-warning-main)',
          light: 'var(--color-warning-light)',
          dark: 'var(--color-warning-dark)',
          lighter: 'var(--color-warning-lighter)',
          darker: 'var(--color-warning-darker)',
          contrastText: 'var(--color-warning-contrastText)',
        },
        error: {
          main: 'var(--color-error-main)',
          light: 'var(--color-error-light)',
          dark: 'var(--color-error-dark)',
          lighter: 'var(--color-error-lighter)',
          darker: 'var(--color-error-darker)',
          contrastText: 'var(--color-error-contrastText)',
        },
        common: {
          black: 'var(--color-common-black)',
          white: 'var(--color-common-white)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          disabled: 'var(--color-text-disabled)',
        },
        background: {
          paper: 'var(--color-background-paper)',
          default: 'var(--color-background-default)',
        },
        action: {
          active: 'var(--color-action-active)',
          hover: 'var(--color-action-hover)',
          selected: 'var(--color-action-selected)',
          disabled: 'var(--color-action-disabled)',
          disabledBackground: 'var(--color-action-disabledBackground)',
          focus: 'var(--color-action-focus)',
        },
        gray: {
          50: 'var(--color-grey-50)',
          100: 'var(--color-grey-100)',
          200: 'var(--color-grey-200)',
          300: 'var(--color-grey-300)',
          400: 'var(--color-grey-400)',
          500: 'var(--color-grey-500)',
          600: 'var(--color-grey-600)',
          700: 'var(--color-grey-700)',
          800: 'var(--color-grey-800)',
          900: 'var(--color-grey-900)',
        },
      },
      fontFamily: {
        'proxima-nova': ['Proxima Nova'],
      },
      zIndex: {
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
      },
    },
  },
  plugins: [],
};
