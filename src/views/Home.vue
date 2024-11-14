<template>
    <div class="blog-home">
        <header>
            <div id="top_nav" class="navbar border-none">
                <nav id="nav_main" class="navbar-main">
                    <ul id="nav_left" class="navbar-list navbar-left">
                            <a title="嗨喽" role="banner" href="/user">
                                <img class="icon" src="../assets/icon.jpg" alt="图标">
                            </a>
                        <li v-for="link in externalLinks" :key="link.text">
                            <a :href="link.href">{{ link.text }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>博客首页 | 新的开始</h1>
            <p>这是基于<strong>vue3和springboot3</strong>的博客系统。</p>
        </header>

        <div class="layout">
            <aside class="sidebar">
                <nav>
                    <ul class="nav-links">
                        <li v-for="link in navLinks" :key="link.text" class="nav-item">
                            <router-link class="nav-link" :to="link.to">{{ link.text }}</router-link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main>
                <section>
                    <h2>文章列表</h2>
                        <PostList class="post-list"/>
                </section>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PostList from '@/components/PostList.vue';


const navLinks = [
    { text: '首页', to: '/home' },
    { text: '关于', to: '/about' },
    { text: '正文', to: '/contact' },
    { text: '评论', to: '/comments' },
    { text: '新建', to: '/writer'}
];


const externalLinks = [
    { text: '随机看文', href: 'https://www.cnblogs.com/cmt/p/18500368' },
    { text: '排行榜', href: 'https://news.cnblogs.com/' },
    { text: '收藏', href: 'https://q.cnblogs.com/' },
];


const isUserLoggedIn = ref(false);

const logout = () => {
    try {
        // 退出登录逻辑
        isUserLoggedIn.value = false;
    } catch (error) {
        console.error("Logout failed:", error);
    }
};
</script>

<style>
.blog-home {
    padding: 20px;
}

.layout {
    display: flex;
}

header {
    text-align: center;
    margin-bottom: 20px;
}

img.icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

h1 {
    color: #222;
    font-size: 36px;
}

h2 {
    color: #444;
}

h3 {
    margin: 0;
    color: #333;
}

.sidebar {
    width: 200px;
    margin-right: 20px;
}

.nav-links {
    list-style-type: none;
    padding: 0;
}

.nav-item {
    margin: 10px 0;
}

.nav-link {
    text-decoration: none;
    color: #007BFF;
}

.nav-link:hover {
    text-decoration: underline;
}

main {
    flex: 1;
}

a {
    color: initial; 
}
a:hover {
    color: initial;
}
a:visited {
    color: initial; 
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    border-bottom: 1px solid #35252542;
    padding: 10px 0;
}

p {
    margin: 0;
    color: #000;
}

.navbar-main {
    display: flex; /* 使用flexbox */
    justify-content: start; /* 让项目从左到右排列 */
    align-items: center; /* 垂直居中 */
    padding: 10px 20px; /* 内边距 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
}

.navbar-list {
    display: flex; /* 列表项水平排列 */
    list-style: none; /* 去掉列表项默认样式 */
    padding: 0; /* 去掉内边距 */
    margin: 0; /* 去掉外边距 */
}

.navbar-list li {
    margin: 0 15px; /* 水平方向的间距 */
}

.navbar-list a {
    text-decoration: none; /* 去掉链接的下划线 */
    color: #333; /* 链接文字颜色 */
    padding: 10px; /* 增加点击区域 */
}

.navbar-list a:hover {
    color: #007BFF; /* 悬停时改变链接颜色 */
}

.dropdown-menu {
    display: none; /* 默认隐藏下拉菜单 */
    position: absolute; /* 绝对定位 */
    top: 100%; /* 下移至下方 */
    left: 0;
    background-color: #ffffff; /* 背景色 */
    border: 1px solid #ddd; /* 边框 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 阴影 */
    z-index: 1000; /* 确保在上层 */
}

.dropdown:hover .dropdown-menu {
    display: block; /* 在悬停时显示下拉菜单 */
}

.post-list {
    margin: 10px 15px;
}

</style>
