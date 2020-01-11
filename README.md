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
```