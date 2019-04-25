function titleCase(str) {
    return str.toLowerCase().split(' ')
        .map(item => item = item.charAt(0).toUpperCase() + item.substr(1, item.length))
        .join(' ');
}

console.log(titleCase("I'm a little tea pot"));