const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const template = require('./webpack.config.template.js');

module.exports = merge(template, {
  mode: 'production',
  // mode: 'development',
  entry: {
    'vsclick.min': './src/index.js',
  },
  output: {
    filename: './[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'VsClick',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  externals: {

  },
  devServer: {
    host: '0.0.0.0',
    contentBase: './dist',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'public', to: './' },
    //   ],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css|s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
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
