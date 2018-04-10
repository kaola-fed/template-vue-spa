import Ajax from '@/utils/ajax';

const ajax = Ajax.getInstance();

export function getInfo() {
    return ajax.get('/api/demo/info');
}

export function getEcho(data) {
    return ajax.post('/api/demo/echo', {
        data
    });
}