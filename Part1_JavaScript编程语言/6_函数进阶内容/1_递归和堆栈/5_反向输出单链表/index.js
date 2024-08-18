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

function printListReverselyByLoop(list) {
    //  正常读取到数组再反向输出
}
function printListReverselyByRecursion(list) {
    if(list.next) {
        printListReverselyByRecursion(list.next);
    }
    console.log(list.value);
}

printListReverselyByRecursion(list);