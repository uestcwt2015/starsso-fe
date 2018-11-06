/**
 * @file device.js
 */

import { $http } from "../assets/http/index";
import * as types from "./types";
import { rejects } from "assert";

const devicesModule = {
  state: {
    mineMAC: "",
    mineBoundDevices: [],
    onlineDevices: []
  },
  getters: {
    mineDevices: state => {
      const { mineBoundDevices, mineMAC } = state;
      const lists = [];

      let isBound = false;
      mineBoundDevices.forEach(mac => {
        if (mac === mineMAC) {
          isBound = true;
        }

        lists.push({
          mac: mac,
          isCurr: mac === mineMAC,
          isBound: true
        });
      });

      if (!isBound) {
        lists.push({
          mac: mineMAC,
          isCurr: true,
          isBound: false
        });
      }

      return lists;
    },
    onlineDevices: state => state.onlineDevices
  },
  mutations: {
    [types.SET_CURR_DEVICE]: (state, params) => {
      state.mineMAC = params.data;
    },
    [types.SET_MINE_DEVICES]: (state, params) => {
      state.mineBoundDevices = [...params.data];
    },
    [types.SET_ONLINE_DEVICES]: (state, params) => {
      state.onlineDevices = [...params.data];
    }
  },
  actions: {
    getMineMAC: ({ commit }) => {
      $http
        .getCurrDeviceInfo()
        .then(res => {
          if (res.data !== null) {
            commit(types.SET_CURR_DEVICE, res);
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
      $http.getCurrBoundDeviceInfo().then(res => {
        commit(types.SET_MINE_DEVICES, res);
      });
    },
    getOnlineDevices({ commit }) {
      $http.getOnlineDevices().then(res => {
        commit(types.SET_ONLINE_DEVICES, res);
      });
    },
    boundCurrDevice: () => {
      $http.bindCurrDevice();
    },
    cancelBindDevice: () => {
      $http.cancelBindDevice();
    }
  }
};

export default devicesModule;
