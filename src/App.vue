<template>
  <div id="app">
    <router-view id="router-view"></router-view>
        <Message v-if="message" class="message" :message="message" :type="type" />
  </div>
</template>

<script setup>
import Message from './components/Message.vue';
import { useStore } from 'vuex'; 
import { useRouter } from 'vue-router'; 
import { computed, onMounted } from 'vue'; 

const router = useRouter(); 
const store = useStore();

const message = computed(() => store.state.message);
const type = computed(() => store.state.type);

</script>

<style>
div#app {
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  height: 100vh;
}
div.message {
    position: fixed; /* 改为 fixed，使其固定在视口 */
    bottom: 20px; /* 距离底部 20px */
    left: 50%;
    transform: translateX(-50%); /* 水平居中 */
    background-color: white;
    border: 1px solid #ccc;
    width: 80%; /* 设置一个特定的宽度 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}


div.login {
  position: absolute;
  /* 绝对定位 */
  top: 40%;
  /* 距离顶部 50% */
  left: 50%;
  /* 距离左边 50% */
  transform: translate(-50%, -40%);
  /* 向左和向上移动自身的一半宽度和高度 */
}

div.blog-home {
  height: 100vh;

  background-color: bisque;
}</style>
