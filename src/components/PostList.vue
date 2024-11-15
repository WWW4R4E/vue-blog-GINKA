<template>
  <div>
    <ul>
      <li v-for="post in localPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.abstractText }}</p>
        <a :href="'/post/' + post.id">阅读全文</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const localPosts = ref([]);

    // 定义获取数据的函数
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:9999/api/postList');
        localPosts.value = response.data;
        console.log('获取文章成功:', localPosts.value);
      } catch (error) {
        console.error('获取文章失败:', error);
        // 设置默认的文章数据
        localPosts.value = [
          { id: 1, title: '第一篇文章', abstractText: '这是第一篇文章的摘要。' },
          { id: 2, title: '第二篇文章', abstractText: '这是第二篇文章的摘要。' },
          { id: 3, title: '第三篇文章', abstractText: '这是第三篇文章的摘要。' },
        ];
      }
    };

    // 在组件挂载时获取数据
    onMounted(fetchPosts);

    return { localPosts };
  }
}

</script>
