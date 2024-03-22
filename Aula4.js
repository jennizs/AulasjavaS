const leia = require('readline-sync');
let num, num2;

continua = leia.question("\nDigite S para entrar no programa de multiplicacao").toUpperCase().

while(continua === "S"); {
    num = leia.questionInt("\N Digite um numero para multiplicar: ");
    num2 = leia.questionInt("\n Por quanto quer multiplicar?: ");


console.log(`\n ${num}* ${num2} = ${num * num2}`);

    continua = leia.question(`Quer continuar os calculos digite S ou N para sair: `). toUpperCase().


    while (continua !== "S" && continua !== "N"){
        console.log(`Digite as opçoes corretas!`);
        continua = leia.question(`Quer continuar os calculos digite S ou N para sair: `). toUpperCase().
    }
}
    


