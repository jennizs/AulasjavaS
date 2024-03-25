const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("\nDigite o numero que voce deseja encontrar: ");
console.table(vetor)

let posicao = -1; // Inicializa a posição como -1, indicando que o número ainda não foi encontrado


for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        posicao = i; // Armazena a posição do número
        break; // Encerra o loop assim que encontrar o número
    }
}

if (posicao !== -1) {
    console.log("\nO número", numero, "está localizado na posição:", posicao);
} else {
    console.log("\nO número", numero, "não foi encontrado!");
}
