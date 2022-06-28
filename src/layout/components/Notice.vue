<!-- 通知组件 -->
<template >
  <div class="notice-container">
    <el-badge :value="3">
      <Remind ref="remindRef" theme="outline" size="18" fill="#333" style="cursor: pointer;" />
    </el-badge>
    
    <el-popover ref="popoverRef" popper-class="notice-popover" width="400px" transition="animated animate__headShake"
      :virtual-ref="remindRef" trigger="click" virtual-triggering>
      <div class="notice-content">
        <el-scrollbar height="400px">
          <div class="notice-item" v-for="i in 10" :key="i">
            <span class="item-icon">
              <Attention theme="outline" size="24" fill="#333" />
            </span>
            <span class="item-content">
              【域名更新】尊敬的 LeetCoder，为进一步打造 LeetCode 力扣品牌，我们将原网站域名 leetcode-cn.com 变更为 leetcode.cn，原网站域名将在 5 月 9 号 6:00
              迁移后，自动跳转至新域名。
            </span>
            <span class="item-time">
              2 个月前
            </span>
          </div>
        </el-scrollbar>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { Remind, Attention } from '@icon-park/vue-next/es/map';
import { ref, unref } from 'vue'

const remindRef = ref()
const popoverRef = ref()

const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}

</script>

<style scoped>
.el-popover.notice-popover .notice-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.el-popover.notice-popover .notice-item .item-icon {
  flex: 1;
  font-size: 16px;
}

.el-popover.notice-popover .notice-item .item-content {
  width: 280px;
  padding: 0 10px;
  text-overflow: -o-ellipsis-lastline;
  /* 溢出内容隐藏 */
  overflow: hidden;
  /*文本溢出部分用省略号表示*/
  text-overflow: ellipsis;
  /*特别显示模式 */
  display: -webkit-box;
  /*行数 */
  -webkit-line-clamp: 2;
  line-clamp: 2;
  /*盒子中内容竖直排列 */
  -webkit-box-orient: vertical;
}

.el-popover.notice-popover .notice-item .item-time {
  flex: 3;
}

.notice-content .notice-item {
  padding: 10px;
  border-bottom: 1px solid var(--el-menu-border-color);
}
</style>