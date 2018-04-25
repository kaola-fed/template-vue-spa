import Vue from 'vue';
import store from './store';
import Element from 'element-ui';
import App from './App';
import router from './router';
import ajax from '@/common/utils/ajax';

import 'element-kaola/index.css';
import '@/style/index.css';

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