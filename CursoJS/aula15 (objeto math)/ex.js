let numero = prompt('Digite um número:')
numero = Number(numero)
let numeroTitulo = document.getElementById('numero-titulo')
let raizQuadrada = document.getElementById('raizQuadrada')
let arredondadoCima = document.getElementById('arredondadoCima')
let arredondadoBaixo = document.getElementById('arredondadoBaixo')
let éumNaN = document.getElementById('éumNaN')
let arredondadoDois = document.getElementById('arredondadoDois')

numeroTitulo.innerHTML = numero
raizQuadrada.innerHTML = `<p>A raiz quadrada de ${numero} é: ${numero ** (1/2)}</p>`
arredondadoCima.innerHTML = `<p>${numero} arredondado para cima é: ${Math.ceil(numero)}</p>`
arredondadoBaixo.innerHTML = `<p>${numero} arredondado para baixo é: ${Math.floor(numero)}</p>`
éumNaN.innerHTML = `<p>${numero} é um NaN: ${Number.isNaN(numero) ? "sim" : "não"}</p>`;
arredondadoDois.innerHTML = `<p>${numero} com apenas duas casas decimais: ${numero.toFixed (2)}</p>`
