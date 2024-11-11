<template>
  <div v-if="visible" class="message" :class="type">
    <span>{{ message }}</span>
    <button class="close" @click="close">×</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info' // other options could be 'success', 'error', 'warning'
    },
    duration: {
      type: Number,
      default: 3000 // default duration to show message in milliseconds
    }
  },
  setup(props) {
    const visible = ref(true); // 初始化为 false

    const close = () => {
      visible.value = false;
    };

    watch(visible, (newValue) => {
      if (newValue) {
        setTimeout(() => {
          close();
        }, props.duration);
      }
    });

    return { visible, close };
  }
}
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
