module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'loacalhost:9999',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};