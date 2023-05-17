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
      config.resolve.extensions = ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
  }
})
