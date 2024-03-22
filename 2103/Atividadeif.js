const readlineSync = require("readline-sync");

let a, b, c;

a = readlineSync.questionFloat("\nDigite um numero: ");
b = readlineSync.questionFloat("\nDigite mais numero: ");
c = readlineSync.questionFloat("\nDigite outro numero: ");

if (a + b > c) {
    console.log("\n" + (a + b) + " é maior que " + c);
} else if (a + b < c) {
    console.log("\n" + (a + b) + " é menor que " + c);
}
