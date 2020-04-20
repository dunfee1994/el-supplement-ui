<template>
    <el-button class="el-sup-upload-button">
        {{text}}
        <input
            @change="handleChange"
            :accept="Array.isArray(accept) ? accept.join(', ') : accept"
            type="file"
            class="el-input__inner"
        />
    </el-button>
</template>
<script>
/**
 * @description 上传按钮
 * @param {String} text 自定义文案
 * @param {String} accept 可接受的文件格式
 */
export default {
    name: "ElSupUploadButton",
    props: {
        text: {
            type: String,
            default: () => "导入"
        },
        accept: {
            type: String | Array,
            default: () => ".xls, .xlsx"
        }
    },
    data() {
        return {};
    },
    methods: {
        handleChange(e) {
            let file = e.target.files[0]; // file文件
            this.$emit("after-click", file);
        }
    }
};
</script>