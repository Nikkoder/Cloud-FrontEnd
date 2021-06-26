const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});

module.exports = {
    mode: 'development',
    output: {
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.EnvironmentPlugin(Object.keys(dotenv.parsed || {}))
    ],
    performance : {
        hints : false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                } 
            }
        ]
    }
}
