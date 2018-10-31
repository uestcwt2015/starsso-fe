/**
 * @file vue.config.js
 * @desc vue-cli's extra config
*/

module.exports = {
  devServer: {
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/$/,
          to: "/index.html"
        }
      ]
    },
    proxy: {
      "/": {
        target: "http://sso.test.com"
      }
    }
  }
};