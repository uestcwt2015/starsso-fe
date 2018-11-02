import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import { $http } from "../assets/http";

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
        console.log(res);
      });
    },
    postSignupForm({ commit }, params) {
      $http.postSignupForm(params).then(res => {
        console.log(res);
      });
    }
  }
});
