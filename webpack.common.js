const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Production',
          template: "src/index.hbs",
          description: "this is description"
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "style.[contenthash].css",
      }),
      new CopyWebpackPlugin([
          {
              from: 'src/images',
              to: 'images'
          }
        ])
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
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
          },
          {
            test: /\.hbs$/,
            exclude: /(node_modules|bower_components)/,
            use: ["handlebars-loader"]
          }
         ]
       },
       
};