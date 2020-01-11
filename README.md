# el-supplement-ui
el-supplement-ui是一个基于vue和element-ui的UI组件，其中包含ElSupTreeTransfer（支持树形结构的穿梭框）、ElSupCheckboxDropdown（下拉复选框）。本组件需在引入element-ui之后方可使用，所以，在使用之前请确认是否已经引入element-ui。

## Install
```shell
npm i el-supplement-ui --save
```
or
```shell
npm i el-supplement-ui -S
```

## Quick Start
```javascript
import Vue from 'vue'
import Element from 'element-ui'

Vue.use(Element)

// example one
import ElSupplement from 'el-supplement-ui'
Vue.use(ElSupplement)

// example two
import {
    ElSupCheckboxDropdown,
    ElSupTreeTransfer
} from 'el-supplement-ui'
Vue.component(ElSupCheckboxDropdown.name, ElSupCheckboxDropdown)
Vue.component(ElSupTreeTransfer.name, ElSupTreeTransfer)

// 引入element-ui index.css
import 'element-ui/lib/theme-chalk/index.css';
// 引入el-supplement-ui index.scss
import 'el-supplement-ui/lib/index.scss';
```

## ElSupTreeTransfer
ElSupTreeTransfer，这个组件的功能类似于element-ui的transfer组件，但其是一个支持树形结构的穿梭框组件。这个组件主要依赖element-ui的el-checkbox、el-input、el-button、el-tree等组件和el-transfer组件的样式.

### Use
```html
<template>
    <el-container>
        <section style="margin: 2vh 2vw;">
            <el-sup-tree-transfer
                v-model="value1"
                filterable
                open-all
                data-type="key"
                :data="data"
                :left-default-checked="leftDefaultChecked"
                :right-default-checked="rightDefaultChecked"
                @change="handleChange1"
            ></el-sup-tree-transfer>
        </section>
        <section style="margin: 2vh 2vw;">
            <el-sup-tree-transfer
                v-model="value2"
                filterable
                open-all
                data-type="leafKey"
                :data="data"
                :left-default-checked="leftDefaultChecked"
                :right-default-checked="rightDefaultChecked"
                @change="handleChange2"
            ></el-sup-tree-transfer>
        </section>
    </el-container>
</template>
```
```javascript
import { ElSupTreeTransfer } from 'el-supplement-ui'
export default {
    name: "demo",
    components: {
        ElSupTreeTransfer
    },
    data() {
        return {
            data: [
                {
                    id: 1,
                    label: "大核心网",
                    children: [
                        {
                            id: 1001,
                            label: "核心网运行部",
                            children: [
                                {
                                    id: 1001001,
                                    label: "华为专业组",
                                    children: [
                                        {
                                            id: 1001001001,
                                            label: "李四1"
                                        },
                                        {
                                            id: 1001001002,
                                            label: "李四2"
                                        },
                                        {
                                            id: 1001001003,
                                            label: "李四3"
                                        },
                                        {
                                            id: 1001001004,
                                            label: "李四4"
                                        }
                                    ]
                                },
                                {
                                    id: 1001002,
                                    label: "构肆"
                                }
                            ]
                        },
                        {
                            id: 1002,
                            label: "互联网运行部",
                            children: [
                                {
                                    id: 1002001,
                                    children: [
                                        {
                                            id: 1002001001,
                                            label: "王五1"
                                        },
                                        {
                                            id: 1002001002,
                                            label: "王五2"
                                        },
                                        {
                                            id: 1002001003,
                                            label: "王五3"
                                        }
                                    ],
                                    label: "EPC组"
                                },
                                {
                                    id: 1002002,
                                    children: [
                                        {
                                            id: 1002002001,
                                            label: "张三1"
                                        },
                                        {
                                            id: 1002002002,
                                            label: "张三2"
                                        },
                                        {
                                            id: 1002002003,
                                            label: "张三3"
                                        },
                                        {
                                            id: 1002002004,
                                            label: "张三4"
                                        }
                                    ],
                                    label: "性能组"
                                }
                            ]
                        },
                        {
                            id: 1003,
                            label: "狐鸣"
                        }
                    ]
                }
            ],
            value1: [1, 1001, 1001001, 1001001001],
            value2: [1001001001],
            leftDefaultChecked: [1002002001],
            rightDefaultChecked: [1001001001]
        };
    },
    methods: {
        handleChange1(value, leftTreeData, rightTreeData) {
            console.log("valueType: key", value, "top");
        },
        handleChange2(value, leftTreeData, rightTreeData) {
            console.log("valueType: leafKey", value, "bottom");
        }
    }
}
```

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| value / v-model | 绑定值 | array | - | [] |
| valueType | value的类型。类型为key时，value为右侧树所有节点的nodeKey组成的数组；类型为leafKey时，value为右侧树所有叶子节点的nodeKey组成的数组。 | string | key / leafKey | leafKey |
| data | Transfer的数据源（树形结构) | array | - | [] |
| filterable | 是否过滤节点 | boolean | - | false |
| filterPlaceholder | 搜索框占位符 | string | - | 输入关键字进行过滤 |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

### Events
| 事件名称 | 说明 | 回调参数 |
| :---- | :---- | :---- |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

## ElSupCheckboxDropdown
ElSupCheckboxDropdown，下拉复选框组件，以下拉的方式显示复选框列表。这个组件主要依赖element-ui的el-button、el-dropdown、el-dropdown-menu、el-dropdown-item、el-checkbox-group、el-checkbox等组件。

### Use
```html
<template>
    <el-container>
        <el-sup-checkbox-dropdown
            v-model="checkedColumns"
            buttonText="列表项"
            :allColumns="allColumns"
            @change="changeColumns"
        />
    </el-container>
</template>
```
```javascript
import { ElSupCheckboxDropdown } from 'el-supplement-ui'
export default {
    name: "demo",
    components: {
        ElSupCheckboxDropdown
    },
    data() {
        return {
            checkedColumns: [], // 选中值（表格需展示的column）
            allColumns: [
                { label: "realName", name: "姓名" },
                { label: "departmentName", name: "部门" },
                { label: "majorName", name: "专业组" },
                { label: "certificate", name: "认证数" },
                { label: "activity1", name: "授课量" },
                { label: "activity2", name: "参加培训量" },
                { label: "weekkly", name: "周报" },
                { label: "order", name: "工单处理量" },
                { label: "project", name: "工程割接量" },
                { label: "log_operation", name: "系统使用量" },
                { label: "value_week", name: "值周量" },
                { label: "demandSubmission", name: "需求提交量" },
                { label: "service_count", name: "服务开发量" },
                { label: "deployed_service", name: "服务发布量" }
            ] // 表格全部column
        }
    },
    methods: {
        changeColumns(columns) {
            console.log(columns);
        }
    }
}
```

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |


### Events
| 事件名称 | 说明 | 回调参数 |
| :---- | :---- | :---- |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |