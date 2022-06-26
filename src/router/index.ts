import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    title: string
  }
}

// 定义路由规则
const routes: Array<RouteRecordRaw> = [
  // 重定向
  { path: '/', redirect: '/dashboard', name: "/" },
  // 仪表盘
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import("@/layout/Index.vue"),
    children: [
      { path: '', component: () => import("@/pages/dashboard/Index.vue"), meta: { title: "仪表盘" } }
    ]
  },
  {
    path: '/baidu',
    name: 'baidu',
    component: () => import("@/layout/Index.vue"),    // 设置布局文件
    children: [{ path: '', component: () => import("@/pages/externalpage/BaiduPage.vue"), meta: { title: "百度" } }
    ]
  },
  // 错误页面处理
  {
    path: '/error', name: 'error', redirect: "404", component: () => import("@/layout/Index.vue"),
    children: [
      // 404 页面
      { path: '404', name: "404", component: () => import("@/pages/error/404.vue"), meta: { title: "404-页面未找到" } },
      // 403 没有权限访问
      { path: '403', name: "403", component: () => import("@/pages/error/404.vue"), meta: { title: "403-页面无权限访问" } }
    ]
  },
  // 登录页面
  { path: '/login', name: "login", component: () => import("@/pages/login/Index.vue") },
  // 前面的路由都没有匹配到404 页面 
  { path: "/:catchAll(.*)", redirect: { name: "404" } },

]


// 创建一个路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})


// 路由拦截
router.beforeEach((to, from) => {
  // 将 document.title 设置成路由配置中每一个路由记录的 name
  document.title = to.meta?.title;
})


export default router
