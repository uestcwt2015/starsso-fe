import http from "./request";

export const httpPlugin = {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, "$http", { value: http });
  }
};

export const $http = http;
