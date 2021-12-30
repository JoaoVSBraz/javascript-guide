var conjunto = []
let numero = window.document.getElementById('numero')
let arrayNum = window.document.getElementById('array')
let resultado = window.document.getElementById('resultado')

function executar() {

    let num = Number(numero.value)

    if (numero.value.length == 0) {
        alert('ERRO: Digite um número')
    } else {
        conjunto.push(num)
        arrayNum.innerHTML += `<p><strong>${num}</strong> adicionado</p>`
        resultado.innerHTML = ''
    }
}

function calc() {
    let soma = 0
    let media = 0
    let maior, menor

    if (conjunto.length == 0) {
        alert('ERRO: Adicione valores antes de finalizar')
    } else {
        for(var i=0; i < conjunto.length; i++) {
            soma += conjunto[i]
            
            if (i == 0) {
                maior = conjunto[i]
                menor = conjunto[i]
            }
            if (conjunto[i] > maior) {
                maior = conjunto[i]
            } else if (conjunto[i] < menor) {
                menor = conjunto[i]
            }
        }
        media = soma / conjunto.length
        resultado.innerHTML += `<p>A quantidade de números são ${conjunto.length}</p>`
        resultado.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        resultado.innerHTML += `<p>O maior número foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor número foi ${menor}</p>`
        resultado.innerHTML += `<p>A média é igual a ${media}</p>`
    }
}

// RESOLUÇÃO POR JOÃO BRAZ