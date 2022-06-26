import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router/index'

// 引入字节图标 https://github.com/bytedance/IconPark/tree/master/packages/vue-next
// https://iconpark.oceanengine.com
import '@icon-park/vue-next/styles/index.css';

// 使用 normalize.css 修改元素默认样式，达到多浏览器样式一致
import 'normalize.css'

// 动画效果
import 'animate.css'
// 全局 css
import '@/styles/global.css'

// 创建一个根组件
const app = createApp(App)

// 使用 router
app.use(router)
// 挂载到 #app 节点
app.mount('#app')