let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr) {
    let map = new Map();
    for(let item of arr) {
        let key = item.toLowerCase().split('').sort().join('');
        map.set(key,item); //由于公用一个键，后面的值会覆盖掉前面的
    }
    return Array.from(map.values());
}