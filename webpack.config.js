const webpack = require('webpack');
const path    = require('path');

module.exports = {
  entry       : {
    main: './static/app.js'
  },
  module      : {
    rules: [
      {
        test   : /\.js$/,
        include: [path.resolve(__dirname, 'static')],
        loader : 'babel-loader',
        options: {
          plugins: ['syntax-dynamic-import'],
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false
              }
            ]
          ]
        },
      },
      {
        test: /\.(scss|css)$/,
        use : [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ]
  },
  output      : {
    filename  : '[name]-bundle.js',
    path      : path.resolve(__dirname, 'dist'),
    publicPath: "/dist"
  },
  devServer   : {
    contentBase: path.resolve(__dirname, 'static'),
    port       : 8080
  },
  mode        : 'development'
};
