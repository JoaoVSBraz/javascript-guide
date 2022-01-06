function showString() {

    // Get the user name
    let userName = prompt('Qual é o seu nome?')

    // Divide the first letter to change it's size
    let firstLetter = userName.slice(0, 1)

    // Turn the first letter into uppercase
    let firstLetterUppercase = firstLetter.toUpperCase()

    // Get the rest of the name letters
    let restOfName = userName.slice(1, userName.length)

    // Concatenate the first letter with the rest of the name
    let fullname = firstLetterUppercase + restOfName.toLocaleLowerCase()
    
    // Show an alert greeting
    alert('Hello, ' + fullname)
    
    // There are others ways to do the same we done in this exercise. The objective here was to break a big problem into small pieces to achieve our goals
}