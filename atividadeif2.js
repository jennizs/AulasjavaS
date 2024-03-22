const leia = require('readline-sync');
numero = leia.questionInt("Digite um numero: ");
//console.log(numero)
if (numero % 2 === 0) 
{
   texto1=("Seu numero é par")

}
  else {
   texto1=("Seu numero é impar")
   

}
if (numero > 0 )
{
    texto2=(" e positivo!")

}
  else {
    texto2=(" e negativo!")

}

console.log(texto1 + texto2);