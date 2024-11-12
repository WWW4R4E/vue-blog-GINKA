<template>
  <div class="login-box">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// 表单数据
const username = ref('');
const password = ref('');
const router = useRouter();
const store = useStore();

// 登录方法
async function login() {
  if (!username.value || !password.value) {
    store.commit('setMessage', { message: '请输入用户名和密码！', type: 'error' });
    return;
  }

  try {
    const response = await fetch('http://localhost:9999/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        username: username.value,
        password: password.value
      })
    });

    if (response.ok) {
      store.commit('setMessage', { message: '登录成功！', type: 'success' , duration: 2000});
      store.commit('setAuthentication', true); // 更新登录状态
      router.push('/home');
    } else {
      const errorResponse = await response.json();
      store.commit('setMessage', { message: `登录失败：${errorResponse.message || '请检查用户名和密码！'}`, type: 'error' , duration: 2000});
    }
  } catch (error) {
    store.commit('setMessage', { message: '登录失败，请检查网络连接！', type: 'error' , duration: 2000});
    console.error(error);
  }
}

</script>

<style>
.login-box {
  color: #333;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 100%;
  margin: 0 auto;
}

.input-group {
  margin-bottom: 10px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
