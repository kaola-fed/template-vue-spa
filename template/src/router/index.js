import Vue from 'vue';
import Router from 'vue-router';
import view from './helpers/view';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/demo',
            name: 'Demo',
            component: view('demo')
        },
        {
            path: '/404',
            name: '404',
            component: view('abnormal/404')
        }
    ]
})
