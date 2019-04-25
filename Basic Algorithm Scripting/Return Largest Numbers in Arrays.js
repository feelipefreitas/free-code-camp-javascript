function largestOfFour(arr) {
    return arr.reduce((acc, curr) => {
        acc.push(Math.max.apply(null, curr));
        return acc;
    }, []);
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);