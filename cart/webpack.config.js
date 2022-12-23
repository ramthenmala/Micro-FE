const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'productCart',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsCartIndex': './src/index'
            },
            shared: {
                faker: {
                    singleton: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}