<template>
    <div>
        <h1>文章标题：{{ post.title }}</h1>
        <p class="summary">{{ post.summary }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Axios from 'axios';


const route = useRoute();
const postId = route.params.id; // 获取动态路由参数
const post = ref({}); // 假设你有一个数据结构来存储文章详细信息

onMounted((async () => {
    try {
        const response = await Axios.get(`http://localhost:9999/api/post/${postId}`);

        post.value = {
            title: response.data.title,
            summary: response.data.summary,
        };
        console.log('获取文章成功:', post.value);

    } catch (error) {
        console.error(error);
    }
})
);
</script>

<style scoped>

.summary {
    white-space: pre-wrap;
}
</style>