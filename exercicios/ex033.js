function whosPaying(names) {
    let elements = names.length
    let number = Math.random()
    number = Math.round(number * (elements - 1))
    
    return `${names[number]} is going to buy lunch today!`
}