/** 
 * @file validator.js
 * @desc 表单验证
 * @author wutong
*/

export function comparePassword(rule, value, callback) {
  if (!value) {
    callback(new Error("请再次输入密码"));
  } else if (value !== this.form.password) {
    callback(new Error("两次输入密码不一致"));
  } else {
    callback();
  }
};