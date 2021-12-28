function contagem() {
    var inputInicio = window.document.getElementById('inicio')
    var inputFim = window.document.getElementById('fim')
    var inputPasso = window.document.getElementById('passo')
    var resultado = window.document.getElementById('resultado')

    var inicio = Number(inputInicio.value)
    var fim = Number(inputFim.value)
    var passo = Number(inputPasso.value)

    if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
        alert('[ERRO] Digite um número')
    } else if (inicio < fim) {
        for( inicio ; inicio <= fim ; inicio += passo ) {
            resultado.innerHTML += ` ${inicio} `
        }
    } else {
        for( inicio ; inicio >= fim ; inicio -= passo ) {
            resultado.innerHTML += ` ${inicio} `
        }
    }
}

// RESOLUÇÃO POR JOÃO BRAZ