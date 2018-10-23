<template>
  <index-layout :mark="false" :background="false">
    <div class="header-left" slot="header">
      <h3 class="title">StarSSO</h3>
    </div>
    <el-button 
      class="back-index" 
      type="primary" 
      size="small"
      slot="header"
    >
      <router-link to="/" tag="span" class="link">返回首页</router-link>
    </el-button>
    <div class="signup-main" slot="main">
      <signup-form></signup-form>
    </div>
  </index-layout>
</template>

<script>
import IndexLayout from "../layout/IndexLayout.vue";
import SignupForm from "../components/SignupForm.vue";
import { mapActions } from "vuex";

export default {
  name: "Signup",
  components: { IndexLayout, SignupForm },
  methods: {
    ...mapActions([
      "getGroupList"
    ])
  },
  mounted() {
    this.getGroupList();
  }
};
</script>

<style lang="less" scoped>
.header-left {
  .title {
    font-size: 24px;
    color: #000;
  }
}

.signup-main {
  display: block;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
