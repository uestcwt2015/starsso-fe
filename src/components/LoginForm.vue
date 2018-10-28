<template>
  <div class="form-container">
    <el-form 
      class="form"
      :model="form"
      :rules="rules"
      ref="form"
    >
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="用户名" type="text"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <router-link to="signup" class="link" tag="a">还没有账号？马上注册</router-link>
      <el-form-item>
        <el-button type="primary" size="small" class="login" @click="submitHandle">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions([
      "postLoginForm"
    ]),
    submitHandle() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.postLoginForm(this.form)
        } else {
          console.log(valid);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.form-container {
  width: 300px;
  padding: 50px 25px 15px 25px;
  border: 1px solid #fff;
  border-radius: 10px;

  .link {
    display: inline-block;
    width: 100%;
    text-align: right;
    color: #fff;
    font-size: 12px;
    margin-bottom: 15px;
  }

  .login {
    width: 100%;
  }
}
</style>
