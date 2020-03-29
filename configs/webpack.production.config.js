const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => ({
  devtool: 'eval-cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'postcss-loader',
        ],
      },
    ],
  },
});
