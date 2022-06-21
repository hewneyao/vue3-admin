import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// ElementPlus 插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { resolve } from 'path'

const srcPath = resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  // 构建完项目打开页面
  server: {
    open: 'index.html'
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    // 配置别名 @/ = ./src
    alias: {
      '@/': `${srcPath}/`
    }
  }
})
