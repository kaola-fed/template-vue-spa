import view from './helpers/view';

export default [
    {
        path: '*',
        redirect: '/404'
    },
    {
        path: '/404',
        name: '404',
        component: view('abnormal/404')
    }
];