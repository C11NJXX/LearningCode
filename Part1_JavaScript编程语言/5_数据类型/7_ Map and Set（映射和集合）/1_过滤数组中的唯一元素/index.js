// function unique(arr) {
//     let set = new Set();
//     for(let item of arr) {
//         set.add(item);
//     }
//     return Array.from(set.keys());
//   }
  
function unique(arr) {
    return Array.from(new Set(arr));
}

  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O