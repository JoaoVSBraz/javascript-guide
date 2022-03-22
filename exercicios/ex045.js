// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score.
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy

// Test data:
// - Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// - Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// - Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


// SOLUTION USING OBJECTS
// DATA

/*
const dolphins = {
    firstScore: 96,
    secondScore: 108,
    thirdScore: 89,
    avg: function() {
        return (dolphins.firstScore + dolphins.secondScore + dolphins.thirdScore) / 3
    }
}

const koalas = {
    firstScore: 88,
    secondScore: 91,
    thirdScore: 110,
    avg: function() {
        return (koalas.firstScore + koalas.secondScore + koalas.thirdScore) / 3
    }
}

// CALC DATA
console.log('-----------------CALC DATA-----------------');
if (dolphins.avg() > koalas.avg()) {
    console.log(`Dolphins has score of ${dolphins.avg()} and Koalas has score of ${koalas.avg()}. Dolphins won the trophy!\n`);
} else {
    console.log(`Koalas has score of ${koalas.avg()} and Dolphins has score of ${dolphins.avg()}. Koalas won the trophy!\n`);
}

// BONUS DATA 1

const dolphinsBonusOne = {
    firstScore: 97,
    secondScore: 112,
    thirdScore: 101,
    avg: function() {
        return (dolphinsBonusOne.firstScore + dolphinsBonusOne.secondScore + dolphinsBonusOne.thirdScore) / 3
    }
}

const koalasBonusOne = {
    firstScore: 109,
    secondScore: 95,
    thirdScore: 123,
    avg: function() {
        return (koalasBonusOne.firstScore + koalasBonusOne.secondScore + koalasBonusOne.thirdScore) / 3
    }
}

// CALC DATA BONUS 1
console.log('-----------------CALC DATA BONUS 1-----------------');
if (dolphinsBonusOne.avg() || koalasBonusOne.avg() > 100) {
    if (dolphinsBonusOne.avg() > koalasBonusOne.avg()) {
        console.log(`Dolphins has score of ${dolphinsBonusOne.avg()} and Koalas has score of ${koalasBonusOne.avg()}. Dolphins won the trophy!\n`);
    } else {
        console.log(`Koalas has score of ${koalasBonusOne.avg()} and Dolphins has score of ${dolphinsBonusOne.avg()}. Koalas won the trophy!\n`);
    }
} else {
    console.log('Neither Dolphins nor Koalas reached the minimum score of 100\n');
}

// DATA BONUS 2

const dolphinsBonusTwo = {
    firstScore: 97,
    secondScore: 112,
    thirdScore: 101,
    avg: function() {
        return (dolphinsBonusTwo.firstScore + dolphinsBonusTwo.secondScore + dolphinsBonusTwo.thirdScore) / 3
    }
}

const koalasBonusTwo = {
    firstScore: 109,
    secondScore: 95,
    thirdScore: 106,
    avg: function() {
        return (koalasBonusTwo.firstScore + koalasBonusTwo.secondScore + koalasBonusTwo.thirdScore) / 3
    }
}

// CALC DATA BONUS 2
console.log('-----------------CALC DATA BONUS 2-----------------');
if (dolphinsBonusTwo.avg() || koalasBonusTwo.avg() > 100) {
    if (dolphinsBonusTwo.avg() > koalasBonusTwo.avg()) {
        console.log(`Dolphins has score of ${dolphinsBonusTwo.avg()} and Koalas has score of ${koalasBonusTwo.avg()}. Dolphins won the trophy! \n`);
    } else if (dolphinsBonusTwo.avg() === koalasBonusTwo.avg()) {
        console.log(`Dolphins has score of ${dolphinsBonusTwo.avg()} and Koalas has score of ${koalasBonusTwo.avg()}. Both teams has the same score. It's a draw! \n`);
    } else {
        console.log(`Koalas has score of ${koalasBonusOne.avg()} and Dolphins has score of ${dolphinsBonusOne.avg()}. Koalas won the trophy!\n`);
    }
} else {
    console.log('Neither Dolphins nor Koalas reached the minimum score of 100\n');
}
*/

// SOLUTION USING ARRAYS

// DOLPHINS DATA [96, 108, 89]
// KOALAS DATA [88, 91, 110]

// DOLPHINS DATA BONUS 1 [97, 112, 101]
// KOALAS DATA BONUS 1 [109, 95, 123]

// DOLPHINS DATA BONUS 2 [97, 112, 101]
// KOALAS DATA BONUS 2 [109, 95, 106]

// DATA
const arrDolphins = [96, 108, 89]
const arrDolphinsAvg = (arrDolphins[0] + arrDolphins[1] + arrDolphins[2]) / 3

