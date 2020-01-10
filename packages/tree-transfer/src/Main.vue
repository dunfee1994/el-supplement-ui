<template>
    <div class="el-transfer el-sup-tree-transfer">
        <transfer-panel
            ref="leftPanel"
            :data="leftData"
            :title="titles[0]"
            :filterable="filterable"
            :filterPlaceholder="filterPlaceholder"
            :nodeKey="nodeKey"
            :openAll="openAll"
            :defaultProps="defaultProps"
            :defaultChecked="leftDefaultChecked"
            @check-change="hanldeLeftCheckChange"
        />
        <!-- 开始：穿梭框中间的控件区域（操控按钮） -->
        <div class="el-transfer__buttons">
            <!-- 按钮一 -->
            <el-button
                type="primary"
                @click.native="addToRight"
                :disabled="leftCheckedLeafKeys.length===0"
                :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
            >
                <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
                <i class="el-icon-arrow-right"></i>
            </el-button>
            <!-- 按钮二 -->
            <el-button
                type="danger"
                @click.native="addToLeft"
                :disabled="rightCheckedLeafKeys.length===0"
                :class="['el-transfer__button is-remove-btn', hasButtonTexts ? 'is-with-texts' : '']"
            >
                <i class="el-icon-arrow-left"></i>
                <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
            </el-button>
        </div>
        <!-- 结束：穿梭框中间的控件区域（操控按钮） -->
        <transfer-panel
            ref="rightPanel"
            :data="rightData"
            :title="titles[1]"
            :filterable="filterable"
            :filterPlaceholder="filterPlaceholder"
            :nodeKey="nodeKey"
            :openAll="openAll"
            :defaultProps="defaultProps"
            :defaultChecked="rightDefaultChecked"
            @check-change="hanldeRightCheckChange"
        />
    </div>
</template>
<script>
/**
 * @description 支持树形结构的穿梭框
 */
import TransferPanel from "./TransferPanel";
export default {
    name: "ElSupTreeTransfer",
    components: { TransferPanel },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        value: {
            type: Array,
            default: () => []
        },
        titles: {
            type: Array,
            default: () => ["源列表", "目标列表"]
        },
        buttonTexts: {
            type: Array,
            default: () => ["添加", "移除"]
        },
        filterable: {
            type: Boolean,
            default: () => false
        },
        filterPlaceholder: {
            type: String,
            default: () => "输入关键字进行过滤"
        },
        openAll: {
            type: Boolean,
            default: () => true
        },
        defaultProps: {
            type: Object,
            default: () => {
                return { label: "label", children: "children" };
            }
        },
        nodeKey: {
            type: String,
            default: () => "id"
        },
        leftDefaultChecked: {
            type: Array,
            default: () => []
        },
        rightDefaultChecked: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            leftCheckedLeafKeys: [],
            rightCheckedLeafKeys: []
        };
    },
    methods: {
        addToRight() {
            // 将左侧panel选中内容推到右边panel
            let value = JSON.parse(JSON.stringify(this.value)),
                leftCheckedLeafKeys = this.leftCheckedLeafKeys;
            value = [...value, ...leftCheckedLeafKeys];
            this.$emit("input", value);
            this.leftCheckedLeafKeys = [];

            let leftPanel = this.$refs["leftPanel"],
                rightPanel = this.$refs["rightPanel"];

            if (leftPanel && typeof leftPanel.resetCheck == "function") {
                leftPanel.resetCheck();
            }

            this.$nextTick(() => {
                this.$emit(
                    "change",
                    value,
                    leftPanel.getTreeData(),
                    rightPanel.getTreeData()
                );
            });
        },
        addToLeft() {
            // 将左侧panel选中内容推到左侧panel
            let value = JSON.parse(JSON.stringify(this.value)),
                rightCheckedLeafKeys = this.rightCheckedLeafKeys;
            rightCheckedLeafKeys.map(item => {
                let index;
                if ((index = value.indexOf(item)) > -1) {
                    value.splice(index, 1);
                }
            });
            this.$emit("input", value);
            this.rightCheckedLeafKeys = [];

            let leftPanel = this.$refs["leftPanel"],
                rightPanel = this.$refs["rightPanel"];

            if (rightPanel && typeof rightPanel.resetCheck == "function") {
                rightPanel.resetCheck();
            }

            this.$nextTick(() => {
                this.$emit(
                    "change",
                    value,
                    leftPanel.getTreeData(),
                    rightPanel.getTreeData()
                );
            });
        },
        hanldeLeftCheckChange(checkedLeafNodes, checkedLeafKeys) {
            // 处理左侧panel选中改变
            this.leftCheckedLeafKeys = checkedLeafKeys;
            this.$emit("left-check-change", checkedLeafNodes, checkedLeafKeys);
        },
        hanldeRightCheckChange(checkedLeafNodes, checkedLeafKeys) {
            // 处理右侧panel选中改变
            this.rightCheckedLeafKeys = checkedLeafKeys;
            this.$emit("right-check-change", checkedLeafNodes, checkedLeafKeys);
        },
        frmtData(data) {
            // 格式化数据（添加是否是叶子节点的表示isLeaf，是为true，不是为false）
            var i = 0,
                len = data.length;
            for (; i < len; i++) {
                if (
                    Array.isArray(data[i].children) &&
                    data[i].children.length > 0
                ) {
                    data[i]["isLeaf"] = false;
                    this.frmtData(data[i].children);
                } else {
                    data[i]["isLeaf"] = true;
                }
            }
        }
    },
    computed: {
        hasButtonTexts() {
            // 是否设定按钮文本
            return this.buttonTexts.length === 2;
        },
        treeData() {
            let data = JSON.parse(JSON.stringify(this.data));
            if (data.lenth === 0) {
                return [];
            }
            if (data[0]) {
                data[0]["pid"] = 0;
            }
            this.frmtData(data);
            return data;
        },
        leftData() {
            // 左侧panel的数据data
            let data = JSON.parse(JSON.stringify(this.treeData)),
                value = this.value;
            if (data.length === 0) {
                return [];
            }

            function filterData(data, value) {
                var i = 0,
                    len = data.length;
                for (; i < len; i++) {
                    if (
                        Array.isArray(data[i].children) &&
                        data[i].children.length > 0
                    ) {
                        filterData(data[i].children, value);
                        data[i].children = data[i].children.filter(item => {
                            return item.isLeaf
                                ? value.indexOf(item.id) < 0
                                : item.children.length > 0;
                        });
                    }
                }
            }
            filterData(data, value);
            if (data[0].children.length === 0) {
                return [];
            }
            return data;
        },
        rightData() {
            // 右侧panel的数据data
            let data = JSON.parse(JSON.stringify(this.treeData)),
                value = this.value;
            if (data.length === 0) {
                return [];
            }

            function filterData(data, value) {
                var i = 0,
                    len = data.length;
                for (; i < len; i++) {
                    if (
                        Array.isArray(data[i].children) &&
                        data[i].children.length > 0
                    ) {
                        filterData(data[i].children, value);
                        data[i].children = data[i].children.filter(item => {
                            return item.isLeaf
                                ? value.indexOf(item.id) > -1
                                : item.children.length > 0;
                        });
                    }
                }
            }
            filterData(data, value);
            if (data[0].children.length === 0) {
                return [];
            }
            return data;
        }
    }
};
</script>