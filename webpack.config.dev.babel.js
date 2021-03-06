import webpack from 'webpack';
import path from 'path';

export default {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'babel-regenerator-runtime',
    path.resolve(__dirname, 'src', 'index.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: 'development',
        WEBPACK: true
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader'
        },
        include: path.resolve(__dirname, 'src')
      }
    ]
  }
}
