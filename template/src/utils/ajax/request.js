import { defaults } from '@/utils/tools'
const defaultOption = {
    withCredentials: true
};

function transform(data) {
    let fd = [];
    Object.keys(data).map(key => {
        let item = typeof data[key] === 'object'
            ? JSON.stringify(data[key])
            : data[key];

        item = encodeURIComponent(item);

        fd.push(`${key}=${item}`);
    });
    return fd.join('&');
};

function makeGet(axios) {
    return function(url, option) {
        const opt = defaults({}, option, defaultOption)
        return axios({
          url,
          method: 'get',
          ...opt
        });
    }
}

function makePost(axios) {
    return function(url, option) {
        const opt = defaults({}, option, defaultOption)

        if(opt.type && opt.type == 'form-urlencoded') {
            delete opt.type;
            opt.headers = {};
            opt.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            opt.transformRequest = [data => {
                if(!data) {
                    return data;
                }
                return transform(data);
            }];
        }
        return axios({
          url,
          method: 'post',
          ...opt
        });
    }
}

export default function createRequest(axios) {
    return {
        axios,
        get: makeGet(axios),
        post: makePost(axios)
    }
}