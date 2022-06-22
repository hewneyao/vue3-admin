<template>
  <el-container style="height:100%">
    <!--  侧边栏 start -->
    <el-aside>
      <Sidebar ref="sidebar" :isCollapse="isCollapse"></Sidebar>
    </el-aside>
    <!--  侧边栏 end -->
    <el-container>
      <!-- 顶部 start-->
      <el-header>
        <div class="header-container">
          <!--  切换菜单按钮 start -->
          <div @click="swtichCollapseChange" class="switch-btn">
            <el-icon>
              <Fold v-show="!isCollapse" />
              <Expand v-show="isCollapse" />
            </el-icon>
          </div>
          <!--  切换菜单按钮 end -->

          <!-- 头像以及下拉列表 start-->
          <el-dropdown trigger="click">
            <!-- 头像 start -->
            <el-avatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <!-- 头像 end -->
            <!-- 操作选项 start -->
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="CircleCheck">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
            <!-- 操作选项 end -->
          </el-dropdown>
          <!-- 头像以及下拉列表 end-->
        </div>
      </el-header>
      <!-- 顶部 end -->

      <!-- 主要内容区域 start -->
      <el-main>
        <div class="main-container">
          <!-- 路由组件 start -->
          <router-view v-slot="{ Component }">
            <keep-alive>
              <transition name="animation" enter-active-class="animated animate__headShake"
                leave-active-class="animated animate__zoomOutDown">
                <component :is="Component" />
              </transition>
            </keep-alive>
          </router-view>
          <!-- 路由组件 emd-->
        </div>
      </el-main>
      <!-- 主要内容区域 end -->
    </el-container>
  </el-container>
</template>

<!-- 组件脚本 start -->
<script setup lang="ts">
import { CircleCheck } from '@element-plus/icons-vue'
import { ref } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
// 默认不合并菜单
let isCollapse = ref(true)
// 获取 Sidebar 组件的引用，注意变量名和你要获取的 ref 名一致
const sidebar = ref<InstanceType<typeof Sidebar>>()
// 切换菜单合并状态
function swtichCollapseChange() {
  isCollapse.value = !isCollapse.value
  sidebar.value?.setIsCollapse(isCollapse.value)
}
</script>
<!-- 组件脚本 end -->

<!-- 组件样式 start -->
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
  padding-right: 50px;
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
<!-- 组件样式 end -->