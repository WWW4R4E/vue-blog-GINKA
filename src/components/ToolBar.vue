<template>
    <div class="toolbar">
        <div v-for="(section, sectionIndex) in toolbarSections" :key="sectionIndex" class="toolbar-section">
            <button class="toolbar-button" v-for="(button, buttonIndex) in section.buttons" :key="buttonIndex"
                :aria-label="button.label" type="button" :disabled="button.disabled" @click="handleButtonClick(button)">
                <span>
                    <svg v-html="button.icon" width="24" height="24" fill="currentColor"></svg>
                </span>
                <span class="toolbar-label">{{ button.label }}</span>
            </button>
            <hr v-if="section.divider" class="toolbar-divider" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toolbarSections: [
                {
                    buttons: this.getToolbarButtons1(),  // 直接调用方法获取按钮
                    divider: true,
                },
                {
                    buttons: this.getToolbarButtons2(),
                    divider: false,
                },
                {
                    buttons: this.getToolbarButtons3(),
                },
            ],
        };
    },
    methods: {
        getToolbarButtons1() {
            return [
                {
                    label: '撤销',
                    icon: '<path d="M7.2 4.525a.875.875 0 1 0-1.4-1.05l-2.1 2.8a2.875 2.875 0 0 0 0 3.45l2.1 2.8a.875.875 0 0 0 1.4-1.05l-1.95-2.6h9.25a5.125 5.125 0 1 1 0 10.25h-6a.875.875 0 1 0 0 1.75h6a6.875 6.875 0 0 0 0-13.75H5.25l1.95-2.6Z" />',
                    disabled: true,
                    onClick: () => { this.executeUndo(); }
                },
                {
                    label: '重做',
                    icon: '<path d="M17.3 4.525a.875.875 0 0 1 1.4-1.05l2.1 2.8a2.875 2.875 0 0 1 0 3.45l-2.1 2.8a.875.875 0 0 1-1.4-1.05l1.95-2.6H10a5.125 5.125 0 1 0 0 10.25h6a.875.875 0 0 1 0 1.75h-6a6.875 6.875 0 1 1 0-13.75h9.25l-1.95-2.6Z" />',
                    disabled: true,
                    onClick: () => { this.executeRedo(); }
                },
                {
                    label: '清除格式',
                    icon: '<path fill-rule="evenodd" d="M6.956 17.185c.435.365.985.565 1.552.565h5.245c.572 0 1.114-.253 1.482-.69l.213-.255 4.715-5.62a2.415 2.415 0 0 0-.298-3.401l-5.11-4.288a2.415 2.415 0 0 0-3.402.298l-6.858 8.174a2.415 2.415 0 0 0 .298 3.402l2.122 1.78.041.035Zm1.552-.935a.915.915 0 0 1-.588-.214l-.041-.034-2.122-1.781a.915.915 0 0 1-.113-1.29l6.859-8.173a.915.915 0 0 1 1.289-.113l5.11 4.288a.915.915 0 0 1 .112 1.289l-4.715 5.619-.213.254a.434.434 0 0 1-.333.155H8.508ZM17 21.75a.75.75 0 1 0 0-1.5H5a.75.75 0 0 0 0 1.5h12Z" clip-rule="evenodd"></path>',
                    disabled: false,
                    onClick: () => { this.clearFormatting(); }
                }
            ];
        },
        getToolbarButtons2() {
            return [
                {
                    label: '加粗',
                    icon: '<path fill-rule="evenodd" d="M5.324 3.987a.75.75 0 0 1 .75-.75h5.28c3.393 0 5.489 2.296 5.489 4.754 0 1.087-.236 2.386-1.024 3.431-.195.26-.42.496-.675.707.67.262 1.235.638 1.691 1.104.927.945 1.339 2.194 1.339 3.421a4.626 4.626 0 0 1-1.499 3.442c-1.016.933-2.504 1.493-4.423 1.493H6.074a.75.75 0 0 1-.75-.75V3.987Zm9.298 6.532c-.492.652-1.343 1.186-2.885 1.186H6.824V4.737h4.53c2.665 0 3.989 1.722 3.989 3.254 0 .906-.202 1.84-.721 2.528Zm-7.798 9.57v-6.884h5.877c1.486 0 2.46.462 3.063 1.078.61.622.91 1.473.91 2.371 0 .868-.33 1.709-1.014 2.337-.683.628-1.781 1.098-3.408 1.098H6.824Z" clip-rule="evenodd"/path>',
                    disabled: false,
                    onClick: () => { this.boldText(); }
                },
                {
                    label: '斜体',
                    icon: '<path d="M17.75 4a.75.75 0 0 1-.75.75h-3.283l-2.818 15.5H14a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h3.374l2.818-15.5H9a.75.75 0 1 1 0-1.5h8a.75.75 0 0 1 .75.75Z" />',
                    disabled: false,
                    onClick: () => { this.italicText(); }
                },
                {
                    label: '下划线',
                    icon: '<path d="M5 20h14v2H5v-2zm7-18h2v12h-2V2z" />',
                    disabled: false,
                    onClick: () => { this.underlineText(); }
                }
            ];
        },
        getToolbarButtons3() {
            return [
                {
                    label: '注释',
                    icon: '<path d="M2.25 18.835a2.415 2.415 0 0 0 2.415 2.415h2.104a.75.75 0 0 0 0-1.5H4.665a.915.915 0 0 1-.915-.915V5.665c0-.505.41-.915.915-.915h2.104a.75.75 0 1 0 0-1.5H4.665A2.415 2.415 0 0 0 2.25 5.665v13.17Zm14.981.915a.75.75 0 0 0 0 1.5h2.104a2.415 2.415 0 0 0 2.415-2.415V5.665a2.415 2.415 0 0 0-2.415-2.415h-2.104a.75.75 0 0 0 0 1.5h2.104c.505 0 .915.41.915.915v13.17c0 .505-.41.915-.915.915h-2.104Zm-6.731-12a.75.75 0 0 0 0 1.5h1.25v7.25a.75.75 0 0 0 1.5 0V9c0-.69-.56-1.25-1.25-1.25h-1.5Z" />',
                },
                {
                    label: '插入图片',
                    icon: '<path d="M2.625 6.5A3.875 3.875 0 0 1 6.5 2.625h11A3.875 3.875 0 0 1 21.375 6.5v11a3.875 3.875 0 0 1-3.875 3.875h-11A3.875 3.875 0 0 1 2.625 17.5v-11ZM6.5 4.375A2.125 2.125 0 0 0 4.375 6.5v8.223l1.928-1.23a3.875 3.875 0 0 1 3.757-.23l.744.357c.648.31 1.409.272 2.023-.102l3.718-2.265a.875.875 0 0 1 .91 1.494l-3.718 2.265a3.875 3.875 0 0 1-3.689.186l-.743-.356a2.125 2.125 0 0 0-2.06.126l-2.774 1.77a.886.886 0 0 1-.096.053v.709c0 1.174.951 2.125 2.125 2.125h11a2.125 2.125 0 0 0 2.125-2.125v-11A2.125 2.125 0 0 0 17.5 4.375h-11Z" />',
                }
            ];
        },
        handleButtonClick(button) {
            try {
                button.onClick();
            } catch (error) {
                console.error('Button click error:', error);
                alert('执行操作时发生错误，请重试。');
            }
        },
        executeUndo() {
            // 撤销逻辑
        },
        executeRedo() {
            // 重做逻辑
        },
        clearFormatting() {
            // 清除格式逻辑
        },
        boldText() {
            // 加粗逻辑
        },
        italicText() {
            // 斜体逻辑
        },
        underlineText() {
            // 下划线逻辑
        },
    },
};
</script>

<style scoped>
.toolbar {
    display: flex;
    width: 100%; /* 确保宽度为 100% */
}

.toolbar-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
    width: 40px;
    color: #000;
    border-radius: 0;
    background-color: #fff;
}

.toolbar-divider {
    height: 60px;
    width: 4px;
    background-color: black;
}

.toolbar-section {
    display: flex;
    align-items: center;
}

.toolbar-label {
    width: auto;
    font-size: 10px;
    white-space: nowrap;
}
</style>
