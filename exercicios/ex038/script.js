function dice() {
    let dice1 = Math.ceil(Math.random() * 6)
    let dice2 = Math.ceil(Math.random() * 6)

    let firstDice = document.querySelector('.img1')
    let secondDice = document.querySelector('.img2')
    let result = document.querySelector('#result')
    
    // first form
    switch (dice1) {
        case 1:
            firstDice.setAttribute('src', 'images/dice1.png')
            break;

        case 2:
            firstDice.setAttribute('src', 'images/dice2.png')
            break

        case 3:
            firstDice.setAttribute('src', 'images/dice3.png')
            break

        case 4:
            firstDice.setAttribute('src', 'images/dice4.png')
            break

        case 5:
            firstDice.setAttribute('src', 'images/dice5.png')
            break

        case 6:
            firstDice.setAttribute('src', 'images/dice6.png')
            break
    
        default:
            alert('Error: Try again')
            break;
    }

    // second form
    for(let i = 1; i <= 6; i++) {
        if (dice2 === i) {
            secondDice.setAttribute('src', `images/dice${i}.png`)
        }
    }

    if (dice1 === dice2) {
        result.textContent = 'DRAW'
    }
    else if (dice1 > dice2) {
        result.textContent = 'Player 1 Wins!'
    }
    else if (dice2 > dice1) {
        result.textContent = 'Player 2 Wins!'
    }

}