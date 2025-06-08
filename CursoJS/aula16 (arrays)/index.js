//                 0       1        2 
const alunos = ['João', 'Maria', 'Marcos'];
console.log(alunos);
console.log(alunos[2]); // cada índice de uma array é definido pelo número de seu elemento, diferente da string, q é letra por letra

//para adicionar um elemento na array:
alunos[3] = 'Luíza';
console.log(alunos[3]);

//para saber o tamanho da minha array basta fazer:
console.log(alunos.length); //obs. note q é a quantidade em números - 0, vc deve tirar 1 do número q ele der para adicionar certinho

//método mais fácil:
alunos.push('Ana Katya');
console.log(alunos)

//todos acima adicionam no final da array, para adicionar no começo:
alunos.unshift('Lucas')
console.log(alunos)

//já para remover um elemento do final
alunos.pop();
console.log(alunos);
//para remover do começo
alunos.shift();
//para ver oq foi removido:
const removido = alunos.pop()
console.log(removido);

//para apagar um elemento
delete alunos[1]; //note q no console aparece q é um índice vazio
console.log(alunos);

//para pegar só uma parte
console.log(alunos.slice(0, 3)); //note q tem q ser um número maior q o desejado