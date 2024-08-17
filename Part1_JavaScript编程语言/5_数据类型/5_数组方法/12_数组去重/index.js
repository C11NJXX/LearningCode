function unique(arr) {
    let res = [];
    arr.forEach(item => {
        if(!res.includes(item)){
            res.push(item);
        }
    })
    return res;
}
// function unique(arr) {
//     let res = [];
//     for(let item of arr) {
//         if(!res.includes(item)) {
//             res.push(item);
//         }
//     }
//     return res;
// }

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
console.log( unique(strings) ); // Hare, Krishna, :-O