const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts', // Entry file which exports all your components
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules&importLoaders',
          'sass-loader',
        ],
      },
    ],
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
  },
  plugins: [new MiniCssExtractPlugin()],
};
