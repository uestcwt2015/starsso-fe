/**
 * @file vue.config.js
 * @desc vue-cli's extra config
*/

module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://sso.test.com"
      }
    }
  }
};