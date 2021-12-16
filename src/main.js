import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
import './assets/css/iconfont/iconfont.css'
import axios from './plugins/axios/index'
import optimize from './util/optimize/index'
import tip from './util/tips/index'
const app = createApp(App)
app.config.globalProperties.$http = axios
app.config.globalProperties.$optimize = optimize
app.config.globalProperties.$tip = tip
app.use(store).use(router).mount('#app')
