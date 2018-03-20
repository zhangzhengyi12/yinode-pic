const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts'],
      alias: {
        '@': resolve('src'),
        common: resolve('src/common'),
        api: resolve('src/api'),
        router: resolve('src/router'),
        components: resolve('src/components'),
        base: resolve('src/base'),
        assets: resolve('src/assets'),
        views: resolve('src/views')
      }
    }
  }
}
