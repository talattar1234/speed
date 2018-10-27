const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Production',
          template: "src/index.hbs"
      }),
      new CleanWebpackPlugin("./dist/*"),
      new MiniCssExtractPlugin({
        filename: "style.[contenthash].css",
      })
  ],
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
               /* 'style-loader',*/
               MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                /*"style-loader", // creates style nodes from JS strings*/
                MiniCssExtractPlugin.loader,
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
            test: /\.hbs$/,
            exclude: /(node_modules|bower_components)/,
            use: ["handlebars-loader"]
          }
         ]
       },
};