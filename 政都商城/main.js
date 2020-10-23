import Vue from 'vue'
import App from './App'
import store from "./store"
Vue.prototype.$store = store
Vue.config.productionTip = false
// 引入全局组件
import crossLine from '@/components/crossLine/crossLine.vue'
import loading from '@/components/loading/loading.vue'
// 分割线
Vue.component('CrossLine',crossLine)
Vue.component('Loading',loading)
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
