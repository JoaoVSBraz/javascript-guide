// window.document.getElementByTagName('h1')[0].style.color = 'red'
// O código acima está representado logo abaixo de forma simplificada através do uso do JQuery
// $('h1').css('color', 'red')

// Adicionando classe
// $('h1').addClass('teste')

// Removendo classe
// $('h1').removeClass('teste')

// Alterando texto
// $('h1').text('Hello')

// Alterando conteúdo html
// $('button').html('<em>Dont click me</em>')

// Alterando atributo
// $('a').attr('href', 'https://www.yahoo.com')

// Verificando classes
// console.log($('h1').attr('class'))

// Adicionando event listener
// $('h1').click(function () {
//     $('h1').css('color', 'purple')
// })

// FORMA PADRÃO DE ADICIONAR EVENT LISTENERS A VÁRIOS ELEMENTOS
// for (let i = 0; i < document.querySelectorAll('button').length; i++) {
//     const element = document.getElementsByTagName('button')[i];
//     console.log(element)
//     element.addEventListener('click', function () {
//         document.getElementsByTagName('h1')[0].style.color = 'purple'
//     })
// }

// FORMA DE ADICIONAR EVENT LISTENERS ATRAVÉS DE JQUERY
// $('button').click( function() {
//     $('h1').css('color', 'purple')
// })

// LER TECLAS DIGITADAS
// $(document).keydown(function(event) {
//     $('#result').text(event.key)
// })

// OUTRA FORMA DE OUVIR EVENTOS
// $('h1').on('mouseover', function() {
//     $('h1').css('color', 'purple')
// })

// ADICIONANDO ELEMENTOS ATRAVÉS DO JQUERY
// $('#result').before('<button>new</button>')
// $('#result').after('<button>new</button>')
// $('#result').prepend('<button>new</button>')
// $('#result').append('<button>new</button>')

// REMOVENDO ELEMENTOS
// $('button').remove()

// ESCONDENDO E MOSTRANDO ELEMENTOS
// $('h1').hide()
// $('h1').show()

// $('button').on('click', function() {
//     $('h1').toggle()
// })

// $('button').on('click', function() {
//     $('h1').fadeToggle()
// })

// $('button').on('click', function() {
//     $('h1').slideUp()
// })

// $('button').on('click', function() {
//     $('h1').slideDown()
// })

// $('button').on('click', function() {
//     $('h1').slideToggle()
// })