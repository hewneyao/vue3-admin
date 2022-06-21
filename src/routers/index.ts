import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

// 定义路由规则
const routes: Array<RouteRecordRaw> = [
  // 重定向
  { path: '/', redirect: '/home' },
  // 首页
  {
    path: '/home', component: () => import("../views/layout/Index.vue")
  },
  { path: '/login', name: "login", component: () => import("../views/login/Index.vue") },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
