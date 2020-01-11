# el-supplement-ui
el-supplement-ui是一个基于vue和element-ui的UI组件，其中包含ElSupTreeTransfer（支持树形结构的穿梭框）、CheckboxDropDown（下拉复选框）。本组件需在引入element-ui之后方可使用，所以，在使用之前请确认是否已经引入element-ui。

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
    CheckboxDropDown,
    TreeTransfer
} from 'el-supplement-ui'
Vue.component(CheckboxDropDown.name, CheckboxDropDown)
Vue.component(TreeTransfer.name, TreeTransfer)

// 引入element-ui index.css
import 'element-ui/lib/theme-chalk/index.css';
// 引入el-supplement-ui index.scss
import 'el-supplement-ui/lib/index.scss';
```

## ElSupTreeTransfer
ElSupTreeTransfer，这个组件的功能类似于element-ui的transfer组件，但其是一个支持树形结构的穿梭框组件。这个组件主要依赖element-ui的el-checkbox、el-input、el-button、el-tree等组件和el-transfer组件的样式.

### Use
```javascript
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
            leftDefaultChecked: [1001001001],
            rightDefaultChecked: [1002002001]
        };
    },
    methods: {
        handleChange1(value, leftTreeData, rightTreeData) {
            console.log("dataType: key", value, "top");
        },
        handleChange2(value, leftTreeData, rightTreeData) {
            console.log("dataType: leafKey", value, "bottom");
        }
    }
}
```

## CheckboxDropDown
CheckboxDropDown，下拉复选框组件，以下拉的方式显示复选框列表。这个组件主要依赖element-ui的el-button、el-dropdown、el-dropdown-menu、el-dropdown-item、el-checkbox-group、el-checkbox等组件。

### Use
```javascript

```