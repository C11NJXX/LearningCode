function Sum(...args) {
    let res = 0;
    for (let arg of args) {
        res += arg;
    }
    return res;
}

let arr = [1,2,3,4,5];

console.log(Sum(...arr));
