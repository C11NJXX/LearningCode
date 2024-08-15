//回调函数的示例
function sayHello(age,hi,bye){
    (age > 18) ? hi() : bye();
}

sayHello(prompt("How old are you?",""),
    function() {
        alert("Hello")
    },
    function() {
        alert("Bye")
    }
);
