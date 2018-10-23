<template>
  <index-layout>
    <div class="header-left" slot="header">
      <h3 class="title">StarSSO</h3>
    </div>
    <div class="index-main" slot="main">
      <div class="desc">
        <p class="maintitle">此处为主标题</p>
        <p class="subtitle">此处为副标题</p>
      </div>
      <login-form></login-form>
    </div>
  </index-layout>
</template>

<script>
import IndexLayout from "../layout/IndexLayout.vue";
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Index",
  components: { IndexLayout, LoginForm }
};
</script>

<style lang="less" scoped>
.header-left {
  .title {
    font-size: 24px;
    color: white;
  }
}

.index-main {
  height: 100%;
  width: 100%;
  padding: 0 10% 0 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -100px;

  .desc {
    color: white;

    .maintitle {
      font-size: 36px;
    }

    .subtitle {
      font-size: 24px;
    }
  }
}
</style>
