function bmiCalculator(weight, height) {
    let bmi = weight / Math.pow(height, 2)
    return Math.round(bmi)
}

let john = bmiCalculator(65, 1.8)
console.log(john)