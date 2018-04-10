export const request = {
    addHttpRequestHeader: {
        success(config) {
            config.headers['X-Requested-With'] = 'XMLHttpRequest';
            return config;
        },
        fail(err) {
            console.error('request error: ', err);
            return Promise.reject(err);
        }
    }
};

export const response = {
    formatResponse: {
        success(response) {
            const data = Object.assign({}, response.data, {
                __response: response
            });
            return data;
        }
    },
    handleError: {
        success(response) {
            if (response.code !== 200) {
                // do something
            }

            return response;
        },
        fail(err) {
            console.error('response error: ', err);
        }
    }
};

const store = {
    request,
    response
};

function installInterceptors(instance, option = {}) {
    const { type, interceptors = [] } = option;
    const interceptorContainer = instance.interceptors[type];
    interceptors.map(name => store[type][name]).forEach((interceptor) => {
        interceptorContainer.use(interceptor.success, interceptor.fail);
    });
}


export function install(instance) {
    installInterceptors(instance, {
        type: 'request',
        interceptors: [
            'addHttpRequestHeader'
        ]
    });

    installInterceptors(instance, {
        type: 'response',
        interceptors: [
            'formatResponse',
            'handleError'
        ]
    });
}