let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
function toSalary(salaries) {
    let max = [];
    let isFirst = true;
    Object.entries(salaries).forEach(
        item => {
            let [name, salary] = item;
            if(isFirst){
                max = [name,salary];
                isFirst=!isFirst;
            }else {
                if(salary > max[1]) {
                    max = [name,salary];
                }
            }
        }
    )
    return max;
}

// function toSalary(salaries) {
//     let maxSalary = 0;
//     let resName;
//     for(let [name, salary] of Object.entries(salaries)) {
//         if(maxSalary < salary) {
//             maxSalary = salary;
//             resName = name; 
//         }
//     };
//     return [resName,maxSalary];
// }

console.log(toSalary(salaries));
