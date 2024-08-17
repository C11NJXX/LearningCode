let styles = ["Jazz", "Blues"];
show(styles);
styles.push("Rock-n--Roll");
show(styles);

styles[(styles.length - 1) /2 ] = "Classics";
show(styles);

console.log(styles.shift());
show(styles);

styles.unshift("Rap","Reggae");
show(styles);





function show(arr) {
    console.log(arr);
}