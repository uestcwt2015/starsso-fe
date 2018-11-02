/**
 * @file vue.config.js
 * @desc vue-cli's extra config
*/

const cookie = "token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDEyMzg5MzcsImlhdCI6MTU0MTE1MjUzNywianRpIjoiNGVhODQzYWVhYTlhNDc4MjkzODQzNWQ2NzU4MjhhZmYiLCJ1c2FnZSI6ImF1dGgiLCJ1c2VyX2lkIjo5LCJ1c2VybmFtZSI6ImxpemkwODMwIiwidmVyYnMiOlsicmVhZF9pbnRlcm5hbCIsIndyaXRlX3NlbGYiLCJyZWFkX290aGVyIiwicmVhZF9zZWxmIiwicmVhZF9ncm91cCIsImF1dGgiXX0.lsmh0Jtjeju5SlBb9GItGTBk4mS3SjnxZr2iEhK4dfDmC0Vsj_MvFwR4keDNdkqOSVJU076qhceKv7rVC9i--1WZ7xQxaujctkMsxf67HCOdVt89hYcH21Vfy1EkaVlaVQRZFWmSEp4YTdtXzKzVF-558CdjYei5rGKD-TriH-M; Domain=sso.test.com; Expires=Sat, 03-Nov-2018 09:55:37 GMT; Path=/sso";

module.exports = {
  devServer: {
    proxy: {
      "^/sso|v1": {
        target: "http://sso.test.com",
        changeOrigins: true,
        headers: {
          referer: "://sso.test.com",
          cookies: cookie
        }
      }
    }
  }
};
