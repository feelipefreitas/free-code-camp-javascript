function confirmEnding(str, target) {
    return str.substr(str.length - target.length) === target ? true : false;
}

confirmEnding("Bastian", "n");

//Or
function confirmEnding(str, target) {
    return str.endsWith(target);
}

confirmEnding("Bastian", "n");