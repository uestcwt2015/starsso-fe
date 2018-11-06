/**
 * @file request.js
 * @author wutong
 * @desc 请求模块
 */

import axios from "axios";
import apis from "./urls.js";

import { Message } from "element-ui";
// import router from "../../router.js";

// 默认配置
const httpDeafultOpts = {
  baseURL: "http://localhost:8080",
  timeout: 10000,
  responseType: "json",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
};

const instance = axios.create({ ...httpDeafultOpts });


// 请求预处理拦截器
instance.interceptors.request.use(
  config => {
    config.headers["Authorization"] = "Bearer " + window.localStorage.getItem("token");
    return config;
  },
  err => {
    Message({
      type: "error",
      message: err && err.msg
    });
  }
);

// // 请求后处理拦截器
// instance.interceptors.response.use(
//   res => {
//     if (res.code !== 0) {
//       Message({
//         type: "error",
//         message: res.msg
//       });

//       return Promise.reject(res.msg);
//     } else {
//       resolve(res);
//     }
//   },
//   err => {
//     Message({
//       type: "error",
//       message: err && err.msg
//     });

//     return Promise.reject(err.msg);
//   }
// );

const http = {};

Object.keys(apis).forEach(key => {
  if (apis[key].method === "get") {
    http[key] = function() {
      return instance.get(apis[key].url)
        .then(res => res.data)
        .catch(err => {
          Message({
            type: "error",
            message: err && err.message
          });
        });
    };
  } else if (apis[key].method === "post") {
    http[key] = function(data) {
      return instance.post(apis[key].url, { ...data })
        .then(res => res.data)
        .catch(err => {
          Message({
            type: "error",
            message: err && err.message
          });
        });
    };
  }
});

export default http;
