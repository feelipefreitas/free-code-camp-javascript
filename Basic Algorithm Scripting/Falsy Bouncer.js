function bouncer(arr) {
    return arr.filter(item => {
        return Boolean(item);
    });
}

bouncer([7, "ate", "", false, 9]);