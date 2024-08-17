let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function sumSalaries(salaries) {
    let arr = Object.values(salaries);
    let sum = 0;
    for(let item of arr) {
        sum+=item
    }
    return sum;
}
  
  console.log( sumSalaries(salaries) ); // 650