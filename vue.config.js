// const { defineConfig } = require('@vue/cli-service')

// module.exports = defineConfig()

module.exports = {
  transpileDependencies: true,
  
  configureWebpack: require('./webpack.config'),
  productionSourceMap: false
}