const arrKoalas = [88, 91, 110]
const arrKoalasAvg = (arrKoalas[0] + arrKoalas[1] + arrKoalas[2]) / 3

console.log('--------------- CALC DATA ---------------\n');
// CALC DATA
if (arrDolphinsAvg || arrKoalasAvg > 100) {
    if (arrDolphinsAvg > arrKoalasAvg) {
        console.log(`Dolphins has the score of ${Math.trunc(arrDolphinsAvg)} and Koalas has the score of ${Math.trunc(arrKoalasAvg)}. Dolphins won the trophy!\n`);
    } else if (arrDolphinsAvg === arrKoalasAvg) {
        console.log(`Dolphins has the score of ${Math.trunc(arrDolphinsAvg)} and Koalas has the score of ${Math.trunc(arrKoalasAvg)}. It's a draw!\n`);
    } else {
        console.log(`Koalas has the score of ${Math.trunc(arrKoalasAvg)} and Dolphins has the score of ${Math.trunc(arrDolphinsAvg)}. Koalas won the trophy!\n`);
    }
} else {
    console.log('Neither Dolphins nor Koalas reached the minimum score of 100\n');
}

// DATA BONUS 1
const arrDolphinsBonusOne = [97, 112, 101]
const arrDolphinsBonusOneAvg = (arrDolphinsBonusOne[0] + arrDolphinsBonusOne[1] + arrDolphinsBonusOne[2]) / 3

const arrKoalasBonusOne = [109, 95, 123]
const arrKoalasBonusOneAvg = (arrKoalasBonusOne[0] + arrKoalasBonusOne[1] + arrKoalasBonusOne[2]) / 3

console.log('--------------- CALC DATA BONUS 1 ---------------\n');
// CALC DATA BONUS 1
if (arrDolphinsBonusOneAvg || arrKoalasBonusOneAvg > 100) {
    if (arrDolphinsBonusOneAvg > arrKoalasBonusOneAvg) {
        console.log(`Dolphins has the score of ${Math.trunc(arrDolphinsBonusOneAvg)} and Koalas has the score of ${Math.trunc(arrKoalasBonusOneAvg)}. Dolphins won the trophy!\n`);
    } else if (arrDolphinsBonusOneAvg === arrKoalasBonusOneAvg) {
        console.log(`Dolphins has the score of ${Math.trunc(arrDolphinsBonusOneAvg)} and Koalas has the score of ${Math.trunc(arrKoalasBonusOneAvg)}. It's a draw!\n`);
    } else {
        console.log(`Koalas has the score of ${Math.trunc(arrKoalasBonusOneAvg)} and Dolphins has the score of ${Math.trunc(arrDolphinsBonusOneAvg)}. Koalas won the trophy!\n`);
    }
} else {
    console.log('Neither Dolphins nor Koalas reached the minimum score of 100\n');
}

// DATA BONUS 2
const arrDolphinsBonusTwo = [97, 112, 101]
const arrDolphinsBonusTwoAvg = (arrDolphinsBonusTwo[0] + arrDolphinsBonusTwo[1] + arrDolphinsBonusTwo[2]) / 3

const arrKoalasBonusTwo = [109, 95, 106]
const arrKoalasBonusTwoAvg = (arrKoalasBonusTwo[0] + arrKoalasBonusTwo[1] + arrKoalasBonusTwo[2]) / 3

console.log('--------------- CALC DATA BONUS 2 ---------------\n');
// CALC DATA BONUS 2
if (arrDolphinsBonusTwoAvg || arrKoalasBonusTwoAvg > 100) {
    if (arrDolphinsBonusTwoAvg > arrKoalasBonusTwoAvg) {
        console.log(`Dolphins has the score of ${Math.trunc(arrDolphinsBonusTwoAvg)} and Koalas has the score of ${Math.trunc(arrKoalasBonusTwoAvg)}. Dolphins won the trophy!\n`);
    } else if (arrDolphinsBonusTwoAvg === arrKoalasBonusTwoAvg) {
        console.log(`Dolphins has the score of ${Math.trunc(arrDolphinsBonusTwoAvg)} and Koalas has the score of ${Math.trunc(arrKoalasBonusTwoAvg)}. It's a draw!\n`);
    } else {
        console.log(`Koalas has the score of ${Math.trunc(arrKoalasBonusTwoAvg)} and Dolphins has the score of ${Math.trunc(arrDolphinsBonusTwoAvg)}. Koalas won the trophy!\n`);
    }
} else {
    console.log('Neither Dolphins nor Koalas reached the minimum score of 100\n');
}
