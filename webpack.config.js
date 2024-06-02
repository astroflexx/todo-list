const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        todo: './src/todo.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    devtool: 'inline-source-map',

    devServer: {
        watchFiles: './src/index.html',
        static: './dist',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],

    optimization: {
        runtimeChunk: 'single',
    },
};