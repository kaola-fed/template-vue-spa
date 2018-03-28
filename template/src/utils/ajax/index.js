import axios from 'axios';
import request from './request';
import * as intercepors from './interceptors';

let singleton = null; 

export default {
    install(Vue) {
        Vue.prototype.$ajax = this.getInstance();
    },
    getInstance() {
        if (!singleton) {
            singleton = this.create();
        }
        return singleton;
    },
    create() {
        const instance = axios.create();

        intercepors.install(instance);

        return request(instance);
    }
}