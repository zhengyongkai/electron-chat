const { defineConfig } = require('@vue/cli-service')

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig(() => {
  return {
    publicPath: './',
    transpileDependencies: true,
    chainWebpack: (config) => {
      config.resolve.alias.set('@', resolve('src'))
      // config.resolve.extensions = ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    pluginOptions: {
      electronBuilder: {
        builderOptions: {
          appId: 'com.example.app',
          productName: 'aDemo', // 项目名，也是生成的安装文件名，即aDemo.exe
          copyright: 'Copyright © 2019', // 版权信息
          directories: {
            output: './dist' // 输出文件路径
          },
          win: {
            // win相关配置
            icon: './shanqis.ico', // 图标，当前图标在根目录下，注意这里有两个坑
            target: [
              {
                target: 'nsis', // 利用nsis制作安装程序
                arch: [
                  'x64', // 64位
                  'ia32' // 32位
                ]
              }
            ]
          }
        }
      }
    }
  }
})
