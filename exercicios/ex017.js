var a = 1
var b = 1

console.log('INÍCIO WHILE')

// ESTRUTURA DE REPETIÇÃO COM TESTE NO INÍCIO
while (a <= 10) {
    console.log(`Passo ${a}`)
    a++
}

console.log('INÍCIO DO WHILE')

// ESTRUTURA DE REPETIÇÃO COM TESTE NO FINAL
do {
    console.log(`Passo ${b}`)
    b++
} while (b <= 10);

console.log('INÍCIO FOR')

// ESTRUTURA DE REPETIÇÃO FOR
for ( var c = 1 ; c <= 10 ; c++ ) {
    console.log(`Passo ${c}`)
}