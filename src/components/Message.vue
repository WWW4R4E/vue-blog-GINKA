<template>
  <div :class="type" v-if="message">
    <p>{{ message }}</p>
    <button @click="close">关闭</button>
  </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
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

onMounted(() => {
  if (props.duration > 0) {
    setTimeout(close, props.duration);
  }
});

</script>

<style scoped>
.message {
  padding: 10px;
  border-radius: 5px;
  color: white;
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
