function repeatStringNumTimes(str, num) {
    if (num < 0) return '';
    if (num === 0) return '';
    return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);

//Or
function repeatStringNumTimes(str, num) {
    return (num > 0) ? str.repeat(num) : '';
}