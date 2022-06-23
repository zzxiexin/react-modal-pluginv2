const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackDevConfig = {
    mode: 'development',
    
    entry: resolve('./example/index.tsx'),

    devtool: 'eval-cheap-module-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.less']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        open: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({template: './example/index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ]
}
console.log('dev-config', merge(webpackBaseConfig, webpackDevConfig))
module.exports = merge(webpackBaseConfig, webpackDevConfig) 