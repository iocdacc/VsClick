const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const template = require('./webpack.config.template.js');

module.exports = merge(template, {
  //mode: 'production',
  mode: 'development',
  entry: {
    'main.min': './src/index.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    // library: 'index',
    // libraryTarget: 'umd'
  },
  externals: {

  },
  devServer: {
    contentBase: './dist',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css|s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000, // 10kb
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
    ],
  },
});
