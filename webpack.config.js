require('dotenv').config()

const CopyWebpackPlugin = require('copy-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')
const { EsbuildPlugin } = require('esbuild-loader')
const path = require('path')

module.exports = {
  mode: process.env.BUILD_ENV === 'production'
    ? 'production'
    : 'development',

  entry: {
    index: path.resolve(__dirname, 'src/index.tsx'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    }
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx',
        minify: true,
        target: 'es2015',
      }
    }]
  },

  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
      })
    ],
  },

  plugins: [
    new DotenvPlugin({
      safe: true,
      systemvars: true,
    }),

    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'static'),
        to: path.resolve(__dirname, 'dist'),
      }],
    }),
  ],

  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, 'static'),
  },

  devtool: process.env.BUILD_ENV === 'development' ? 'eval-source-map' : false,
}
