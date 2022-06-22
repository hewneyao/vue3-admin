import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router/index'
// 引入全部 element-plus/icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 使用 normalize.css 修改元素默认样式，达到多浏览器样式一致
import 'normalize.css'

// 动画效果
import 'animate.css'
// 全局 css
import '@/styles/global.css'

// 创建一个根组件
const app = createApp(App)

// 全局注册 ElementPlusIcons 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 使用 router
app.use(router)
// 挂载到 #app 节点
app.mount('#app')