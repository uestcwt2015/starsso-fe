<template>
  <div class="dashboard-layout">
    <el-container>
      <el-aside width="200px">
        <slot name="aside"></slot>    
      </el-aside>
      <el-container>
        <el-header>
          <slot name="header"></slot>   
        </el-header>
        <el-main>
          <slot name="main"></slot>  
        </el-main>
        <el-footer>
          <slot name="footer"></slot>  
        </el-footer>
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

</style>
