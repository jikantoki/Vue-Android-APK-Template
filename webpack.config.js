const GoogleFontsPlugin = require('google-fonts-webpack-plugin')

module.exports = {
  entry: 'index.js',
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Zen Maru Gothic' },
        { family: 'Roboto', variants: ['400', '700italic'] },
      ],
      /* ...options */
    }),
  ],
}
