<script>
import Person from "@/components/Person.vue"; // 修正拼写错误
import { defineComponent } from "vue";

export default defineComponent({
    components: { Person }  // 修正拼写错误
})
</script>

<template >
    <div class="login">
        <Person />
    </div>
</template>
<style>
body {
    align-items: center;
    background-image: url("../assets/background.png"); /* 使用 url() 函数 */
    background-size: cover; /* 让背景图像覆盖整个区域 */
    background-repeat: no-repeat; /* 防止背景图像重复 */
}
</style>
