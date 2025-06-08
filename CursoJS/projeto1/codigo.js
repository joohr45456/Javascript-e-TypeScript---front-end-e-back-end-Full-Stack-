let letra1pergunta = (prompt('Qual o nome da sua rua?'))
let letra1 = letra1pergunta[0]

let letra2pergunta = (prompt('qual sua cor favorita?'))
let letra2 = letra2pergunta[0]

let letra3pergunta = (prompt('Qual sua comida favorita?'))
let letra3 = letra3pergunta[0]

let letra4pergunta = (prompt('Qual seu lugar preferido?'))
let letra4 = letra4pergunta[0]

let nomeFinal = letra1 + letra2 + letra3 + letra4
console.log(document.body.innerHTML = `Seu nome é: ${nomeFinal}<br />`)