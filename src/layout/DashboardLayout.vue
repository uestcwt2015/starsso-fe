<template>
  <div class="dashboard-layout">
    <el-container>
      <el-aside class="aside" width="200px">
        <slot name="aside"></slot>    
      </el-aside>
      <el-container class="container">
        <el-header class="header">
          <slot name="header"></slot>   
        </el-header>
        <el-main class="main">
          <slot name="main"></slot>  
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "DashboardLayout",
  
}
</script>

<style lang="less" scoped>
.dashboard-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.aside {
  height: 100vh;
  overflow: scroll;
  background-color: #252a2f;
}

.container {
  height: 100vh;

  .header {
    height: 60px;
    line-height: 60px;
    background-color: #252a2f;
  }

  .main {
    height: calc(~"100vh - 60px");
    overflow: scroll;
    background: #eaedf1;
  }
}
</style>
