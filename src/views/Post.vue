<template>
    <div>
        <h1>文章标题：{{ post.title }}</h1>
        <p>{{ post.content }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.params.id; // 获取动态路由参数
const post = ref({}); // 假设你有一个数据结构来存储文章详细信息

onMounted(() => {
    // 模拟获取文章数据请求
    // 实际上，您可能需要通过 API 获取文章内容
    // 这里可以用具体函数根据 ID 获取相应的文章
    post.value = {
        title: '文章标题',
        content: '这是文章的内容。'
    };
});
</script>
