function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var formularioAno = window.document.getElementById('ano')
    var resultado = window.document.getElementById('resultado')

    if (formularioAno.value.length == 0 | formularioAno.value > ano) {
        window.alert('Erro')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade = ano - Number(formularioAno.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 18) {
                // criança
                img.setAttribute('src', 'homem-criança.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }

        } 
        if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 18) {
                // criança
                img.setAttribute('src', 'mulher-criança.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }

        resultado.style.textAlign = 'center'
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.borderRadius = '50%'
        resultado.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos</p>`
        resultado.appendChild(img)
    }
}