//               01234567
let umaString = "Um texto"
console.log(umaString [7])  // [x] = numero do caracter da variavel
let umaString2 = "Um texto"
console.log(umaString2.concat(', em um lindo dia')) // concatenação
let umaString3 = "Um texto e outro texto"
console.log(umaString3.indexOf('texto')) // onde começa uma palavra x
console.log(umaString3.indexOf('texto', 4)) // onde começa uma palavra x
// (.lastIndexOf faz a mesma coisa, só q de trás pra frente)
//                0123456789
let umaString4 = "Um texto e outro texto" 
console.log(umaString4.length) //mostra o tanto de caracteres em uma frase
console.log(umaString4)
console.log(umaString4.slice(0 , 10)) //corta uma parte da frase, só sobra os caracteres entre os colocados (0 ao 10, no caso)
console.log(umaString4.replace('texto', 'qualquer coisa')) //substitui um termo pelo outro
console.log(umaString4.split(' ')) //divide por cada palavra, criando uma lista (array)
console.log(umaString4.split(' ', 2)) //divide por cada palavra, criando uma lista (array), desta vez com um limite
console.log(umaString4.toUpperCase()) // deixa tudo maiusculo
console.log(umaString4.toLocaleLowerCase()) //deixa tudo minusculo