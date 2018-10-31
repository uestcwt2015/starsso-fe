<template>
  <div class="form-container">
    <el-form
      class="form"
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="重复密码" prop="repassword" required>
        <el-input v-model="form.repassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthday">
        <el-date-picker 
          v-model="form.birthday" 
          type="date" 
          placeholder="选择日期"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" type="text"></el-input>
      </el-form-item>
      <el-form-item label="小组" prop="gid">
        <el-select v-model="form.gid" placeholder="请选择">
          <el-option
            v-for="item in groupList"
            :key="item.gid"
            :label="item.name"
            :value="item.gid"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="form.sex" placeholder="请选择">
          <el-option key="male" label="男" value="男"></el-option>
          <el-option key="female" label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel" required>
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件" prop="mail">
        <el-input v-model="form.mail"></el-input>
      </el-form-item>
      <!-- <el-form-item label="联系地址" prop="address">
        <el-input v-model="form.address" type="text"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" size="small" class="signup" @click="submitHandle">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SignupForm",
  data() {
    const comparePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };

    const phoneNumber = (rule, value, callback) => {
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      const res = reg.test(value);

      if (!value) {
        callback(new Error("请输入电话号码"));
      } else if (!res) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };

    /* eslint-disable */
    const rules = {
      username: [{ required: true, message: "用户名不能未空", trigger: "blur" }],
      password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
      repassword: [{ validator: comparePassword, trigger: "blur" }],
      birthday: [{ required: true, message: "请选择出生日期", trigger: "blur" }],
      name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
      gid: [{ required: true, message: "请选择小组", trigger: "change" }],
      sex: [{ required: true, message: "请选择性别", trigger: "change" }],
      tel: [{ validator: phoneNumber, trigger: "blur" }],
      mail: [
        { required: true, message: "请输入邮箱地址", trigger: "blur" },
        { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" }
      ],
      // address: [{ required: true, message: "请输入联系地址", trigger: "blur" }]
    };
    /* eslint-enable */

    return {
      form: {
        username: "",
        password: "",
        repassword: "",
        birthday: "",
        name: "",
        gid: "",
        sex: "",
        tel: "",
        mail: "",
        address: ""
      },
      rules: rules
    };
  },
  computed: {
    ...mapGetters([
      "groupList"
    ])
  },
  methods: {
    ...mapActions([
      "postSignupForm"
    ]),
    submitHandle() {
      this.$refs.form.validate(valid => {
        if (valid) {
          let newForm = { ...this.form };
          newForm.birthday += ' 00:00:00';
          delete newForm.repassword;
          this.postSignupForm(newForm);
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
  text-align: left;
  width: 300px;
  margin: auto;
}

.signup {
  width: 100%;
}
</style>
