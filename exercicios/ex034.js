function bottlesOfBeer() {
    let i = 100
    while (i > 0) {
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
        i--
        console.log(`Take one down and pass it around, ${i} bottles of beer on the wall.`)
    }
}
bottlesOfBeer()