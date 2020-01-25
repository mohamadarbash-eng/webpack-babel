const path = require("path");
const autoprefixer = require('autoprefixer');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: ""
    },
    devtool: "none",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {
                        importLoaders: 1,
                            modules: {
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                            }
                        }},
                    {loader: 'postcss-loader', options: {
                        ident: 'postcss',
                            plugins: () => [autoprefixer()]
                        }},
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit?8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: __dirname + "/src/index.html",
            filename: "index.html",
            inject: 'body'
        }),
    ]

};
