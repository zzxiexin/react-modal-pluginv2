const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackProdConfig = {
    mode: 'production',

    entry: resolve('./src/index.tsx'),

    output: {
        filename: 'index.js',
        path: resolve('./dist'),
        library: {
            type: 'umd',
            export: 'default'
        }
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.less']
    },

    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                parallel: 4,
                terserOptions: {
                    compress: {
                        drop_console: true
                    },
                },
            }),
            new CssMinimizerPlugin(),
        ],
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}
console.log('prd config', merge(webpackBaseConfig, webpackProdConfig));
module.exports = merge(webpackBaseConfig, webpackProdConfig)