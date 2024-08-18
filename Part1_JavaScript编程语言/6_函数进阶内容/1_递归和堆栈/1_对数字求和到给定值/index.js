function Test(n) {
    console.log("By loop the result is : " + sumToByLoop(n));
    console.log("By Recursion the result is : " + sumToByRecursion(n));
    console.log("By Formula the result is : " + sumToByFormula(n));
}

//使用循环实现
function sumToByLoop(n) {
    let res = 0;
    for(let i = 1 ; i <= n; i++) {
        res+=i;
    }
    return res;
}

function sumToByRecursion(n) {
    let res = 1;
    if(n===1) {
        return res;
    }else {
        return n + sumToByRecursion(n-1);
    }
}

function sumToByFormula(n) {
    return n*(n+1)/2;
}

Test(3);