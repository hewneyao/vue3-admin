import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"



// 定义路由规则
const routes: Array<RouteRecordRaw> = [
  // 重定向
  { path: '/', redirect: '/dashboard', name: '仪表盘', },
  // 仪表盘
  {
    path: '/dashboard',
    name: 'dashboard',
    // 设置布局文件
    component: () => import("../views/layout/Index.vue"),
    children: [
      {
        path: '', component: () => import("../views/dashboard/Index.vue"),
        name: '仪表盘',
      }
    ]
  },
  { path: '/login', name: "login", component: () => import("../views/login/Index.vue") },
]

// 创建一个路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

// 路由守卫
router.beforeEach((to, from) => {
  // 将 document.title 设置成路由配置中每一个路由记录的 name
  document.title = (to.name == null || to.name == undefined) ? "" : to.name.toString();
})


export default router
