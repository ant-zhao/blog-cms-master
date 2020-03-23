const path = require('path');
const webpack = require('webpack');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8082,
        proxy:{
          '/api': {
            target: 'https://api.blog.jjz6.cn',
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/api"
            }
          },
        }
    },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('layout',resolve('src/layout'))
            .set('base',resolve('src/base'))
            .set('static',resolve('src/static'))
    },
    configureWebpack: {//引入jquery
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    //transpileDependencies: ['sort-keys']
}