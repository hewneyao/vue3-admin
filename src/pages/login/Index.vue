<template>
  <div class="login-container">
    <div class="login-box">
      <h2>登录</h2>
      <el-form ref="ruleFormRef" :model="loginForm" :rules="rules" class="login-form" size="large" status-icon>
        <el-form-item label="账号" prop="account">
          <el-input v-model="loginForm.account" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" />
        </el-form-item>
      </el-form>
      <div style="display:flex;">
        <el-button type="danger" @click="resetForm(ruleFormRef)">重置</el-button>
        <el-button type="primary" @click="submitLogin(ruleFormRef)">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
// 引入用户登录 API
import { login } from '@/api/user'

import { useRouter } from 'vue-router'

const router = useRouter()
interface LoginForm {
  account: string;
  password: string;
}

// 获取表单引用
const ruleFormRef = ref<FormInstance>()

// 登录表单
const loginForm: LoginForm = reactive({ account: "", password: "" })

// 定义校验规则
const rules = reactive<FormRules>({
  account: [
    { required: true, message: '请输入登录账号', trigger: 'blur' },
    { min: 4, max: 10, message: '账号长度在4-10个字符之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 4, max: 10, message: '密码长度在6-12个字符之间', trigger: 'blur' },
  ],
});

// 提交登录请求
const submitLogin = async (form: FormInstance | undefined) => {
  if (!form) return
  // 校验表单
  await form.validate(async (valid, fields) => {
    if (valid) {
      // 提交登录请求
      // const { data: res } = await login(loginForm)
      // if (res['code'] === 200) {
      //   console.log("登录成功");
      //   return;
      // }
      // 跳转到首页
      router.push("/")
      // 登录失败
    } else {
      // 表单校验错误
      console.log('error submit!', fields)
    }
  });
}
// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>


<style scoped>
.login-container {
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
  /* 设置背景渐变 */
  background-image: linear-gradient(to left,
      #9c88ff, #3cadeb);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box {
  background-color: #FFFFFF;
  padding: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  /* shadow 样式 https://getcssscan.com/css-box-shadow-examples?ref=producthunt */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 18px;
  height: 250px;
}

.login-form {
  width: 350px;
}

.el-form-item--default .el-form-item__error {
  font-weight: bold;
}
</style>