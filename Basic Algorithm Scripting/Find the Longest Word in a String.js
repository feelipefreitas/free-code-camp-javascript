//Return the string
'Felipe Freitas'.split(' ').reduce((acc, curr) => {
    acc = curr;
    if (curr.length > acc.length) acc = curr;
    return acc;
}, '');

//Return the number
'Felipe Freitas'.split(' ').reduce((acc, curr) => {
    if (curr.length > acc) acc = curr.length;
    return acc;
}, 0);