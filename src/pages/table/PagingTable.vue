<template>
  <el-card class="box-card" shadow="never">

    <template #header>
      <div class="card-header">
        <span>带斑马纹表格</span>
        <el-button type="primary">导出</el-button>
      </div>
    </template>
    <!-- 检索表单 -->
    <el-form :inline="true" :model="formInline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="formInline.region" placeholder="请选择性别">
          <el-option label="男" value="1" />
          <el-option label="女" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">检索</el-button>
      </el-form-item>
    </el-form>
    <!-- 检索表单 -->

    <!-- 数据表格 -->
    <el-table :data="tableData1" max-height="600" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="sex" label="性别">
        <template #default="scope">
          {{ scope.row.sex == 0 ? "女" : "男" }}
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" />
    </el-table>
    <!-- 数据表格 -->

    <!-- 分页 -->
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="tableData.length" />
    </div>
    <!-- 分页 -->
  </el-card>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: null,
});


let tableData = [
  {
    name: 'Mike',
    sex: 0,
    age: 13,
  },
  {
    name: 'Mike',
    sex: 0,
    age: 13,
  }, {
    name: 'Mike',
    sex: 0,
    age: 13,
  }
  , {
    name: 'Mike',
    sex: 0,
    age: 13,
  }
  , {
    name: 'Mike',
    sex: 0,
    age: 13,
  },
  {
    name: 'Mike',
    sex: 0,
    age: 13,
  },
  {
    name: 'Mike',
    sex: 0,
    age: 13,
  }, {
    name: 'Mike',
    sex: 0,
    age: 13,
  }
  , {
    name: 'Mike',
    sex: 0,
    age: 13,
  }
  , {
    name: 'Mike',
    sex: 0,
    age: 13,
  },
  {
    name: 'Mike',
    sex: 0,
    age: 13,
  },
  {
    name: 'Mike',
    sex: 0,
    age: 13,
  }, {
    name: 'Mike',
    sex: 0,
    age: 13,
  }
  , {
    name: 'Mike',
    sex: 0,
    age: 13,
  }
  , {
    name: 'Mike',
    sex: 0,
    age: 13,
  }, {
    name: 'Mike',
    sex: 0,
    age: 13,
  },
  {
    name: 'Mike',
    sex: 0,
    age: 13,
  }, {
    name: 'Mike',
    sex: 0,
    age: 13,
  }
  , {
    name: 'Mike',
    sex: 0,
    age: 13,
  }
  , {
    name: 'Mike',
    sex: 0,
    age: 13,
  }
]

let tableData1 = reactive(tableData)

const onSubmit = () => {
  tableData1 = tableData.filter((item) => {
    return formInline.region == item.sex
  })
  console.log('submit!',tableData1)
}
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

.pagination {
  margin-top: 18px;
  display: flex;
  justify-content: end;
}
</style>