let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListByLoop(list) {
    let cur = list;
    while (cur != null) {
        console.log(cur.value);
        cur = cur.next;
    }
}

// printListByLoop(list);

function printListByRecursion(list) {
    console.log(list.value);

    if (list.next)
        printListByRecursion(list.next);

}
printListByRecursion(list);