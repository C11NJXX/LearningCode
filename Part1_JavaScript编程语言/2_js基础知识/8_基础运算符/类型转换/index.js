/* 
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
*/

console.log("" + 1 + 0); // 10, because "" + 1 = "1" and "1" + 0 = "10" 
console.log("" - 1 + 0); // -1, because "" - 1 = -1 and -1 + 0 = -1;
console.log(true + false); // 1, because true = 1 and false = 0
console.log(6 / "3"); // 2, because 6 / "3" = 6 / 3 = 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); //9px because 4 + 5 = 9 and 9 + "px" = "9px"
console.log("$" + 4 + 5); //$45, because $ + 4 = "$4" and "$4" + 5 = "$45"
console.log("4" - 2);   //2, because "4" - 2 = 4 - 2 = 2
console.log("4px" - 2); //NaN, because "4px" - 2 = NaN
console.log("  -9  " + 5); //"  -9  5", because "  -9  " + 5 = "  -9  5"
console.log("  -9  " - 5); //-14
console.log(null + 1); //1, because null = 0 and 0 + 1 = 1
console.log(undefined + 1); //NaN, because undefined = NaN and NaN + 1 = NaN
console.log(" \t \n" - 2); //-2, because " \t \n" = 0 and 0 - 2 = -2