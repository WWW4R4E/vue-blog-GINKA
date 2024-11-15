<template>
    <div>
        <input type="file" id="fileInput" @change="handleFileChange" style="display: none;" />
        <button @click="triggerFileInput">选择文件</button>
    </div>
</template>

<script>
export default {
    methods: {
        triggerFileInput() {
            document.getElementById('fileInput').click(); // 触发文件输入框
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                console.log('选择的文件：', file.name);
            }
        }
    }
}
</script>

<style>
button {
    padding: 10px 20px;
    background-color: #007bff; /* 设置按钮背景色 */
    color: white; /* 设置文本颜色 */
    border: none; /* 去掉边框 */
    border-radius: 5px; /* 设置圆角 */
    cursor: pointer; /* 鼠标悬停时显示手势 */
}

button:hover {
    background-color: #0056b3; /* 鼠标悬停时按钮变色 */
}
</style>
