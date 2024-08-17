function checkSpam(str) {
    if(str.toUpperCase().includes("VIAGRA") || str.toUpperCase().includes("XXX")) {
        return true;
    }else {
        return false;
    }
}

console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam("innocent rabbit") == false);
