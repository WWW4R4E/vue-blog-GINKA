<template>
  <div :class="type" v-if="message">
    <p>{{ message }}</p>
    <button @click="close">关闭</button>
  </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { ref, watch } from 'vue';
const store = useStore();
// props 的定义
const props = defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'info' // 其他选项可以是 'success', 'error', 'warning'
  },
  duration: {
    type: Number,
    default: 3000 // 默认消息显示时间（毫秒）
  }
});
const close = () => {
  store.commit('setMessage', { message: '', type: '' });
};
// // 使用 onMounted 钩子来确保组件挂载后执行
// onMounted(() => {
//   // 如果 duration 大于 0，则设置一个定时器来自动关闭消息
//   if (props.duration > 0) {
//     setTimeout(close, props.duration);
//   }
// });

</script>

<style scoped>
.message {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  z-index: 1000;
}
.message.info {
  background-color: blue;
}
.message.success {
  background-color: green;
}
.message.error {
  background-color: red;
}
.message.warning {
  background-color: orange;
}
.close {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>
