<template>
  <div>
    <ul>
      <li v-for="post in localPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.summary }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const localPosts = ref([
      { id: 1, title: '第一篇文章', summary: '这是第一篇文章的摘要。' },
      { id: 2, title: '第二篇文章', summary: '这是第二篇文章的摘要。' },
      { id: 3, title: '第三篇文章', summary: '这是第三篇文章的摘要。' },
    ]);

    return { localPosts };
  }
}
</script>

