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

### 截图
![截图](https://github.com/dunfee1994/el-supplement-ui/v1/example/img/ElSupTreeTransfer.png)

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
                    label: "总部",
                    children: [
                        {
                            id: 1001,
                            label: "部门一",
                            children: [
                                {
                                    id: 1001001,
                                    label: "小组一",
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
                            label: "部门二",
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
                                    label: "小组一"
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
                                    label: "小组二"
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
| value / v-model | 绑定值 | array | - | - |
| valueType | value的类型。类型为key时，value为右侧树所有节点的nodeKey组成的数组；类型为leafKey时，value为右侧树所有叶子节点的nodeKey组成的数组。 | string | key / leafKey | leafKey |
| data | Transfer的数据源（树形结构) | array | - | [] |
| filterable | 是否过滤节点 | boolean | - | false |
| filterPlaceholder | 搜索框占位符 | string | - | 输入关键字进行过滤 |
| titles | 自定义panel标题 | array | - | ["源列表", "目标列表"] |
| buttonTexts | 自定义按钮文案 | array | - | ["添加", "移除"] |
| nodeKey | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | string | - | id |
| openAll | 是否展开所有节点 | boolean | - | true |
| defaultProps | 树的配置选项 | object | - | { label: "label", children: "children" } |
| leftDefaultChecked | 初始状态下左侧树选中的节点的nodeKey数组 | array | - | [] |
| rightDefaultChecked | 初始状态下右侧树选中的节点的nodeKey数组 | array | - | [] |

### Events
| 事件名称 | 说明 | 回调参数 |
| :---- | :---- | :---- |
| change | 右侧树节点变化时触发 | 当前值、左侧树的数据、右侧树的数据 |
| left-check-change | 左侧树节点checkbox被用户选中 / 取消选中时触发 | 左侧树目前被选中的节点所组成的数组checkedNodes、左侧树目前被选中的叶子节点所组成的数组checkedLeafNodes、左侧树目前被选中的节点的key所组成的数组checkedKeys、左侧树目前被选中的叶子节点的key所组成的数组checkedLeafKeys、左侧树目前半选中的节点所组成的数组halfCheckedNodes、左侧树目前半选中的节点的key所组成的数组halfCheckedKeys |
| right-check-change | 右侧树节点checkbox被用户选中 / 取消选中时触发 | 右侧树目前被选中的节点所组成的数组checkedNodes、右侧树目前被选中的叶子节点所组成的数组checkedLeafNodes、右侧树目前被选中的节点的key所组成的数组checkedKeys、右侧树目前被选中的叶子节点的key所组成的数组checkedLeafKeys、右侧树目前半选中的节点所组成的数组halfCheckedNodes、右侧树目前半选中的节点的key所组成的数组halfCheckedKeys |

## ElSupCheckboxDropdown
ElSupCheckboxDropdown，下拉复选框组件，以下拉的方式显示复选框列表。这个组件主要依赖element-ui的el-button、el-dropdown、el-dropdown-menu、el-dropdown-item、el-checkbox-group、el-checkbox等组件。

### 截图
![截图](https://github.com/dunfee1994/el-supplement-ui/v1/example/img/ElSupCheckboxDropdown.png)

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
                { label: "name", name: "姓名" },
                { label: "age", name: "年龄" },
                { label: "sex", name: "性别" },
                { label: "major", name: "专业" }
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
| value / v-model | 绑定值 | array | - | - |
| buttonText | 自定义按钮文案 | string | - | "列表项" |
| allColumns | 所有的checkbox选项 | array | - | [] |
| maxHeight | 下拉框的最大高度 | string | - | "290px" |


### Events
| 事件名称 | 说明 | 回调参数 |
| :---- | :---- | :---- |
| change | checkbox选中状态改变触发 | 当前值 |