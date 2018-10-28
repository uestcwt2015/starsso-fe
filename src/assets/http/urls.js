/**
 * @file url.js
 * @author wutong
 * @desc 管理请求url
 */

export default {
  getGroupList: {
    method: "get",
    url: "/v1/star/group"
  },
  postLoginForm: {
    method: "post",
    url: "/sso/login"
  },
  postSignupForm: {
    method: "post",
    url: "/v1/star/member"
  }
};
