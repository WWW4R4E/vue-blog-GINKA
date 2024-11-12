import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 
import Login from '../views/Login.vue'; 
import Post from '../views/Post.vue'; 
import About from '../views/About.vue'; 
import Contact from '../views/Contact.vue'; 
import Comments from '../views/Comments.vue';
import { useStore } from 'vuex'; // 导入 Vuex store

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login 
  },
  {
    path: '/home',
    name: 'Home',
    component: Home 
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post 
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue') // 404页面
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

// 定义路由守卫
router.beforeEach((to, from, next) => {
  const store = useStore(); // 在守卫中使用 Vuex store
  const isAuthenticated = store.state.isAuthenticated; // 从 Vuex 中获取登录状态

  if (to.name !== 'Login' && !isAuthenticated) {
    // 更新 Vuex 中的消息状态
    store.commit('setMessage', { message: '请先登录!', type: 'error' });
    next({ name: 'Login' }); // 重定向到登录页面
  } else {
    next(); // 继续导航
  }
});

export default router;
