<template>
  <div id="app">
    <router-view id="router-view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
};
</script>

<style>
div#app {
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  height: 100vh;
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
}
</style>
