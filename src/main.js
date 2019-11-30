import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './registerServiceWorker'
import '@/assets/js/rem'
import Router from 'vue-router'
import '@/assets/css/iconfont/iconfont.css'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import Mock from './mock'
/*解决一直点击同一个跳转链接报错问题*/
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

const dataFormat = (data, state = 200, msg = "接口获取成功") => {return {state, msg, data}};

/*mock数据*/
const json = (type) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataFormat(Mock[type]))
        }, 300)
    })
};
Vue.prototype.json = json;
Vue.config.productionTip = false;
Vue.use(Mint);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
