import Vue from 'vue';
import Vuex from 'vuex';
import demo from './modules/demo';
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        demo,
        // cart,
        // products
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})