
//Verificar se um número é par ou ímpar:
//Escreva uma função que recebe um número como
//parâmetro e retorna uma mensagem indicando se o número
//é par ou ímpar.



function verificarParOuImpar(numero) {

    if(numero % 2 === 0) {

        return "O número é par.";

    } else {

        return "O número é ímpar.";

    }
}

console.log(verificarParOuImpar(8));

console.log(verificarParOuImpar(9));
