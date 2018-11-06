/**
 * @file vue.config.js
 * @desc vue-cli's extra config
*/


module.exports = {
  devServer: {
    proxy: {
      "^/sso|v1": {
        target: "http://sso.test.com",
        changeOrigins: true
      }
    }
  }
};
