/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
          colors: {
           'brand' : '#D1E030',
           'accent' : '#9EEF80',
           'text' : '#3C422E',
           'background' : '#F6E6D9',
           'highlight' : '#FFF4EC',
           'stroke' : '#9FCD7A',
          },
          spacing: {
            '22': '5.5rem',
            'header': '60px',
            'promo': '20px',
            'full-header': 'calc(var(--height-header) + var(--height-promo))',
          },
          aspectRatio: {
            '4/5': '4 / 5',
          },
      },
      container: {
          center: true,
          padding: {
            DEFAULT: '20px',
            sm: '20px', // Adjust max-width for small screens
            md: '20px', // Adjust max-width for medium screens
            lg: '30px', // Adjust max-width for large screens
            xl: '30px', // Adjust max-width for extra large screens
            '2xl': '30px'
          }
      },
      fontFamily: {
        'heading': ['ITC Garamond Condensed', 'system-ui', 'sans-serif'],
        'body': ['GT Alpina Typewriter', 'system-ui', 'sans-serif']
      }
  },
  plugins: [],
}

