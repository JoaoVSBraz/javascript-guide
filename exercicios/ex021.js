/*
function parimp(numero) {
    if (numero % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

console.log(parimp(10))


function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(7, 3))


// A atribuição do valor 0 aos parêmetros da função garantem que a soma seja realizada mesmo se algum deles for omitido.

function fatorial(n) {
    let fat = n
    for(let i=1; i<n; i++) {
        fat *= i
    }
    return fat
}

console.log(fatorial(5))
*/

// FUNÇÃO RECURSIVA

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))