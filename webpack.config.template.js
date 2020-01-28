const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!handlebars-loader!src/index.hbs',
      inject: false,
    }),
  ],
};
