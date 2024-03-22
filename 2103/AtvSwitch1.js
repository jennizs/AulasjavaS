const readlineSync = require('readline-sync');

let quantidade;
let produto;
let valorTotal;

quantidade = parseInt(readlineSync.question("\nDigite a quantidade desejada: "));

console.log("\nDigite o número do produto:");
const produtos = [
    { numero: 1, nome: "Cachorro Quente", preco: "R$20,00" },
    { numero: 2, nome: "X-Salada", preco: "R$11,00" },
    { numero: 3, nome: "X-Bacon", preco: "R$24,00" },
    { numero: 4, nome: "Bauru", preco: "R$15,00" },
    { numero: 5, nome: "Suco de Laranja", preco: "R$8,00" },
    { numero: 6, nome: "Refrigerante", preco: "R$5,00" }
];

console.table(produtos);

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

