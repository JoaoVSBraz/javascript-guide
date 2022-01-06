function AgeCalculator() {
    let dogAge = prompt("What is your dog's age?")
    let humanAge = ((Number(dogAge) - 2 ) * 4) + 21

    alert("Your dog's human age is " + humanAge + " years old")
}