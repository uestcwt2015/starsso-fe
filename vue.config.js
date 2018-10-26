module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://sso.test.com",
        ws: true,
        changeOrigin: true
      },
    }
  }
}