function copySorted(arr) {
    let cpArr = [];
    Object.assign(cpArr,arr);
    cpArr.sort();
    return cpArr;
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)