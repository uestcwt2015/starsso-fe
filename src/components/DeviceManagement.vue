<template>
  <div class="device-management">
    <div class="my-device"></div>
    <div class="online-devices-list">
      <block title="我的设备" anchor="myDevices">
        <el-table
          slot="main" 
          class="mine-devices"
          :data="mineDevices"
        >
          <el-table-column
            prop="mac"
            label="设备"
          >
          </el-table-column>
          <el-table-column
            prop="isCurr"
          >
            <template slot-scope="scope">
              <i class="icon iconfont icon-mine" v-if="scope.row.isCurr"></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="isBound"
            label="设备"
          >
            <template slot-scope="scope">
              <el-button type="primary" size="mini" v-if="scope.row.isBound">绑定</el-button>
              <el-button type="info" size="mini" v-else>取消绑定</el-button>
            </template>
          </el-table-column>
        </el-table>
      </block>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DeviceManagement",
  computed: {
    ...mapGetters([
      "mineDevices",
      "onlineDevices"
    ])
  },
  methods: {
    ...mapActions([
      "getMineBoundDevices",
      "getOnlineDevices",
      "bindCurrDevice",
      "cancelBindDevice"
    ])
  },
  mounted() {
    this.getMineBoundDevices();
    this.getOnlineDevices();
  }
}
</script>

<style lang="less" scoped>

</style>

