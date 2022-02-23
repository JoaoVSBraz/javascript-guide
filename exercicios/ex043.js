// Using map, forEach, filter and reduce methods

const data = [2, 8, 25, 50, 200]

// The map method pass through an array and return a new array.

// function double(x) {
//     return x * 2
// }

// const mapArray = data.map(double)
// console.log(mapArray)

// The forEach method also pass through an array, but don't return new array. So we need to create a new array and push each new element of the loop to that array.

// function double(x) {
//     return foreachArray.push(x * 2)
// }

// const foreachArray = []
// data.forEach(double)
// console.log(foreachArray)

// The filter method loop through an array and return all elements that matches with the filter criteria which is defined at the callback function passed inside the filter function.

// const filterArray = data.filter(function (num) {
//     return num > 10
// })

// console.log(filterArray)