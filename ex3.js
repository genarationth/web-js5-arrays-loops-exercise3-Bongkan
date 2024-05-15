for (i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
//     as long as xValue remains positive.
let xValue = 10;
while (xValue > 0) {
    xValue -= 0.5;
    console.log(xValue)
}
// - Print all the odd numbers between 1 - 100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print[1][2][3][4][5][6]
let expectNum = 6;
let runNum = 1;
while (runNum <= expectNum) {
    console.log([runNum]);
    runNum += 1;
}
// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
let runNum2 = 1;
let cal = 0;
let lastNum = 19;
while (runNum2 <= lastNum) {
    cal += runNum2;
    if (runNum2 === lastNum) console.log(`The sum of the first ${lastNum} positive integers is ${cal}`);
    runNum2 += 1;
}
