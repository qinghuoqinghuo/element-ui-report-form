import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment';
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'


moment.locale('zh-cn');
Vue.prototype.$moment = moment;


Vue.config.productionTip = false;
Vue.use(ElementUI, {size: 'small'});
Vue.use(dataV)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
