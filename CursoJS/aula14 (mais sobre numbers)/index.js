let num1 = 965
let num2 = 1.5

console.log(num1.toString() + num2)  // concatenação (Junção dos dois numeros literalmente), nesse caso, a variavel nn é mudada de number para string
// num1 = num1.toString() ->  aqui ss transforma um number em uma string

//para ver a representação binária de um número:
console.log(num1.toString(2)) // o 2 ali dentro faz isso

//para arredondar numeros grandes:
let num3 = 502.6461465184648158548756
console.log(num3.toFixed(2))  // o 2 representa o quantas casas decimais vão ter depois da virgula (no caso ponto)

//para saber se um numer é inteiro ou não:
console.log(Number.isInteger(num1)) //true
console.log(Number.isInteger(num2)) //false

//para saber se é um NaN ou não:
let conta = num1 * 'Olá'              //conta impossivel
console.log(Number.isNaN(conta))       //verifica se é um NaN ou não

console.log(0.1 + 0.7)