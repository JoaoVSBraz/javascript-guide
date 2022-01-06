let content = document.getElementById('content')
let result = document.getElementById('result')

content.textContent = 'Conteúdo alterado pelo Javascript'
result.textContent = 'Texto com cor definida pelo Javascript'
result.style.color = 'red'

// getting and setting attributes
let link = document.querySelector('p a')
link.getAttribute('href')
link.setAttribute('href', 'www.bing.com')
console.log(link)