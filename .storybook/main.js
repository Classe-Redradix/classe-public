const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-controls'],
  webpackFinal: async (config, { configType }) => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    })
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })

    return config
  }
}
