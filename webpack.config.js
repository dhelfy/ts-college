// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // Очищает папку dist перед каждым билдом
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,  // Для перезагрузки при изменениях
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Для JavaScript файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|module.css)$/,  // Добавляем поддержку для CSS файлов
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Шаблон для HTML
    }),
  ],
};