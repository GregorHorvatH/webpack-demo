module.exports = env => ({
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    port: 4000,
    stats: 'minimal',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          'postcss-loader',
        ],
      },
    ],
  },
});
