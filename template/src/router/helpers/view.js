export default function view(path) {
    return function(resolve) {
        console.log(`@/views/${path}.vue`);
        return import(`@/views/${path}.vue`).then((s) => {
            resolve(s.default);
        });
    };
}