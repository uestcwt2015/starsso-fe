import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import { $http } from "../assets/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    signupGids: []
  },
  getters: {
    groupList: state => state.signupGids
  },
  mutations: {
    [types.SET_GROUP_LIST](state, data) {
      this.state.signupGids = data;
    }
  },
  actions: {
    getGroupList({ commit }) {
      $http.getGroupList().then(res => {
        commit("SET_GROUP_LIST", res.data);
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
