function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        //计算需要补多少.
        dotNum = str.length - maxLength;
        return str.slice(0, maxLength) + '.'.repeat(dotNum);
    }
}
console.log(truncate("Happyee", 5));
