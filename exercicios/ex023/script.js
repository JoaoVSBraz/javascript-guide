function inputWrite() {
    let input = document.getElementById('text').value
    let resultado = document.getElementById('resultado')
    
    resultado.innerHTML = `${input}`

    if (input.length < 140 ) {
        resultado.innerHTML += `<p>Restam ${140 - input.length} caracteres</p>`
        document.getElementById('resultado').style.backgroundColor = 'aquamarine'
    } else if (input.length == 140) {
        resultado.innerHTML += `<p>Número de caracteres máximo atingido</p>`
        document.getElementById('resultado').style.backgroundColor = 'red'
    }
}