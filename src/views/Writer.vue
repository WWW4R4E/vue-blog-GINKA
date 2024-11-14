<template>
    <div class="writer">
        <div class="preview">
            <h2>预览</h2>
            <div class="content" v-html="renderedContent"></div>
        </div>
        <ToolBar />
        <div class="InputLike">
            <textarea v-model="content" class="Editable-content" placeholder="开始写作"></textarea>
        </div>
        <div class="publishSettings">
            <label class="publishLabel"> 字数：{{ content.length }} </label>
            <button @click="handleSubmit" class="publishButton">提交</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MarkdownIt from 'markdown-it';
import markdownItHighlightjs from 'markdown-it-highlightjs';
import ToolBar from '@/components/ToolBar.vue';
import 'highlight.js/styles/github.css'; // 引入高亮主题

// 创建 Markdown-it 实例
const md = new MarkdownIt().use(markdownItHighlightjs);

// 使用 ref 创建响应式数据
const content = ref('');  // 存储输入的 Markdown 内容

// 计算属性，转换 Markdown 内容为 HTML
const renderedContent = computed(() => {
    if (!content.value.trim()) {
        return "<p style='color: rgb(209, 209, 209);'>内容为空，请输入内容。</p>";  // 提示用户输入内容
    }
    try {
        return md.render(content.value);  // 使用 markdown-it 渲染内容
    } catch (error) {
        console.error("Markdown 转换出错:", error);
        return "<p>内容转换出错，请检查您的输入。</p>";  // 错误处理
    }
});

// 提交处理
function handleSubmit() {
    if (!validateContent(content.value)) {
        alert('内容不能为空！');
        return;
    }
    // 进行提交处理，如发送到服务器等
    console.log("提交内容:", content.value);
}

// 内容验证函数
function validateContent(content) {
    return content.trim() !== '';
}

// 保存草稿处理
function handleSaveDraft() {
    if (!validateContent(content.value)) {
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
}

h2 {
    color: #fff;
    background-color: #1f283e;
    padding: 2px;
    margin: 0;
    text-align: center;
}

.content {
    padding: 20px;
    width: 100%;
    height: 50dvh; /* 确保添加分号 */
}

.InputLike {
    width: 100%;
    height: 200px;
}

.Editable-content {
    width: 100%;
    height: 100%;
    resize: none;
    padding: 10px;
    border: 0;
    /* background-color: #000; */
    color-scheme: dark !important;
}

textarea:focus {
    outline: none;
}

.preview {
    background-color: #181a1b;
}

.publishSettings {
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    background-color: #1b1e1f;
    height: 40px;
}

.publishLabel {
    height: 100%;
    width: 100px;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
}

.publishButton {
    border-radius: 0;
    color: lightslategrey;
    background-color: #1f283e;
} 
</style>
