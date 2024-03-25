//Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
//Todos os elementos da Diagonal Principal
//Todos os elementos da Diagonal Secundária
//A Soma de todos os elementos da Diagonal Principal
//A Soma de todos os elementos da Diagonal Secundária
const readlineSync = require("readline-sync");

function criarMatriz() {
    let matriz = [];

    console.log("Digite os elementos da matriz 3x3:");

    // Loop para criar cada linha da matriz
    for (let i = 0; i < 3; i++) {
        let linha = [];
        // Loop para ler os elementos de cada linha
        for (let j = 0; j < 3; j++) {
            linha.push(readlineSync.questionInt("Digite o elemento da posicao: "));
        }
        matriz.push(linha);
    }

    return matriz;
}

// Função para exibir a matriz na tela
function exibirMatriz(matriz) {
    console.log("\nMatriz 3x3:");
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i].join(" "));
    }
}

// Função principal
function main() {
    // Criar a matriz
    let matriz = criarMatriz();


    exibirMatriz(matriz);

    
let somaDiagonalPrincipal = matriz[0][0] + matriz[1][1] + matriz[2][2];
console.log("Diagonal Principal:")
console.log(matriz[0][0] + " " + matriz[1][1] + " " + matriz[2][2]);
console.log("Soma dos Elementos da Diagonal Principal:");
console.log(somaDiagonalPrincipal);

let somaDiagonalSecundaria = matriz[2][0] + matriz[1][1] + matriz[0][2];
console.log("Diagonal Secundaria:")
console.log(matriz[2][0] + " " + matriz[1][1] + " " + matriz[0][2]);
console.log("Soma dos Elementos da Diagonal Secundária:");
console.log(somaDiagonalSecundaria);

}




// Chamada da função principal
main();
