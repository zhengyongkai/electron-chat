const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const { defineConfig } = require('@vue/cli-service')

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig(() => {
  return {
    lintOnSave: false,
    publicPath: './',
    transpileDependencies: true,
    chainWebpack: (config) => {
      config.resolve.alias.set('@', resolve('src'))
      config.module
        .rule('svg')
        .exclude.add(resolve('./src/assets/icons')) // 排除自定义svg目录
        .end()
      config.module
        .rule('icons') // 新规则
        .test(/\.svg$/)
        .include.add(resolve('./src/assets/icons')) // 新规则应用于我们存放svg的目录
        .end()
        .use('svg-sprite-loader') // 用sprite-loader接卸
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
    },
    css: {
      loaderOptions: {
        scss: {
          additionalData: '@import"@/assets/styles/index.scss";'
        }
      }
    },

    configureWebpack: {
      externals: {
        electron: 'require("electron")',
        pingyin: 'require("tiny-pinyin")'
      },
      resolve: {
        symlinks: false,
        alias: {
          vue: path.resolve('./node_modules/vue')
        }
      },
      plugins: [
        AutoImport({
          imports: ['vue', 'vue-router', 'vue-i18n', 'vuex'],
          include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
          dts: 'src/auto-imports.d.ts',
          resolvers: [ElementPlusResolver()]
        }),
        Components({
          resolvers: [ElementPlusResolver()]
        })
      ]
    },
    devServer: {
      client: {
        overlay: false
      },
      proxy: {
        // 配置跨域
        '/api': {
          target: process.env.VUE_APP_URL, // 这里后台的地址模拟的;应该填写你们真实的后台接口
          ws: true,
          changOrigin: true, // 允许跨域
          pathRewrite: {
            '^/api': '' // 请求的时候使用这个api就可以
          }
        }
      }
    },
    pluginOptions: {
      electronBuilder: {
        nodeIntegration: true,
        builderOptions: {
          appId: 'com.example.app',
          productName: 'chat', // 项目名，也是生成的安装文件名，即aDemo.exe
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
