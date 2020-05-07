const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.prod.json',
          },
        },
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.prod.json' })],
  },
  plugins: [new webpack.optimize.AggressiveMergingPlugin()],
});
