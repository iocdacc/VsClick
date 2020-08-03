const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = []

let templateArr = [
  {template: '!!handlebars-loader!src/views/index.hbs', chunks: ['main.min']}
]

templateArr.forEach(v => {
  plugins.push(new HtmlWebpackPlugin(Object.assign(v, {
    //inject: true,
    minify:{
      removeComments: true, // 移除HTML中的注释
      collapseWhitespace: true, // 删除空白符与换行符
      minifyCSS: true,// 压缩内联css
    }
  })))
});

module.exports = {
  plugins
};
