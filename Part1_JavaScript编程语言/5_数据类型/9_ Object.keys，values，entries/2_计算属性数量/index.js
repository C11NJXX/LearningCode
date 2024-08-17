function count(user) {
  
  return Object.values(user).length;
    
}

let user = {
    name: 'John',
    age: 30
  };
  
  console.log( count(user) ); // 2