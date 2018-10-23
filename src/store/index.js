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
    getGroupList() {
      $http.getGroupList().then(data => {
        this.commit("SET_GROUP_LIST", data);
      });
    }
  }
});
