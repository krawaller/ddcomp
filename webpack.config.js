const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/app/index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".tsx",".ts",".js"]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new CopyWebpackPlugin([
      { from: 'public/**/*', flatten: true },
      { from: 'node_modules/material-components-web/dist/material-components-web.min.css'},
    ]),
    new WebpackNotifierPlugin()
  ],
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: { loader: 'ts-loader' }
    }]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
};
