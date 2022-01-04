function getMilk(money, milkValue) {
    console.log('Go to the market')
    console.log('Buy ' + bottlesOfMilk(money, milkValue) + ' bottles of milk')
    console.log('Back to home with the change amount')
    return change(money, milkValue)
}

function bottlesOfMilk(money, milkValue) {
    return Math.floor(money / milkValue)
}

function change(money, milkValue) {
    let change = money % milkValue
    return change
}

console.log('Hello, Master. Here are your change: ' + getMilk(10, 3))