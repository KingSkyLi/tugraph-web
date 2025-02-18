import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import Contextmenu from 'vue-contextmenujs'
import Interval from './interval/interval'
import VueI18n from 'vue-i18n'
import {
    Input,
    Button,
    Message,
    Collapse,
    CollapseItem,
    Select,
    Option,
    OptionGroup,
    Upload,
    Dialog,
    Table,
    TableColumn,
    MessageBox,
    InputNumber,
    Tabs,
    TabPane,
    Tree,
    Switch,
    Form,
    FormItem,
    Progress,
    Radio,
    RadioGroup,
    Pagination,
    DatePicker,
    Drawer,
    Tooltip,
    Step,
    Steps,
    Popover,
    Tag,
    ColorPicker,
    Slider,
    Checkbox,
    CheckboxGroup
} from 'element-ui'
Vue.config.productionTip = false
Vue.use(Contextmenu)
Vue.use(VueParticles)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(InputNumber)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tree)
Vue.use(Switch)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Pagination)
Vue.use(DatePicker)
Vue.use(Drawer)
Vue.use(Tooltip)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Popover)
Vue.use(Tag)
Vue.use(ColorPicker)
Vue.use(Slider)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$cyEvents = {}

Vue.config.devtools = true
Vue.prototype.$interval = new Interval()
Vue.prototype.$interval.start()

import enLang from 'element-ui/lib/locale/lang/en'
import zhLang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: store.state.language,
    messages: {
        en: { ...enLang },
        zh: { ...zhLang }
    }
})
locale.i18n((key, value) => i18n.t(key, value))
new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App)
}).$mount('#app')
