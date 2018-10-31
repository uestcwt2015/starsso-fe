<template>
  <dashboard-layout>
    <div class="aside-container" slot="aside">
      <div class="logo">
        <router-link to="/">
          <h2>StarSSO</h2>
        </router-link>
      </div>
      <el-menu
        default-active="0"
        class="menu"
        background-color="#252a2f"
        text-color="#ccc"
        active-text-color="#fff"
      >
        <el-menu-item class="menu-item" index="0">
          <i class="icon iconfont icon-pc"></i>
          <span slot="title">设备绑定</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="header-container" slot="header">
      <div class="user">
        <i class="icon iconfont icon-user"></i>
        <el-dropdown trigger="click">
          <span class="name el-dropdown-link">
            鞠婧祎
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click="logoutHandle">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "../layout/DashboardLayout.vue";

export default {
  name: "Dashboard",
  components: { DashboardLayout },
  methods: {
    logoutHandle() {
      console.log("logout success");
    }
  }
};
</script>

<style lang="less" scoped>
.aside-container {
  .logo {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #3B4044;

    a {
      color: #fff;
      text-decoration: none;
      
      h2 {
        margin: 0;
      }
    }
  }
  .menu {
    border: none;

    .menu-item {
      vertical-align: middle;

      i.icon {
        margin-right: 0.5em;
        display: inline-block;
      }
    }
  }
}

.header-container {
  .user {
    float: right;
    color: #fff;
    
    i.icon {
      margin-right: 0.5em;
    }

    .name {
      color: #fff;
    }
  }
}
</style>
