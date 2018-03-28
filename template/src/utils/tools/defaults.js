export default function defautls(target, ...sourceList) {
    sourceList.forEach((source) => {
        Object
            .keys(source || {})
            .forEach((key) => {
                if (target[key] === undefined) {
                    target[key] = source[key];
                }
            });
    });

    return target;
}