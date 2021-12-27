function contagem() {
    var inputInicio = window.document.getElementById('inicio')
    var inputFim = window.document.getElementById('fim')
    var inputPasso = window.document.getElementById('passo')
    var resultado = window.document.getElementById('resultado')
    var content = window.document.createElement('p')

    var inicio = Number(inputInicio.value)
    var fim = Number(inputFim.value)
    var passo = Number(inputPasso.value)

    if (passo == 0 || passo == null || passo == undefined) {
        alert('[ERRO] O passo deve ser maior que 0.')
    } else if (inicio < fim) {
        for( inicio ; inicio < fim ; inicio += passo ) {
            resultado.innerHTML += ` ${inicio} `
        }
    } else {
        for( inicio ; inicio > fim ; inicio -= passo ) {
            resultado.innerHTML += ` ${inicio} `
        }
    }
}

// RESOLUÇÃO POR JOÃO BRAZ