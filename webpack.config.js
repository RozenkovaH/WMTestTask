const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: argv.mode === 'production' ? 'hidden-source-map' : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssPlugin(),
    new HtmlPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|svg)/i,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
  },
});
