let numeros = [2, 5, 8, 1, 4]

/* 
O método sort() organiza os elementos em ordem crescente 
numeros.sort()
*/

/*
for(let i=0; i < numeros.length; i++) {
    console.log(`A posição ${i} possui o valor ${numeros[i]}`)
}
*/

// A forma de uso do for logo abaixo está presente nas versões mais recentes da especificação Ecmascript e simplifica bastante seu uso.
for(let i in numeros) {
    console.log(`A posição ${i} possui o valor ${numeros[i]}`)
}

// Para buscar um valor específico dentro de um vetor utilizamos o método indexOf()
let posicao = numeros.indexOf(5)

console.log(`O valor está na posição ${posicao}`)