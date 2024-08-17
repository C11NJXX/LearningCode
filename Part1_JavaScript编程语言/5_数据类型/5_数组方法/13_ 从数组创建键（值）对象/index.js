// function groupById(users) {
//     let res = {};
//     users.map(item => {
//         res[`${item.id}`] = {id:`${item.id}`,name:`${item.name}`,age: `${item.age}`}
//     });
//     return res;
// }

//使用reduce
function groupById(users) {
    return users.reduce(
        (obj,item) => {obj[item.id] = item;return obj},{}
    )
};

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  console.log(usersById);
  
  /*
  // 调用函数后，我们应该得到：
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */