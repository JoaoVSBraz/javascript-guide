// Using map, forEach, filter and reduce methods

const data = [2, 8, 25, 50, 200]

const emojipedia = [
    {
        id: 1,
        emoji: "💪",
        name: "Tense Biceps",
        meaning:
            "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
        id: 2,
        emoji: "🙏",
        name: "Person With Folded Hands",
        meaning:
            "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
        id: 3,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning:
            "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    },
    {
        id: 4,
        emoji: "😀",
        name: "Grinning Face",
        meaning:
            "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor."
    }
]

// The map method pass through an array and return a new array.

// const mapArray = data.map(element => element * 3)
// console.log(mapArray)

// The forEach method also pass through an array, but don't return new array. So we need to create a new array and push each new element of the loop to that array.

// const foreachArray = []
// data.forEach( num => foreachArray.push(num * 2))
// console.log(foreachArray)

// The filter method loop through an array and return all elements that matches with the filter criteria which is defined at the callback function passed inside the filter function.

// const filterArray = data.filter( num => num > 10)

// console.log(filterArray)

// The reduce method loop through an array to calculate something between two numbers. The first number is the acumulator and the second number is the next number which will be used to do a sum, multiply, divison, etc.

// const reduceFunc = data.reduce((acumulator, currentNumber) => acumulator + currentNumber)

// console.log(reduceFunc)

// let number = 0

// data.forEach(currentNumber => number += currentNumber)

// console.log(number);

// The find method loop through an array to find a number that matches with the conditions and, once find, it stops the iteration and return the element found.

// const findFunc = data.find(num => num > 10)

// console.log(findFunc)

// The findIndex method is similar to find, only with the difference that returns the index (array position) of the element found

// const findIndexMethod = data.findIndex(num => num > 10)

// console.log(findIndexMethod)

// Challenge

// Create a new array of emojipedia meanings with exactly 100 characters

// const emojiMeanings = emojipedia.map(element => element.meaning.substring(0, 100)
// )

// console.log(emojiMeanings)