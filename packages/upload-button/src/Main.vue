<template>
    <el-upload
        ref="elUpload"
        action=""
        :limit="1"
        :accept="accept"
        :on-change="handleOnChange"
        :http-request="function() {}"
        :auto-upload="false"
        :show-file-list="false"
        class="el-sup-upload-button"
    >
        <el-button :type="buttonType">{{buttonText}}</el-button>
    </el-upload>
</template>
<script>
/**
 * @description 上传按钮（单文件上传，不呈现上传文件列表，将el-upload组件原有的上传文件行为屏蔽掉了，上传文件的处理可以放到本组件on-change事件的处理程序当中）
 * @param {String} accept 可接受的文件格式，默认值“.xls, .xlsx”
 * @param {String} buttonText 自定义按钮文案，默认值为“导入”
 * @param {String} buttonType 按钮type，默认值为“”，可选值为 primary / success / warning / danger / info / text
 * @event on-change 文件状态改变事件，此处事件处理可用于文件上传处理，回调参数为：需要上传的文件file
 */
export default {
    name: "ElSupUploadButton",
    props: {
        accept: {
            type: String | Array,
            default: () => ".xls, .xlsx"
        },
        buttonText: {
            type: String,
            default: () => "导入"
        },
        buttonType: {
            type: String,
            default: () => ""
        }
    },
    data() {
        return {};
    },
    methods: {
        handleOnChange(e) {
            this.$emit("on-change", e.raw);
            this.$refs["elUpload"].clearFiles();
        }
    }
};
</script>