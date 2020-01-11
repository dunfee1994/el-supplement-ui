<template>
    <div class="el-transfer-panel">
        <p class="el-transfer-panel__header">
            <el-checkbox
                v-model="allChecked"
                @change="handleAllCheckedChange"
                :indeterminate="isIndeterminate"
                :disabled="data.length===0"
            >{{title}}</el-checkbox>
        </p>
        <div class="el-transfer-panel__body">
            <!-- 过滤输入框 -->
            <el-input
                clearable
                size="small"
                v-if="filterable"
                v-model="filterText"
                :placeholder="filterPlaceholder"
                class="el-transfer-panel__filter"
            ></el-input>
            <el-tree
                ref="tree"
                class="el-tree__in-transfer"
                show-checkbox
                :data="data"
                :node-key="nodeKey"
                :props="defaultProps"
                :default-expand-all="openAll"
                :filter-node-method="filterNode"
                :default-checked-keys="defaultChecked"
                @check="handleCheck"
            ></el-tree>
        </div>
    </div>
</template>
<script>
/**
 * @description 左侧面板（树形结构）（支持树形结构的穿梭框）
 */
export default {
    name: "ElSupTransferPanel",
    props: {
        data: {
            type: Array,
            default: []
        },
        title: String,
        filterable: Boolean,
        filterPlaceholder: String,
        nodeKey: String,
        openAll: Boolean,
        defaultProps: Object,
        defaultChecked: Array
    },
    data() {
        return {
            allChecked: false,
            isIndeterminate: false,
            filterText: "",
            checkedNodes: [],
            checkedLeafKeys: []
        };
    },
    mounted() {
        this.emitChange();
    },
    methods: {
        getTreeData() {
            // 获取当前树tree的数据打他
            return this.$refs.tree.data;
        },
        resetCheck() {
            // 将checkbox状态和checkedLeafKeys重置
            this.isIndeterminate = false;
            this.allChecked = false;
            this.checkedLeafKeys = [];
        },
        emitChange() {
            // 提交改变
            let tree = this.$refs["tree"];
            this.$nextTick(() => {
                let checkedNodes = tree.getCheckedNodes(),
                    checkedLeafNodes = tree.getCheckedNodes(true),
                    checkedKeys = tree.getCheckedKeys(),
                    checkedLeafKeys = tree.getCheckedKeys(true);

                this.checkedNodes = checkedNodes;
                this.checkedLeafKeys = checkedLeafKeys;

                let halfCheckedNodes = tree.getHalfCheckedNodes(),
                    halfCheckedKeys = tree.getHalfCheckedKeys();

                let treeObj = {
                    checkedNodes,
                    checkedLeafNodes,
                    checkedKeys,
                    checkedLeafKeys,
                    halfCheckedNodes,
                    halfCheckedKeys
                };

                this.$emit("check-change", treeObj);
            });
        },
        handleAllCheckedChange(val) {
            // 处理总checkbox状态改变事件
            if (this.data.length === 0) {
                return;
            }
            let tree = this.$refs["tree"];
            if (val) {
                tree.setCheckedNodes(this.data);
                this.emitChange();
            } else {
                tree.setCheckedNodes([]);
                this.emitChange();
            }
        },
        handleCheck() {
            // 处理节点被选中事件
            this.emitChange();
        },
        filterNode(value, data) {
            // 过滤节点函数
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        }
    },
    watch: {
        data(val) {
            this.$nextTick(() => {
                let tree = this.$refs["tree"];
                tree.setCheckedKeys(this.checkedLeafKeys);
                this.emitChange();
                if (val.length > 0) {
                    this.isIndeterminate = true;
                    this.allChecked = false;
                    if (tree.getCheckedNodes().length === 0) {
                        this.isIndeterminate = false;
                    }
                } else {
                    this.resetCheck();
                }
            });
        },
        filterText(val) {
            this.$refs.tree.filter(val);
        },
        checkedNodes(val) {
            if (Array.isArray(val) && val.length > 0) {
                let checks = val.filter(item => item["pid"] == 0);
                if (checks.length === this.data.length) {
                    this.isIndeterminate = false;
                    this.allChecked = true;
                } else {
                    this.isIndeterminate = true;
                    this.allChecked = false;
                }
            } else {
                this.resetCheck();
            }
        }
    }
};
</script>