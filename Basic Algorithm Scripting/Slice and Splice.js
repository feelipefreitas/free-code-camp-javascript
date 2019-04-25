//slice não mutate
//splice mutates
function frankenSplice(arr1, arr2, n) {

    let newArr = arr2.slice(0, n);
    newArr = newArr.concat(arr1);
    newArr = newArr.concat(arr2.slice(n))
    return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);