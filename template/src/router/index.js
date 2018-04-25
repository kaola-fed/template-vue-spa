import Vue from 'vue';
import Router from 'vue-router';

import demo from './demo';
import exception from './exception';

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    routes: [
        ...demo,
        ...exception
    ]
});

router.beforeEach((to, from, next) => {
    console.log(`you are going to`, to);
    next();
});

export default router;
