let nome = 'João' // ou "var"
let esposa = 'Laura'

console.log(nome, 'nasceu em 1984')
console.log('em 2000', nome, 'conheceu', esposa)
console.log(nome, 'casou-se com', esposa, 'em 2012')
console.log(esposa, 'teve um filho com', nome, 'em 2015')
console.log('o filho de', nome, 'se chama eduardo')

let nome2; //variavel declarada, mas sem valor
console.log(nome2) //no console, aparece "undefined"
let nome3; // mesmo q a linha 10, por enquanto...
nome3 = 'Fábio' //definiu o valor da variável, no console, aparece "Fábio"
console.log (nome3)

/*nn se pode criar variaveis com palavras reservadas (códigos)
ex. let if = blablabla*/
/*variaveis precisam ter nomes significativos (pra facilitar)*/
/*n pode começar o nome da variavel com um numero (1234567890)
ex. let = '1nome'*/
/* nn pode ter - nem   (espaços) no nome da variavel
ex. let = 'numero-cliente' ou let = 'numero do cliente'*/
// Case sensitive (letra maiuscula ou minuscula fazem diferença)
// nn podemos redeclarar variaveis com let
// nn utilize var, use let