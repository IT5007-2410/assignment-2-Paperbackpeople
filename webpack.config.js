const path = require('path');

module.exports = {
  entry: './src/index.js', // 你的入口文件
  output: {
    path: path.resolve(__dirname, 'public'), // 输出文件的目标路径
    filename: 'bundle.js' // 输出文件的名称
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 匹配 .js 或 .jsx 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: 'babel-loader' // 使用 babel-loader
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // 自动解析确定的扩展
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // 静态文件位置
    compress: true, // 启用压缩
    port: 3000 // 服务器端口
  }
};