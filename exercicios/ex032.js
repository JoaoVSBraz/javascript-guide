let numbers = []
let count = 1

function fizzbuzz() {
    
    while (count < 50) {
        
        if (count % 3 === 0 && count % 5 === 0) {
            numbers.push('Fizzbuzz')
        }else  if (count % 5 === 0) {
            numbers.push('Buzz')
        }else if (count % 3 === 0) {
            numbers.push('Fizz')
        }else {
            numbers.push(count)
        }

        console.log(numbers)
        count++
    }
}

fizzbuzz()