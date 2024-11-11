import './assets/main.css' // 导入全局样式

// 引入 createApp 用于创建 Vue 应用实例
import { createApp } from 'vue'

// 引入 App 组件
import App from './App.vue'

// 引入 Vuex 状态管理 store
import store from './store'
// 引入 Vue Router
import router from './router'

// 创建 Vue 应用实例
const app = createApp(App);

// 使用 Vuex 和 Vue Router 插件
app.use(store);
app.use(router);

// 将应用挂载到 HTML 中具有 id 为 app 的元素上
app.mount('#app');
