import { createApp } from 'vue'
import App from '@/App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 使用 normalize.css 修改元素默认样式，达到多浏览器样式一致
import 'normalize.css'

import '@/styles/global.css'
const app = createApp(App)
// 全局注册 ElementPlusIcons 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')