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
  header: {
    "Content-Type": "application/json"
  }
};

// 请求预处理拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    Message({
      type: "error",
      message: err && err.msg
    });
  }
);

// 请求后处理拦截器
axios.interceptors.response.use(
  res => {
    if (res.code !== 0) {
      Message({
        type: "error",
        message: res.msg
      });
    }

    return Promise.reject(res.msg);
  },
  err => {
    Message({
      type: "error",
      message: err && err.msg
    });

    return Promise.reject(err.msg);
  }
);

const instance = axios.create({ ...httpDeafultOpts });

const http = {};

Object.keys(apis).forEach(key => {
  if (apis[key].method === "get") {
    http[key] = function() {
      return instance.get(apis[key].url).then(res => res.data.data);
    };
  } else if (apis[key].method === "post") {
    http[key] = function(data) {
      return instance
        .post(apis[key].url, { ...data })
        .then(res => res.data.data);
    };
  }
});

export default http;
