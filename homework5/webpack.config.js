const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:  {
        app: "./src/index.jsx",
    },
    output: {
        path: path.resolve(__dirname, "build"),
      filename: "[name].js",
      publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // devtool: '#inline-source-map',
    //     debug: true,
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "plugins": ["@babel/plugin-proposal-class-properties"],
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.module\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                            importLoaders: 1,
                        },
                    },
                ],
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: {
            index: 'index.html',
          },
  },
plugins: [new HtmlWebpackPlugin({template: "./src/index.html"}),
          new MiniCssExtractPlugin(),]
};