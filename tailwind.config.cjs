/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#0D0D0D', // Background utama
        'shadow-grey':  '#262626',  // Card / section / header
        'muted-slate':  '#595959',  // Text sekunder / border
        'silver-mist':  '#A6A6A6',  // Ikon / elemen UI rendah kontras
        'soft-ivory':   '#E5E5E5',  // Text utama
        // Semantic aliases for easier utility usage (bg-elegant-*, text-elegant-*, border-elegant-*)
        elegant: {
          background: '#0D0D0D',
          card:       '#262626',
          muted:      '#595959',
          silver:     '#A6A6A6',
          ivory:      '#E5E5E5',
        }
      }
    },
  },
  plugins: [],
}
