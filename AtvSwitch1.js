const readlineSync = require('readline-sync');

let quantidade;
let produto;
let valorTotal;

quantidade = parseInt(readlineSync.question("\nDigite a quantidade desejada: "));

console.log("\nDigite o número do produto:");
console.log("1 -- cachorro quente R$20,00 ");
console.log("2 -- x salada R$11,00");
console.log("3 -- x bacon R$24,00");
console.log("4 -- Bauru R$15,00 ");
console.log("5 -- suco de laranja R$8,00 ");
console.log("6 -- Refrigerante R$5,00");

produto = parseInt(readlineSync.question("\nEscolha o numero do produto: "));

switch (produto) {
    case 1:
        valorTotal = quantidade * 20;
        break;
    case 2:
        valorTotal = quantidade * 11;
        break;
    case 3:
        valorTotal = quantidade * 24;
        break;
    case 4:
        valorTotal = quantidade * 15;
        break;
    case 5:
        valorTotal = quantidade * 8;
        break;
    case 6:
        valorTotal = quantidade * 5;
        break;
    default:
        console.log("Produto inválido!");
}

if (produto >= 1 && produto <= 6) {
    console.log("\nValor total da compra: R$" + valorTotal.toFixed(2));
}

