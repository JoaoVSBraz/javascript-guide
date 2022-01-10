/*
let wButton = document.querySelectorAll('button')[0]

wButton.addEventListener('click', handleClick)

function handleClick() {
    alert('Clicked')
}

outra forma comum de executar uma função num ouvinte de eventos é com uma função anônima

aButton.addEventListener('click', function(){alert('Clicked')})
*/

let numberOfDrumButtons = document.querySelectorAll('.drum').length

for(let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        var buttonTextoContent = this.textContent
        makeSound(buttonTextoContent)
    })
}

document.addEventListener('keydown', function(event) {

    makeSound(event.key)

})

function makeSound(key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break

        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break

        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break

        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break

        case 'j':
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
            break
        
        case 'k':
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
            break

        case 'l':
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
            break
    
        default:
            alert('Erro: Try again')
            break
    }
}