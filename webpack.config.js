const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'output.budle.js'
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
                        plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-syntax-dynamic-import"]
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
        proxy: {
            '/': 'http://localhost:3001'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
}