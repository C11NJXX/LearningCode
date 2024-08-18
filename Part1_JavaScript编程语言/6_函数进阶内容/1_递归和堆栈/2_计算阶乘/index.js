function factorial(n) {
    let res = 1;
    if (n === 1) {
        return res;
    } else {
        return n * factorial(n - 1);
    }
}

//简化写法 n===1 ? res : n*factorial(n-1)

console.log(factorial(3));