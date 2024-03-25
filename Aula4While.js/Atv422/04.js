const leia = require('readline-sync');

let continua = "S", idade, genero, categoria;
let back = 0, front = 0, mobile = 0, full = 0, total = 0, somaIdade = 0, media = 0.0;

while(continua === "S"){

    idade = leia.questionInt("\nDigite a idade: ")

    genero = leia.questionInt("Digite o Genero (1-MC/2-HC/3-NB/4-MT/5-HT/6-Outros): ")

    categoria = leia.questionInt("Digite a Categoria (1-Back/2-Front/3-Mobile/4-Full): ")

    if (categoria === 1)
        back ++;

    if (categoria === 2 && (genero === 1 || genero === 4))
        front ++;

    if (categoria === 3 && (genero === 2 || genero === 5) && idade > 40)
        mobile ++;
    
    if (categoria === 4 && genero === 3 && idade < 30)
        full ++;

    total += 1;

    somaIdade += idade;

    media = somaIdade / total;

    continua = leia.question("\nDeseja continuar (S/N)? ").toUpperCase()
}

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${back}`);
console.log(`\nTotal de Mulheres desenvolvedoras Frontend: ${front}`);
console.log(`\nTotal de Homens desenvolvedores Mobile maiores de 40 anos: ${mobile}`);
console.log(`\nTotal de Pessoas Não Binárias desenvolvedoras/es Full menores de 30 anos: ${full}`);
console.log(`\nTotal de pessoas que responderam a pesquisa: ${total}`);
console.log(`\nMédia de idade das pessoas que responderam a pesquisa: ${media.toFixed(2)}`);






