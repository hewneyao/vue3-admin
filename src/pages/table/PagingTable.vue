<template>
  <el-card class="box-card" >
    <template #header>
      <div class="card-header">
        <span>带斑马纹表格</span>
        <el-button class="button" text>导出</el-button>
      </div>
    </template>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>

    <div class="pagination">
      <el-pagination  background layout="prev, pager, next" :total="1000" />
    </div>

  </el-card>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.pagination{
  margin-top: 18px;
  display: flex;
  justify-content: end;
}

</style>