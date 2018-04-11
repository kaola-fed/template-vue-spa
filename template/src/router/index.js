import Vue from 'vue';
import Router from 'vue-router';

import demo from './demo';
import exception from './exception';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        ...demo,
        ...exception
    ]
});
