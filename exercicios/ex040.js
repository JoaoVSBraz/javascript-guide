function sum(num1, num2) {
    return num1 + num2
}

function minus(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2
}

function calculator(num1, num2, operator) {
    return operator(num1, num2)
}

console.log(calculator(1, 2, sum))