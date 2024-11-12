const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
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
    historyApiFallback: true, // Нужно для работы маршрутизации
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],  // Поддержка расширений для импорта
  },
  module: {
    rules: [
      {
        test: /\.module\.css$/,  // Определение CSS-модулей
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,  // Включает модули только для файлов .module.css
            },
          },
        ],
      },
      {
        test: /\.css$/,  // Для обычных CSS файлов
        exclude: /\.module\.css$/,  // Исключаем CSS-модули
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,  // Тест для TypeScript файлов
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Шаблон для HTML
    }),
  ],
};