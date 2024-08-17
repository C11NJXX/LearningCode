function Calculator() {
    this.methods = {
        '+': (a,b) => (a + b),
        '-': (a,b) => (a - b),
    };

    this.calculate = function(str) {
        let arr = str.split(' ');
        let v1 = +arr[0];
        let op = arr[1];
        let v2 = +arr[2];
        if(isNaN(v1) || !this.methods[op] || isNaN(v2)) {
            return NaN;
        }else {
            return this.methods[op](v1,v2);
        }
    };

    this.addMethod = function(opName,func) {
        this.methods[opName] = func;
    };
}

let cal = new Calculator();
console.log(cal.calculate("1 + 2"));
console.log(cal.calculate("1 - 2"));
cal.addMethod('*',(a,b) => (a*b));
console.log(cal.calculate("3 * 3"));
