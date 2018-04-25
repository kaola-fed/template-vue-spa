import ajax from '@/common/utils/ajax';

export function getInfo() {
    return ajax.get('/api/demo/info');
}

export function getEcho(data) {
    return ajax.post('/api/demo/echo', {
        data
    });
}