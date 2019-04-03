const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: '/.js$/',
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
      include: path.resolve(__dirname, '../stories'),
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../stories'),
    },
  )
  return config;
};
