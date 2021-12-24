function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var saudacao

    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        saudacao = 'Bom dia'
        window.document.body.style.backgroundColor = '#d6eb4d'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        saudacao = 'Boa tarde'
        window.document.body.style.backgroundColor = '#ffa861'
    } else {
        img.src = 'noite.jpg'
        saudacao = 'Boa noite'
        window.document.body.style.backgroundColor = '#5442a8'
    }

    msg.innerHTML = `<p>${saudacao}. Agora são ${hora} horas.</p>`

}