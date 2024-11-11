import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // 导入 Home 组件
import Login from '../views/Login.vue'; // 导入 Login 组件
import Post from '../views/Post.vue'; // 导入 Post 组件

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login // 登录页面
  },
    {
        path: '/home',
        name: 'Home',
        component: Home // 首页
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post // 文章详情页
    },
];


// 创建路由实例并导出
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
