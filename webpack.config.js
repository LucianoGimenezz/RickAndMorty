const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }, 
    mode:"development",
    resolve: {
        extensions: ['.js'],
        alias: {
          '@styles': path.resolve(__dirname,'src/styles'),
          '@pages': path.resolve(__dirname,'src/pages'),
          '@routes': path.resolve(__dirname,'src/routes'),
          '@utils': path.resolve(__dirname,'src/utils'),

        }
     },
    module: {
      rules: [
          {
              test:/\.js$/,
              exclude:/node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          }
      ]
     },
    plugins: [
        new HtmlWebpackPlugin({
            inject:true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}