const leia = require("readline-sync");

let saldo = 1000
const operaçãoBancaria = leia.questionInt("Digite a operacao: ");

switch (operaçãoBancaria) {
case 1: {
    console.log($, saldo)
    break
}
    case 2: {
        const saque = leia.questionInt("Quanto voce quer sacar ");
        if (saque <= saldo) {
            saldo -= saque;
            console.log("Novo saldo: R$", saldo);

            break
        } 
        console.log("saque e maior que o saldo")
    }
    case 3: {
        const deposito = leia.questionInt(" quanto voce deseja depositar?: ")
        saldo += deposito
        console.log("Novo saldo: R$", saldo)
        break
    }
    }
