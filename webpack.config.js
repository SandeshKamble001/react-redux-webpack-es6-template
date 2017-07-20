const path = require('path')

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-1'],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    // can be booliean, string or array
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    // enable gzip compression for everything served
    compress: false,
    historyApiFallback: true,
  },
}
