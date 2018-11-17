var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            filename: './index.html' 
        }),
        new ExtractTextPlugin('style.css')
    ]
}