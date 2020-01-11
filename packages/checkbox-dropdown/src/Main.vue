<template>
    <el-dropdown :hide-on-click="false">
        <el-button>
            {{buttonText}}
            <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu
            slot="dropdown"
            class="el-sup-dropdown-checkbox"
            :style="`max-height:${maxHeight}`"
        >
            <el-checkbox-group v-model="checkedColumns" @change="handleChange">
                <el-dropdown-item v-for="(item,index) in allColumns" :key="index">
                    <el-checkbox :label="item.label">{{item.name}}</el-checkbox>
                </el-dropdown-item>
            </el-checkbox-group>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
/**
 * @description 下拉复选框
 * @author dunfee
 * @date 2020/01/10
 */
export default {
    name: "ElSupCheckboxDropDown",
    props: {
        maxHeight: {
            type: String,
            default: () => "290px"
        },
        buttonText: {
            type: String,
            default: () => "列表项"
        },
        value: Array,
        allColumns: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            checkedColumns: []
        };
    },
    created() {
        this.checkedColumns = JSON.parse(JSON.stringify(this.value));
    },
    methods: {
        handleChange(val) {
            // 处理change事件
            this.$emit("input", val);
            this.$emit("change", val);
        }
    }
};
</script>