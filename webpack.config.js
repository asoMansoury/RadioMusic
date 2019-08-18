const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


const  config = {
    entry:{
        index:'./src/index.js'
    },
    output:{
         filename:'[name].js',
         path: __dirname + '/build'
     },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[miniCssExtractPlugin.loader,'css-Loader']
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                use:['file-Loader']
                // use:[{
                //     loader:'file-Loader',
                //     options:{
                //         name:'[name].[ext]',
                //         publicPath:'images',
                //         outputPath:'images'
                //     }
                // }]
            },
            {
                test:/\..(woff|woff2|eot|ttf|otf)$/,
                use:['file-Loader']
                // use:[{
                //     loader:'file-Loader',
                //     options:{
                //         publicPath:'fonts',
                //         outputPath:'fonts',
                //         name:'[name].[ext]'
                //     }
                // }]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/react'],
                        plugins: ['@babel/proposal-class-properties', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-syntax-dynamic-import']
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html'
        })
    ]
}


module.exports = (env,{mode})=>{
    config.devServer = {
        contentBase:__dirname +"/build",
        index:"./src/index.html",
        compress:true,
        port:9090
    }
    return config;
}