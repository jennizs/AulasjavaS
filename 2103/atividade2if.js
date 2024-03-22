const readlineSync = require('readline-sync');

var nomeDoador = readlineSync.question("Digite o nome do doador: ");
var idadeDoador = parseInt(readlineSync.question("Digite a idade do doador: "));
var primeiraDoacao = readlineSync.question("E a primeira doacao? (sim/nao): ");

var aptoParaDoar = (idadeDoador >= 18 && idadeDoador <= 69) && (idadeDoador < 60 || !primeiraDoacao);

if (aptoParaDoar) {
    console.log(nomeDoador + " está apto para doar sangue.");
} else {
    console.log(nomeDoador + " não está apto para doar sangue.");
}