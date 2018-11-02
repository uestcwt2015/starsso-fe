/**
 * @file device.js
 */

import $http from "../assets/http/index";
import * as types from "./types";
import { rejects } from "assert";

const devicesModule = {
  state: {
    mineMAC: "",
    mineDevices: [],
    onlineDevices: [],
    isBound: false
  },
  getters: {
    isBound: state => state.isBound,
  },
  mutations: {
    [types.SET_IS_BOUND]: (state, params) => {
      state.isBound = params.data;
    },
    [types.SET_GROUP_LIST]: (state, params) => {
      state.mineDevices = [...params.data];
    },
    [types.SET_ONLINE_LIST]: (state, params) => {
      state.onlineDevices = [...params.data];
    },
    [types.SET_MAC_INFO]: (state, params) => {
      state.mineMAC = params.data;
    }
  },
  actions: {
    getMineMAC: ({ commit }) => {
      $http
        .getCurrDeviceInfo()
        .then(res => {
          if (res.data !== null) {
            commit(types.SET_MAC_INFO, res.data);
          } else {
            rejects({
              type: "warning",
              message: "没有发现你的设备"
            });
          }
        })
        .catch(err => {
          commit(types.SHOW_MESSAGE, err);
        });
    },
    getMineBoundDevices: ({ commit }) => {
      $http.getCurrBoundDeviceInfo()
        .then(res => {
          
        })
    }
  }
};

export default devicesModule;