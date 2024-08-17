// 创建一个有三个方法的 calculator 对象：

// read() 提示输入两个值，并将其保存为对象属性，属性名分别为 a 和 b。
// sum() 返回保存的值的和。
// mul() 将保存的值相乘并返回计算结果。
'use strict'

let calculator = {
    read : () => {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum : () => {
        return this.a + this.b;
    },
    mul : () => {
        return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
