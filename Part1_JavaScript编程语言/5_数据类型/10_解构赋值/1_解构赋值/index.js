let user = { name: "John", years: 30 };

// 等号左侧是你的代码
let {name,years:age, isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false