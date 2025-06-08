//escrever a seguinte frase: João Pedro de Oliveira tem 13 anos, pesa 50 kg, tem 1.80 de altura e seu IMC é 15.8
// coloque uma variavel para cada dado (nome, sobrenome, idade, data de nascimento, peso, altura e IMC)

const nome = 'João Pedro'
const sobrenome = 'de Oliveira Moraes'
const idade = 13
let DataDeNascimento;
DataDeNascimento = 2023 - idade + ','
const peso = 50
const altura = 1.8
let indiceMassaCorporal;
indiceMassaCorporal = peso / (altura * altura)

console.log(nome, sobrenome, 'tem', idade, 'anos, nasceu no ano de', DataDeNascimento, 'pesa', peso, 'kg, tem', altura, 'metros de altura', 'e seu Indice de Massa Corporal é', indiceMassaCorporal )


//testes por conta própria

/*
if (IMC <= 16.9){
console.log('Classificação IMC: Muito abaixo do peso')
}
else(
if (16.9 < IMC <= 18.4){
console.log('Classificação IMC: Abaixo do peso')
}
else(
if (18.4 < IMC <= 24.9){
console.log('Classificação IMC: Peso normal')
}

if(24.9 < IMC <= 29.9){
console.log('Classificação IMC: Acima do peso')
}
if(29.9 < IMC <= 34.9){
console.log('Classificação IMC: Obesidade nível I')
}
if(34.9 < IMC <= 40){
console.log('Classificação IMC: Obesidade severa')
}
if(40.1 < IMC){
    console.log('Classificação IMC: Obesidade mórbida')
    }))

    //Nn deu certo*/