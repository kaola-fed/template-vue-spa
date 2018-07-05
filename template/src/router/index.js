import Vue from 'vue';
import Router from 'vue-router';

import demo1 from './demo1';
import demo2 from './demo2';
import exception from './exception';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: { name: 'Demo1' }
        },
        ...demo1,
        ...demo2,
        ...exception
    ]
});

router.beforeEach((to, from, next) => {
    console.log(`you are going to`, to);
    next();
});

export default router;
