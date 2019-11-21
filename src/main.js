import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './registerServiceWorker'
import '@/assets/js/rem'
import Router from 'vue-router'
import '@/assets/css/iconfont/iconfont.css'

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

Vue.config.productionTip = false;
Vue.use(Mint);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
