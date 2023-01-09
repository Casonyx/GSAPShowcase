const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: './[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ],
      },
      {
        test: /\.(png|gif|jpg|jpeg|ico)$/,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};
