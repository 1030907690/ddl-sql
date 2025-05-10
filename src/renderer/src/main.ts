// import './assets/main.css'
import './assets/basic.scss'
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'


const app = createApp(App)
app.use(ElementPlus)

// 配置路由
app.use(router)

app.mount('#app')
