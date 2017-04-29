const path = require('path')

// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function(config, env) {
  var config = genDefaultConfig(config, env);

  config.module.loaders.push({
    test: /.scss$/,
    loaders: ['style', 'css', 'sass'],
    include: path.resolve(__dirname, '../')
  })

  config.module.loaders.push(
    {
      test: /\.css$/,
      loaders: ['style', 'css'],
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }
  )

  config.module.loaders.push({
    test: /\.md$/,
    loader: 'raw'
  })

  return config
}
