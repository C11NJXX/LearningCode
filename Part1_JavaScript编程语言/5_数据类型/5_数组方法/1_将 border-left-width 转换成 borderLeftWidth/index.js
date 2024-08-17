//将 border-left-width 转换成 borderLeftWidth
function camelize(str) {
    let arr = str.split('-');
    let newarr = arr.map((item,index) => index == 0 ? item : (item[0].toUpperCase() + item.slice(1)));
    //!!!!!! MAP函数必须要返回值，否则原地修改，或者直接使用链式
    return newarr.join('');
}

console.log(camelize("background-color"));

console.log(camelize("list-style-image"));

console.log(camelize("-webkit-transition"));

// function camelize(str) {
//     return str.split('-').map((item, index) => index == 0 ? item : (item[0].toUpperCase() + item.slice(1))).join('')
// }