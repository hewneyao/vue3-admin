<template >
  <el-menu active-text-color="rgb(64, 158, 255)" background-color="rgb(48, 65, 86)" class="el-menu-vertical-demo" default-active="2"
    text-color="#fff"  :collapse="isCollapse" @open="handleOpen" router
    @close="handleClose">
    <div class="web-title">
      <span v-show="!isCollapse">Vue3-admin</span>
      <span v-show="isCollapse">A</span>
    </div>
    <!-- 菜单 -->
    <el-menu-item index="/dashboard">
      <el-icon>
        <Dashboard theme="outline" size="24" fill="#FFF" />
      </el-icon>
      <template #title>
        仪表盘
      </template>
    </el-menu-item>
    <el-sub-menu index="1-1">
      <template #title>
        <el-icon>
          <Components theme="outline" size="24" fill="#FFF" />
        </el-icon>
        组件
      </template>
      <el-menu-item index="/acticle">
        <template #title>
          Markdown 编辑器
        </template>
      </el-menu-item>
      <el-menu-item index="">
        <template #title>
          富文本编辑器
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <TableFile theme="outline" size="24" fill="#FFF" />
        </el-icon>
        <span>表格</span>
      </template>
      <el-menu-item index="/table/paging-table">
        <template #title>
          分页表格
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <Page theme="outline" size="24" fill="#FFF" />
        </el-icon>
        <span>外部页面</span>
      </template>
      <el-menu-item index="/outpage/bilibili">
        <template #title>
          哔哩哔哩
        </template>
      </el-menu-item>
      <el-menu-item index="/outpage/baidu">
        <template #title>
          百度
        </template>
      </el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Page, Dashboard, TableFile ,Components} from '@icon-park/vue-next/es/map';
// 声明 props
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})
// 将 props.isCollapse 转为响应式变量
const isCollapse = ref(props.isCollapse)


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const setIsCollapse = (collapse: boolean) => {
  // 修改 isCollapse
  isCollapse.value = collapse
}

// 暴露属性和方法，提供父组件访问
defineExpose({ setIsCollapse })

</script>

<style scoped>
/* 网站名称 */
.web-title {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  border-bottom: 1px solid var(--el-menu-border-color);
  background-color: rgb(48, 65, 86);
  color: white;
}

.el-menu-vertical-demo {
  height: 100%;
}

.el-menu-vertical-demo.el-menu--collapse {
  width: 63px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>