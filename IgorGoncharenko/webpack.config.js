const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].bundle.js'
    
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env',
                          '@babel/react',{
                          'plugins': ['@babel/plugin-proposal-class-properties']}]
          },
        },
      },
    ],
  },
  devtool: '#sourse-map',
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    open: true,
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
