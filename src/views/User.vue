<template>
    <div class="data-view">
        <div class="profile">
            <h1>个人信息</h1>
            <div class="profile-section">
                <div class="avatar">
                    <img :src="user.avatar" alt="用户头像" />
                    <input type="file" @change="uploadAvatar" accept="image/*" />
                </div>
                <div class="info">
                    <label for="username">用户名:</label>
                    <input type="text" id="username" v-model="user.username" />

                    <label for="email">电子邮件:</label>
                    <input type="email" id="email" v-model="user.email" />

                    <label for="bio">个人简介:</label>
                    <textarea id="bio" v-model="user.bio"></textarea>

                    <button @click="changePassword">修改密码</button>
                </div>
            </div>
            <h2>我的文章</h2>
            <ul class="article-list">
                <li v-for="article in articles" :key="article.id">
                    {{ article.title }}
                </li>
            </ul>
            <button @click="saveChanges">保存更改</button>
            <button @click="logout">退出登录</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref({
    avatar: 'default-avatar.png',
    username: '用户123',
    email: 'user@example.com',
    bio: '这是我的个人简介。',
});
const articles = ref([
    { id: 1, title: '文章标题 1' },
    { id: 2, title: '文章标题 2' },
]);

function saveAvatar(avatarDataUrl) {
    user.value.avatar = avatarDataUrl; // 直接使用提供的 Data URL
}

function uploadAvatar(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            saveAvatar(e.target.result);
        };
        reader.onerror = () => {
            console.error('文件读取错误');
            alert('上传头像时出错，请重试。');
        };
        reader.readAsDataURL(file);
    }
}

function changePassword() {
    // 处理密码修改逻辑
}

function saveChanges() {
    // 处理保存更改逻辑
}

function logout() {
    // 处理退出登录逻辑
}
</script>

<style scoped>
.data-view {
    display: flex;
    height: 100vh;
}

.profile {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #191717;
}

.profile-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    margin-bottom: 20px;
}

.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
}
input {
    display: flex;
    align-items: center;
    justify-content: center;
    }

.avatar img {
    width: auto;
    height: auto;
    max-width: 150px;
    max-height: 150px;
}

.info {
}

.info label {
    display: block;
    margin: 10px 0 5px;
}

.article-list {
    list-style-type: none;
    padding: 0;
}

.article-list li {
    margin: 10px 0;
}
</style>
