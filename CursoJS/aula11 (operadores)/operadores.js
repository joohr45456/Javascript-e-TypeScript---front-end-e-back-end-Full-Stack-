/*Operadores Aritméticos:
+ -> adição
- -> subtração
* -> multiplicação
/ -> divisão
** -> potenciação
% -> resto da divisão
*/

const num1 = 10
const num2 = 3

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)
console.log(num1 % num2)

//contador:

let contador = 1
contador++  //2 ---- feito depois
contador++  //3
contador++  //4
++contador  //5
++contador  //6 ---- feito antes
console.log(contador)

let contador2 = 10
contador2--  //9 ---- feito depois
contador2--  //8
contador2--  //7
--contador2  //6
--contador2  //5 ---- feito antes
console.log(contador2)

//OPERADORES DE ATRIBUIÇÃO
/*
+=
-=
*=
/=
*/

let passos = 1
passos *= 2 // mesma coisa que escrever assim: passos = passos + 2
passos /= 2
passos += 2
passos -= 2
passos **= 2
passos += 2
console.log(passos)

//naN = Not a Number

const num3 = 10
const num4 = parseInt('5')  //garante q o numero seja um number, mesmo se vc colocar um string, usa numeros inteiros
const num5 = parseFloat('5.2') // usa numeros decimais
const num6 = Number('5.25')
console.log(num3 * num4)
console.log(num3 * num5)
console.log(num3 * num6)