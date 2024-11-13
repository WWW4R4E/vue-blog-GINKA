<template>
    <div class="writer">
        <div class="preview">
            <h2>预览</h2>
            <div v-html="renderedContent"></div>
        </div>
        <ToolBar />
        <div class="InputLike">
            <textarea v-model="content" class="Editable-content" placeholder="开始写作"></textarea>
        </div>
        <div class="publishSettings">
            <label class="publishLabel"> 字数：{{ content.length }} </label>
            <button @click="handleSubmit">提交</button>
            <button @click="handleSaveDraft">保存草稿</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { marked } from 'marked';
import ToolBar from '@/components/ToolBar.vue';

// 使用 ref 创建响应式数据
const content = ref('');  // 存储输入的 Markdown 内容

// 计算属性，转换 Markdown 内容为 HTML
const renderedContent = computed(() => {
    try {
        return marked(content.value);  // 将 Markdown 内容转换为 HTML
    } catch (error) {
        console.error("Markdown 转换出错:", error);
        return "<p>内容转换出错，请检查您的输入。</p>";  // 错误处理
    }
});

// 提交处理
function handleSubmit() {
    // 提交逻辑
    if (content.value.trim() === '') {
        alert('内容不能为空！');
        return;
    }
    // 进行提交处理，如发送到服务器等
    console.log("提交内容:", content.value);
}

// 保存草稿处理
function handleSaveDraft() {
    if (content.value.trim() === '') {
        alert('内容不能为空，无法保存草稿！');
        return;
    }
    // 进行保存草稿逻辑
    console.log("保存草稿:", content.value);
}
</script>

<style scoped>
.writer {
    width: 80%;
    margin: 0 auto;
    /* 确保居中显示 */
    border: 1px solid #ccc;
}

.writer>* {
    margin: 0;
    /* 去掉默认间隙 */
    padding: 0;
    /* 也去掉内边距 */
}

.InputLike {
    width: 100%; /* 占满总宽度 */
    height: 400px; /* 根据需要设置合适的高度 */
    display: flex;
}

.Editable-content {
    width: 100%; /* 占满父容器宽度 */
    height: 100%; /* 占满父容器高度 */
    resize: none; /* 不允许调整大小 */
    padding: 10px; /* 内边距 */
    border: 1px solid #ccc; /* 边框样式 */
}

.preview {
    margin-top: 20px;
    background-color: #ffffff;
}

.publishSettings {
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
}

.publishLabel {
    margin-right: 10px;
    width: 100px;
    white-space: nowrap;
}
</style>
