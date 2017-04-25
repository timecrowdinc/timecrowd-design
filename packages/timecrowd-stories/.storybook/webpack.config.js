const path = require('path')

// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function(config, env) {
  var config = genDefaultConfig(config, env);

  config.module.loaders.push({
    test: /.scss$/,
    loaders: ["style", "css", "sass"],
    include: path.resolve(__dirname, '../')
  })

  config.module.loaders.push({
    test: /\.md$/,
    loader: "raw"
  })

  config.module.loaders.push(
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?mimetype=image/svg+xml'
    },
    {
      test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?mimetype=application/font-woff'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?mimetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?mimetype=application/font-woff'
    }
  )

  return config
}
