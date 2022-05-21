import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const fs = require("fs")
const dotenv = require("dotenv")
const { resolve } = require('path')

// https://vitejs.dev/config/
export default ({ command, mode }) =>{
  let NODE_ENV =  process.env.NODE_ENV || 'development';
  let envFiles = [];
  // 根据不同的环境使用不同的环境变量
  if(command == 'serve') {
    envFiles = [
      `.env` /** default file */
    ]
  } else {
    envFiles = [
      `.env`, /** default file */
      `.env.${NODE_ENV}` /** mode file */
    ]
  }

  process.env['NODE_ENV'] = NODE_ENV
  for (const file of envFiles) {
    const envConfig = dotenv.parse(fs.readFileSync(file))
    for (const k in envConfig) {
      process.env[k] = envConfig[k]
    }
  }

  return defineConfig({
    define: { 'process.env': process.env },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
      }
    },
    server: {
      host: process.env.VITE_HOST,
      port: process.env.VITE_PORT,
      open:  false,   // 是否自动在浏览器打开
      https: false,   // 是否开启 https
      ssr:   false,   // 服务端渲染
      base: process.env.VITE_BASE_URL,
      outDir: process.env.VITE_OUTPUT_DIR,
      proxy: {
        '/api': {
          target: 'http://your_api_host',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  })
}
