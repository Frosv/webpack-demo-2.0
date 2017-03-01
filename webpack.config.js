var webpack = require('webpack');
var path = require('path');


module.exports = function(env) {
  return {
    entry: {
      main: './app/index.js',
      vendor:'moment'
    },
    output: {
      filename: '[name].[chunkhash:8].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names:['verdor','manifest']
      })
    ]
  }
}
