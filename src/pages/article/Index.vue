<template >
  <el-card>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="文章标题">
        <el-input v-model="formInline.user" style="width:1000px" placeholder="请输入文章标题" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
      </el-form-item>
    </el-form>
    <Editor></Editor>
  </el-card>

</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Editor from '@/components/editor/Index.vue'

const formInline = reactive({
  user: '',
  region: '',
})

const onSubmit = () => {
  alert("发布成功")
}
</script>

<style scoped>
</style>