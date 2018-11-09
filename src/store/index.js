import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import { $http } from "../assets/http";

import router from "../router";

import { Message } from "element-ui";

// modules
import devices from "./devices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    signupGids: []
  },
  modules: {
    devices
  },
  getters: {
    groupList: state => state.signupGids
  },
  mutations: {
    [types.SET_GROUP_LIST]: (state, params) => {
      this.state.signupGids = params.data;
    },
    [types.SHOW_MESSAGE]: (state, params) => {
      Message({
        type: params.type,
        message: params.message
      });
    }
  },
  actions: {
    getGroupList({ commit }) {
      $http.getGroupList().then(res => {
        commit("SET_GROUP_LIST", res);
      });
    },
    postLoginForm({ commit }, params) {
      $http.postLoginForm(params).then(res => {
        window.localStorage.setItem("token", res.data.token);
        commit(types.SHOW_MESSAGE, {
          type: "info",
          message: "登录成功"
        });
        router.push("dashboard");
      });
    },
    postSignupForm({ commit }, params) {
      $http.postSignupForm(params).then(() => {
        commit(types.SHOW_MESSAGE, {
          type: "info",
          message: "注册成功"
        });
        router.push("dashboard");
      });
    },
    userLogout({ commit }) {
      $http.logout().then(() => {
        commit(types.SHOW_MESSAGE, {
          type: "info",
          message: "退出成功"
        });
        router.push("/");
      });
    }
  }
});
