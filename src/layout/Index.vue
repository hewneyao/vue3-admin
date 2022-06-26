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
            <MenuUnfoldOne v-show="!isCollapse" theme="outline" size="24" fill="#333" />
            <MenuFoldOne v-show="isCollapse" theme="outline" size="24" fill="#333" />
          </div>
          <!--  切换菜单按钮 end -->

          <div style="display: flex;align-items: center;height: 100%;">

            <Notice style="margin-right:18px;margin-bottom: -8px;"></Notice>

            <!-- 头像以及下拉列表 start-->
            <el-dropdown trigger="click">
              <!-- 头像 start -->
              <el-avatar style="cursor:pointer" shape="square"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
              <!-- 头像 end -->
              <!-- 操作选项 start -->
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
              <!-- 操作选项 end -->
            </el-dropdown>
            <!-- 头像以及下拉列表 end-->
          </div>
        </div>
      </el-header>
      <!-- 顶部 end -->

      <!-- 主要内容区域 start -->
      <el-main>
        <!-- 路由组件 start -->
        <router-view v-slot="{ Component }">
          <keep-alive>
            <transition name="animation" enter-active-class="animated animate__headShake"
              leave-active-class="animated animate__zoomOutDown">
              <div class="main-container">
                <component :is="Component" />
              </div>
            </transition>
          </keep-alive>
        </router-view>
        <!-- 路由组件 emd-->
      </el-main>
      <!-- 主要内容区域 end -->
    </el-container>
  </el-container>
</template>

<!-- 组件脚本 start -->
<script setup lang="ts">
import { ref } from 'vue'
import { MenuFoldOne, MenuUnfoldOne } from '@icon-park/vue-next/es/map';

import Sidebar from '@/layout/components/Sidebar.vue'
import Notice from '@/layout/components/Notice.vue'

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
}

/* 头像 */
.header-container>.el-dropdown>.el-avatar {
  cursor: pointer;
}

.switch-btn {
  cursor: pointer;
  font-size: 24px;
}



.main-container {
  height: 100%;
}
</style>
<!-- 组件样式 end -->