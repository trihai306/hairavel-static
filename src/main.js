import * as Vue from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'
import NProgress from 'nprogress'
import CScrollbar from 'c-scrollbar'

import '@arco-design/web-vue/dist/arco.css'
import 'nprogress/nprogress.css'
import './common.css'

import draggable from 'vuedraggable'
import JsonViewer from 'vue-json-viewer'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import VueApexCharts from 'vue3-apexcharts'
import './utils/global'
// route
import NodeCreate from './components/route/Create.js'
import Route from './components/route/Route.vue'
import DataLayout from './components/route/Layout'
import DataDialog from './components/route/Dialog'
// public
import RichText from './components/common/RichText.vue'
import Icon from './components/common/Icon.vue'
import ImagePreview from './components/common/ImagePreview'
// list
import DataTable from './components/table/DataTable'
import Tree from './components/table/Tree'
// form
import FormSubmit from './components/form/Form.vue'
import DataSelect from './components/form/Select'
import DataTreeSelect from './components/form/TreeSelect'
import DataCascader from './components/form/Cascader'
import DataFile from './components/form/File'
import DataFiles from './components/form/Files'
import DataImages from './components/form/Images'
import DataEditor from './components/form/Editor'
import DataChoice from './components/form/Choice'
import DataColor from './components/form/Color'
import DynamicData from './components/form/DynamicData'
import DataMap from './components/form/Map'

import './utils/window'

import { setup } from 'twind/shim'

import color from '../color'
import Spec from "./components/form/Spec";

const colors = Object.fromEntries(Object.keys(color.light).map(key => {
  return [key, Object.fromEntries(color.light[key].map((val, index) => {
    return [index === 0 ? 50 : index * 100, val]
  }))]
}))

setup({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blackgray': {
          1: '#373739',
          2: '#313132',
          3: '#2a2a2b',
          4: '#232324',
          5: '#17171a',
        },
        ...colors,
      }
    },
  },
})


// 注册到全局
window.Vue = Vue
window.NProgress = NProgress

// 实例注册到全局
const app = window.vueApp = Vue.createApp(App)

app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(CScrollbar)

window.NProgress.configure({
  easing: 'ease',
    speed: 500, // Increment the speed of the progress bar
    showSpinner: true, // whether to show loading ico
    trickleSpeed: 200, // auto increment interval
    minimum: 0.3 // minimum percentage at initialization
});

app.use(VueApexCharts)

// link component
app.component('route', Route)
// rich text display component
app.component('rich-text', RichText)
// json node create component
app.component('node-create', NodeCreate)
// icon component
app.component('icon', Icon)
// form submit component
app.component('app-form', FormSubmit)
// form display component
app.component('app-table', DataTable)
// tree list
app.component('widget-tree', Tree)
// Selector
app.component('app-select', DataSelect)
// tree selector
app.component('app-tree-select', DataTreeSelect)
// cascade selector
app.component('app-cascader', DataCascader)
// File Upload
app.component('app-file', DataFile)
app.component('app-files', DataFiles)
app.component('app-images', DataImages)
// editor
app.component('app-editor', DataEditor)
// dynamic selector
app.component('app-choice', DataChoice)
// color picker
app.component('app-color', DataColor)
// map selector
app.component('app-map', DataMap)

// dynamic data
app.component('app-dynamic-data', DynamicData)
app.component('app-layout', DataLayout)
app.component('app-dialog', DataDialog)
app.component('app-image-preview', ImagePreview)

// Specification
app.component('app-spec', Spec)

// drag to sort
app.component('draggable', draggable)

// json viewer
app.component('json-viewer', JsonViewer)

app.mount('#hairavel-static')

