let varA = 'A'
let varB = 'B'
let varC = 'C'
const temporal = varA

varA = varB //varA = B
varB = varC //varB = C
varC = temporal //varC = A

console.log(varA, varB, varC)