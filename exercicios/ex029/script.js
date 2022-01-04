var firstPerson = document.getElementById('firstPerson')
var secondPerson = document.getElementById('secondPerson')
var result = document.getElementById('result')

function loveCalc() {
    let n = Math.random()
    n = Math.round(n * 100) 

    if (firstPerson.value.lengthlength == 0 || secondPerson.value.length == 0) {
        alert('ERROR: Please write 2 names')
    } else {

        result.innerHTML = `<p>The love between <strong>${firstPerson.value}</strong> and <strong>${secondPerson.value}</strong> is equal to ${n}%</p>`
    }
}



