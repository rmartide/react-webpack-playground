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
                test:/\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                },
                exclude: /node_modules/
            },
            { test: /\.scss|sass|css$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    devServer: {
        proxy: {
              '/': 'http://localhost:3001'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'})
    ]
}