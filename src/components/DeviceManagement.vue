<template>
  <div class="device-management">
    <div class="my-device">
      <block title="我的设备" anchor="myDevices">
        <el-table
          slot="main" 
          class="mine-devices"
          :data="mineDevices"
        >
          <el-table-column
            prop="mac"
            label="设备"
            width="200"
          >
          </el-table-column>
          <el-table-column
            prop="isCurr"
            width="400"
          >
            <template slot-scope="scope">
              <i class="icon iconfont icon-mine" v-if="scope.row.isCurr"></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="isBound"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button 
                type="primary" 
                size="mini" 
                v-if="!scope.row.isBound"
                @click="bindCurrDevice"
              >绑定</el-button>
              <el-button 
                type="info" 
                size="mini" 
                v-else
                @click="cancelBindDevice(scope.row.mac)"
              >取消绑定</el-button>
            </template>
          </el-table-column>
        </el-table>
      </block>
    </div>
    <div class="online-devices-list">
      <block title="在线设备" anchor="onlineDevices">
        <el-table
          slot="main" 
          class="online-devices"
          :data="onlineDevices"
        >
          <el-table-column
            prop="mac"
            label="设备"
            width="200"
          >
          </el-table-column>
          <el-table-column
            prop="ips"
            label="IP"
          >
            <template slot-scope="scope">
              <span v-for="(ip, idx) in scope.row.ips" :key="idx" class="ip">
                {{ ip }}
              </span>
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
.ip {
  margin-right: 2em;
}
</style>

