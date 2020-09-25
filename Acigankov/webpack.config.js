const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: {
       app: './index.jsx',
   },
   context: path.resolve(__dirname, "src"),
   output: {
       path: path.resolve(__dirname, "build"),
       filename: 'app.js',
   },
   mode: 'development',
   plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
   module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env' , "@babel/preset-react"],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
  },
};

