<template>
  <div>
    <div class="overlay"></div> 
    <router-view class="router-view"></router-view>
    <Message v-if="message" class="message" :message="message" :type="type" />
  </div>
</template>

<script setup>
import Message from './components/Message.vue';
import { useStore } from 'vuex'; 
import { useRouter } from 'vue-router'; 
import { computed } from 'vue'; 

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
  /* 距离顶部 40% */
  left: 50%;
  /* 距离左边 50% */
  transform: translate(-50%, -40%);
  /* 向左和向上移动自身的一半宽度和高度 */
}

div.blog-home {
  height: 100vh;
  background-color: bisque;
}

body {
  background-image: url(./assets/background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1; /* 确保背景在最底层 */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色覆盖层 */
  /* z-index: 0; 确保位于背景下 */
  backdrop-filter: blur(5px); /* 模糊效果 */
}

.router-view {
  position: relative;
  z-index: 1 ; /* 确保在覆盖层之上 */
}
</style>
