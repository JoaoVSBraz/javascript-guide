var conjunto = []

function executar() {
    let numero = window.document.getElementById('numero')
    let arrayNum = window.document.getElementById('array')
    let num = Number(numero.value)

    if (numero.value.length == 0) {
        alert('ERRO: Digite um número')
    } else {
        conjunto.push(num)
        arrayNum.innerHTML += `<p><strong>${num}</strong> adicionado</p>`
    }
}

function calc() {
    let resultado = window.document.getElementById('resultado')
    let soma = 0
    let maior, menor

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
    resultado.innerHTML += `<p>A soma dos valores do array é ${soma}</p>`
    resultado.innerHTML += `<p>O maior número foi ${maior}</p>`
    resultado.innerHTML += `<p>O menor número foi ${menor}</p>`

}