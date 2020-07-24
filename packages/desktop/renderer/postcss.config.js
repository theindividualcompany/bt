module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: ['./renderer/pages/**/*.{js,jsx,ts,tsx}', './renderer/components/**/*.{js,jsx,ts,tsx}'],
            defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    'postcss-preset-env',
  ],
}
