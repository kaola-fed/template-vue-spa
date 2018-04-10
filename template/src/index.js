import Vue from 'vue';
import store from './store';
import Element from 'element-ui';
import App from './App';
import router from './router';
import ajax from '@/utils/ajax';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(Element);

Vue.use(ajax);

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});