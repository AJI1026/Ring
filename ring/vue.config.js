const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 调节端口号与后端本地联调
  devServer: {
    proxy: {
      '/api': {// 标识需要进行转换的请求的url
        target: 'http://localhost:3000/',// 服务端域名
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        ws: false,
        ['/api']:''
      }
    },
  },
  lintOnSave: false
})
