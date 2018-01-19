const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: path.resolve(__dirname, "src","js", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.scss$/, use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: path.resolve(__dirname,"src","index.html"), to: path.resolve(__dirname,"dist","index.html") }])
    ],
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};

module.exports = config;