<template>
    <div>
        <h1>文章标题：{{ post.title }}</h1>
        <p>{{ post.content }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Axios } from 'axios';

const route = useRoute();
const postId = route.params.id; // 获取动态路由参数
const post = ref({}); // 假设你有一个数据结构来存储文章详细信息

onMounted((async () => {
    try {
        const response = await Axios.get(`/api/post/${postId}`);

        post.value = {
            title: response.data.title,
            content: response.data.content,
        };
    } catch (error) {
        console.error(error);
    }
})
);
</script>
