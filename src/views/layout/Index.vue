<template>
  <el-container style="height:100%">
    <el-aside>
      <Sidebar ref="sidebar" :isCollapse="isCollapse"></Sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <div class="header-container">
          <!--  切换菜单合并状态 -->
          <div @click="swtichCollapseChange" class="switch-btn">
            <el-icon>
              <Fold v-show="!isCollapse" />
              <Expand v-show="isCollapse" />
            </el-icon>
          </div>


          <el-dropdown trigger="click">
            <!-- 头像 -->
            <el-avatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <!-- 操作选项 -->
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="CircleCheck">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

        </div>
      </el-header>
      <el-main>
        <div class="main-container">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>


<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
// 默认不合并菜单
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
/* 侧边栏 */
.el-aside {
  width: auto;
}

/* 顶部区域 */
.el-header,
.header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-header {
  border-bottom: 1px solid var(--el-menu-border-color);
}

/* 头像 */
.header-container>.el-dropdown>.el-avatar {
  cursor: pointer;
}



.switch-btn {
  cursor: pointer;
  font-size: 24px;
}

/* 头像大小 */
.el-avatar {
  --el-avatar-size: 32px;
}
</style>
