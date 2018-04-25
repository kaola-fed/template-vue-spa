import view from './helpers/view';

export default [
    {
        path: '/',
        redirect: '/demo'
    },
    {
        path: '/demo/page/:id',
        name: 'Demo',
        component: view('demo/page/index')
    },
    {
        path: '/demo',
        name: 'Demo',
        component: view('demo/index')
    }
];