
        valorTotal = quantidade * 5;
        break;
    default:
        console.log("Produto inválido!");
}

if (produto >= 1 && produto <= 6) {
    console.log("\nValor total da compra: R$" + valorTotal.toFixed(2));
}

