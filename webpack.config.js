const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development", 
    entry: "./src/index.js", 
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "main.bundle")
    }, 

    plugins: [
        new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({filename: "main.bundle.css"}), 
        new HtmlWebpackPlugin({
            templates: "./src/index.html", 
        }), 
    ], 

    module:
    {
        rules:
        [
            {
                test: /\.m?js$/, 
                exclude: /(node_modules)/, 
                use: 
                {
                    loader: 'babel-loader', 
                    options: 
                    {
                        presets: 
                        [
                            '@babel/preset-env', 
                            '@babel/preset-react'
                        ],
                    },
                },
            },

            {
                test: /\.css$/, 
                use:
                [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                ],
            },

            {
                test: /\.html$/, 
                use:
                [
                    "html-loader", 
                ], 
            }, 

            {
                test: /\.(svg|png|jpe?g|gif)$/, 
                use:
                {
                    loader: "file-loader", 
                    options: 
                    {
                        name: "[name].[ext]"
                    }, 
                }, 
            }, 

            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use:{
                    loader: "file-loader", 
                    options: {
                        name:"[name].[ext]"
                    },
                },
            },

        ],
    }, 
};