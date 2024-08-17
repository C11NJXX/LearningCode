let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };


let doublePrice = Object.fromEntries(
    Object.entries(prices).map(
        item => [item[0],item[1]*2]
    )
)

console.log(doublePrice);