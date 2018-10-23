module.exports = {
  devServer: {
    proxy: {
      "/v1": {
        target: "http://sso.test.com",
        ws: true,
        changeOrigin: true
      },
    }
  }
}