import axios from 'axios';
import * as interceptors from './interceptors';
import { defaults } from '@/common/utils/tools';

const defaultOption = {
    withCredentials: true
};

function getAxiosInstance(options) {
    const instance = axios.create();

    interceptors.install(instance, options);

    return instance;
}

function transform(data) {
    let fd = [];
    Object.keys(data).map((key) => {
        let item = typeof data[key] === 'object'
            ? JSON.stringify(data[key])
            : data[key];

        item = encodeURIComponent(item);

        fd.push(`${key}=${item}`);
    });
    return fd.join('&');
};

function makeAxios() {
    return function(option) {
        const instance = getAxiosInstance(option);
        return instance(option);
    };
}

function makeGet() {
    return function(url, option) {
        const opt = defaults({}, option, defaultOption);

        const instance = getAxiosInstance(option);
        return instance({
            url,
            method: 'get',
            ...opt
        });
    };
}

function makePost() {
    return function(url, option) {
        const opt = defaults({}, option, defaultOption);

        if(opt.type && opt.type == 'form-urlencoded') {
            delete opt.type;
            opt.headers = {};
            opt.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            opt.transformRequest = [(data) => {
                if(!data) {
                    return data;
                }
                return transform(data);
            }];
        }

        const instance = getAxiosInstance(option);
        return instance({
            url,
            method: 'post',
            ...opt
        });
    };
}

/**
 * ajax
 * 
 * 基于 axios（https://github.com/axios/axios） 进行封装
 * 
 * @example:
 * // 在 vue 实例外
 * import ajax from '@/common/utils/ajax';
 * ajax.get('/user', {
 *     params: {
 *         id: 1000
 *     }
 * });
 * 
 * // 在 vue 实例种
 * this.$ajax.post('/blog', {
 *     data: {
 *         content: 'hello world'
 *     }
 * });
 * 
 * 在 ./interceptors 中预先添加了一些拦截器做统一的请求处理，如果个别请求需要 pass 掉某个拦截器可以传人 ignoreInterceptors 字段
 * this.$ajax.get('/cart', {
 *     ignoreIntercepors: [
 *         'addHttpRequestHeader'
 *     ]
 * })
 */
export default {
    axios: makeAxios(),
    get: makeGet(),
    post: makePost(),
    install(Vue) {
        Vue.prototype.$ajax = this;
    }
};