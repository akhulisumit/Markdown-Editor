/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            code: {
              color: 'var(--tw-prose-code)',
              backgroundColor: 'var(--tw-prose-pre-bg)',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.prose': {
          '--tw-prose-body': 'theme("colors.slate.700")',
          '--tw-prose-headings': 'theme("colors.slate.900")',
          '--tw-prose-lead': 'theme("colors.slate.600")',
          '--tw-prose-links': 'theme("colors.indigo.600")',
          '--tw-prose-bold': 'theme("colors.slate.900")',
          '--tw-prose-counters': 'theme("colors.slate.500")',
          '--tw-prose-bullets': 'theme("colors.slate.300")',
          '--tw-prose-hr': 'theme("colors.slate.200")',
          '--tw-prose-quotes': 'theme("colors.slate.900")',
          '--tw-prose-quote-borders': 'theme("colors.slate.200")',
          '--tw-prose-captions': 'theme("colors.slate.500")',
          '--tw-prose-code': 'theme("colors.slate.700")',
          '--tw-prose-pre-bg': 'theme("colors.slate.100")',
          '--tw-prose-pre-code': 'theme("colors.slate.700")',
          '--tw-prose-pre-borders': 'theme("colors.slate.300")',
          '--tw-prose-th-borders': 'theme("colors.slate.300")',
          '--tw-prose-td-borders': 'theme("colors.slate.200")',
          
          // Dark mode
          '--tw-prose-invert-body': 'theme("colors.slate.300")',
          '--tw-prose-invert-headings': 'theme("colors.white")',
          '--tw-prose-invert-lead': 'theme("colors.slate.400")',
          '--tw-prose-invert-links': 'theme("colors.indigo.400")',
          '--tw-prose-invert-bold': 'theme("colors.white")',
          '--tw-prose-invert-counters': 'theme("colors.slate.400")',
          '--tw-prose-invert-bullets': 'theme("colors.slate.600")',
          '--tw-prose-invert-hr': 'theme("colors.slate.700")',
          '--tw-prose-invert-quotes': 'theme("colors.slate.100")',
          '--tw-prose-invert-quote-borders': 'theme("colors.slate.700")',
          '--tw-prose-invert-captions': 'theme("colors.slate.400")',
          '--tw-prose-invert-code': 'theme("colors.slate.300")',
          '--tw-prose-invert-pre-bg': 'theme("colors.slate.900")',
          '--tw-prose-invert-pre-code': 'theme("colors.slate.300")',
          '--tw-prose-invert-pre-borders': 'theme("colors.slate.700")',
          '--tw-prose-invert-th-borders': 'theme("colors.slate.600")',
          '--tw-prose-invert-td-borders': 'theme("colors.slate.700")',
        },
      });
    },
  ],
};