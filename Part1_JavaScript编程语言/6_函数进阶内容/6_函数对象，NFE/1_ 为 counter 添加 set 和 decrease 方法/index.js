function makeCounter() {
    let count = 0;
    function counter() {
        count++;
    }
    counter.count = () => count;
    counter.set = value => count = value;
    counter.decrease = () => count--;

    return counter;
}


let c = makeCounter();
c();
console.log(c.count());
c.set(12);
console.log(c.count());
c.decrease();
console.log(c.count());

