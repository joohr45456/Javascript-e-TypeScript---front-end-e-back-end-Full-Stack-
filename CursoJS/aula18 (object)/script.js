// imagine a seguinte situação
//você precisa armazenar o nome, sobrenome e idade de 1000 pessoas, ent vc vai
const nome01 = 'João'
const sobrenome01 = 'Oliveira'
const idade01 = 15

const nome02 = 'Marcos'
const sobrenome02 = 'Souza'
const idade02 = 35

//percebe q é inviável criar 3000 variáveis pra essas 1000 pessoas, pra isso. usa-se os objetos para agrupar as 3 variaveis pra cada pessoa
const pessoa01 = {
    nome1: 'João', //aqui vc dá os atributos
    sobrenome1: 'Oliveira',
    idade1: 15
}
//para acessar esse atributo
console.log(pessoa01.nome1)
console.log(pessoa01.sobrenome1)
console.log(pessoa01.idade1)

//mas perceba q vc ainda vai ter q criar 1000 objetos, para melhorar isso, cria-se uma função q faça isso pra mim:
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        // Método fala() dentro do objeto
        fala() {
            console.log(`${this.nome} diz: Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        },
        // Método incrementaIdade() dentro do objeto
        incrementaIdade() {
            this.idade++;
        }
    };
}

const pessoa0001 = criaPessoa('João', 'Oliveira', 15);
pessoa0001.fala(); // ✅ Funciona!
pessoa0001.incrementaIdade();
pessoa0001.fala(); // Agora a idade será 16