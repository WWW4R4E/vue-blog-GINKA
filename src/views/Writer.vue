<template>
    <div class="writer">
        <div class="preview">
            <h2>预览</h2>
            <div class="summary" v-html="renderedsummary"></div>
        </div>
        <ToolBar />
        <div class="InputLike">
            <textarea v-model="summary" class="Editable-summary" placeholder="开始写作"></textarea>
        </div>
        <div class="publishSettings">
            <label class="publishLabel"> 字数：{{ summary.length }} </label>
            <button @click="handleSubmit" class="publishButton">提交</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MarkdownIt from 'markdown-it';
import markdownItHighlightjs from 'markdown-it-highlightjs';
import ToolBar from '@/components/ToolBar.vue';
import axios from 'axios';
import 'highlight.js/styles/github.css'; // 引入高亮主题

// 创建 Markdown-it 实例
const md = new MarkdownIt().use(markdownItHighlightjs);

// 使用 ref 创建响应式数据
const title = ref('');  // 文章标题
const author = ref('');  // 文章作者
const date = ref('');  // 文章日期
const abstractText = ref('');  // 文章节选
const summary = ref('');  // 存储输入的 Markdown 内容
// 计算属性，转换 Markdown 内容为 HTML
const renderedsummary = computed(() => {
    if (!summary.value.trim()) {
        return "<p style='color: rgb(209, 209, 209);'>内容为空，请输入内容。</p>";  // 提示用户输入内容
    }
    try {
        return md.render(summary.value);  // 使用 markdown-it 渲染内容
    } catch (error) {
        console.error("Markdown 转换出错:", error);
        return "<p>内容转换出错，请检查您的输入。</p>";  // 错误处理
    }
});

// 提交处理
const handleSubmit = async () => {
    try {
        date.value = new Date().toLocaleDateString();
        const post = {
            title: title.value,
            author: author.value,
            date: date.value,
            abstractText: abstractText.value,
            summary: summary.value
        };
        console.log('提交成功:', post);
        const response = await axios.post('http://localhost:9999/api/write', post); // 确保此处 URL 正确
        console.log('响应成功:', response.data);
    } catch (error) {
        if (error.response) {
            // 请求发出后，服务器响应了状态码
            console.error('提交失败:', error.response.data);
        } else if (error.request) {
            // 请求发出但未收到响应
            console.error('没有响应:', error.request);
        } else {
            // 其他意外错误
            console.error('错误信息:', error.message);
        }
    }
};


// 内容验证函数
function validatesummary(summary) {
    return summary.trim() !== '';
}

// 保存草稿处理
function handleSaveDraft() {
    if (!validatesummary(summary.value)) {
        alert('内容不能为空，无法保存草稿！');
        return;
    }
    // 进行保存草稿逻辑
    console.log("保存草稿:", summary.value);
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

.summary {
    padding: 20px;
    width: 100%;
    height: 50dvh;
    /* 确保添加分号 */
}

.InputLike {
    width: 100%;
    height: 200px;
}

.Editable-summary {
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
    justify-content: center;

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
