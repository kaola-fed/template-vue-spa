import axios from 'axios';
import request from './request';
import * as intercepors from './interceptors';

export default {
    install(Vue) {
        const instance = axios.create();

        intercepors.install(instance);
        
        Vue.prototype.$ajax = request(instance);
    }
}