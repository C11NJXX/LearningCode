function printNumbers(from, to) {
    //使用setInterval
    let cur = from;
    let timeId = setInterval(
        () => {
            if(cur === to) clearInterval(timeId);
            console.log(cur++);
        },100
    );
}

// function printNumbers(from, to) {
//     //使用setTimeOut
//     let cur = from;
//     let timeId = setTimeout(
//         function go() {
//             if(cur > to) {clearInterval(timeId);return;};
//             console.log(cur);
//             cur++;
//             timeId = setTimeout(go,100)
//         },1000
//     )
// }

printNumbers(1,20);