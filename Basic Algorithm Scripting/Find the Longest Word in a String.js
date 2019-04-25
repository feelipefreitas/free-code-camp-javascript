'Felipe Freitas'.split(' ').reduce((acc, curr) => {
    acc = curr;
    if (curr.length > acc.length) acc = curr;
    return acc;
}, '');