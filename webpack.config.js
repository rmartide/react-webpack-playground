const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'output.budle.js',
        libraryTarget: 'umd'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ["@babel/plugin-proposal-class-properties"] 
                    }
                },
                exclude: /node_modules/
            },
            { test: /\.scss|sass|css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.bmp|gif|jpe?g|png$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    }
                }
            }
        ]
    },
    devServer: {
        port: 9000,
        hot: true,
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
}