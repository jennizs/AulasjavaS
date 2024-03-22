const leia = require('readline-sync');

let pares = 0;
let impares = 0;

console.log("Digite 10 numeros inteiros: ");

for (let i = 0; i < 10; i++) {
    const numero = leia.questionInt(`Numero ${i + 1}: `);
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
    console.log(`\nQuantidade de numeros pares até o momento: ${pares}`);
    console.log(`\nQuantidade de numeros ímpares até o momento: ${impares}`);

