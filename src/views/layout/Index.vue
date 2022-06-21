<template>
  <el-container style="height:100%">
    <el-aside>
      <Sidebar ref="sidebar" :isCollapse="isCollapse"></Sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <!--  切换菜单合并状态 -->
        <div @click="swtichCollapseChange" class="switch-btn">
          <el-icon>
            <Fold v-show="!isCollapse" />
            <Expand v-show="isCollapse"/>
          </el-icon>
        </div>
      </el-header>
      <el-main>主要内容区域</el-main>
    </el-container>
  </el-container>
</template>


<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { ref } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
// 默认不合并
let isCollapse = ref(false)
// 获取 Sidebar 组件的引用，注意变量名和你要获取的 ref 名一致
const sidebar = ref<InstanceType<typeof Sidebar>>()
// 切换菜单合并状态
function swtichCollapseChange() {
  isCollapse.value = !isCollapse.value
  sidebar.value?.setIsCollapse(isCollapse.value)
}
</script>

<style>
.el-aside {
  width: auto;
}

.el-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--el-menu-border-color);
}

.switch-btn {
  cursor: pointer;
  font-size: 24px;
}
</style>
