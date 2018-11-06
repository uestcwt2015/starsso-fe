/**
 * @file url.js
 * @author wutong
 * @desc 管理请求url
 */

export default {
  // 获取注册分组
  getGroupList: {
    method: "get",
    url: "/v1/star/group"
  },
  // 提交登录表单
  postLoginForm: {
    method: "post",
    url: "/sso/login?appid=1"
  },
  // 提交注册表单
  postSignupForm: {
    method: "post",
    url: "/v1/star/member"
  },
  // 获取当前用户的设备信息
  getCurrDeviceInfo: {
    method: "get",
    url: "/v1/star/device/myself"
  },
  // 获取当前用户已绑定的设备信息
  getCurrBoundDeviceInfo: {
    method: "get",
    url: "/v1/star/device/mine"
  },
  // 绑定当前设备
  bindCurrDevice: {
    method: "post",
    url: "/v1/star/device/mine"
  },
  // 取消当前设备绑定
  cancelBindDevice: {
    method: "delete",
    url: "/v1/star/mine"
  },
  // 获取当前在线设备列表
  getOnlineDevices: {
    method: "get",
    url: "/v1/star/device/list"
  }
};
