function saudação(nome) {
console.log(`Bom dia ${nome}!`)
}

const qualquer = saudação('João');

// de exemplo, uma função que soma dois valores:

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2))

//outro exemplo, função q dá a raiz quadrada de um número dentro de uma variável

const raiz = function(n) {
 return n ** 0.5;
};
console.log(raiz(9));
//ou
const raiz2 = function(n) {
 return Math.sqrt(n);
};
console.log(raiz2(16));

// tbm se pode criar uma função de forma simplificada
const raiz3 = n => Math.sqrt(n);
console.log(raiz3(49));