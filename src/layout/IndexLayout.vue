<template>
  <div :class="['index-layout', background ? 'star-bg' : '']">
    <div class="mark" v-if="mark"></div>
    <el-container class="container">
      <el-header class="header">
        <slot name="header"></slot>
      </el-header>
      <el-main class="main">
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "IndexLayout",
  props: {
    background: {
      type: Boolean,
      default: true
    },
    mark: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="less" scoped>
.index-layout {
  width: 100%;
  height: 100%;
  position: relative;

  .mark {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .container {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;

    .header {
      display: flex;
      border-bottom: 1px solid #ccc;
      justify-content: space-between;
      align-items: center;
    }

    .main {
      display: flex;
      align-items: center;
      padding: 0;
    }
  }
}

.star-bg {
  background-image: url(../assets/images/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
