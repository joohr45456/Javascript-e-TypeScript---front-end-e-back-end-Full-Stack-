/*
VImos valores primitivos (imutáveis)
 - string, number, boolean, undefined, null, etc

 Já os dados Referencia são:
 Array , object, function - passados por referencia
*/

let a = [1, 2, 3]
let b = a //b referencia sempre para a 
console.log(a, b)

//para tornar este valor independente:
let c = [...a]
console.log(a, b, c)

a.push(4)
console.log(a, b, c)

//o mesmo acontece com os objetos

const d = {
    nome: "João",
    sobrenome: "Oliveira"
}

const e = {...d}
d.nome = "Pedro"
console.log(d, e)