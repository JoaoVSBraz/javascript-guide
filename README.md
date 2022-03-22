# Javascript Guide

This repository is a full guide of my studies about Javascript. Feel free to use and explore. You can go to **notes.md** archive to read more about what is in the next lines in more details.

![](images/javascript.gif)

- [A brief history](#a-brief-history)
- [Operators](#operators)
- [Variables](#variables)

## A brief history

Javascript was created by Brendan Eich of the Netscape Entreprise in 1995. It's a high-level interpreted and multi-paradigms language that supports the paradigms of object-oriented, functional and structured programming. Furthermore, It has dinamic typing and figure on top of world wide web alongside HTML and CSS.

Soon after the release of the Javascript language, other Javascript-based languages emerged such as Internet Explorer's JScript. To prevent the internet from becoming a place without rules, the Ecma organization created a standard for the Javascript language called ECMAScript. Some versions were released until 2015 when new versions of the standard started to occur annually.

The biggest difference between Javascript and other programming languages is that Javascript is the only programming language interpreted by default by all internet browsers. Moreover, supported by the NodeJS which brought JS out of browsers to the backend world, it made the language to won more and more space. The result of it, is that Javascript is currently the most popular programming language.

## Operators

Unlike others languages, Javascript has some operators which can test conditions more efficiently. These operators are equality and stric equality. The diference between these two is that the first one (equality) checks if the operands have the same value while the second (stric equality) checks if the operands have the same value AND the same data type.

```js
console.log(1 === 1)
// expected output: true

console.log('hi' === 'hi')
// expected output: true

console.log('1' === 1)
// expected output: false

console.log(0 === false)
// expected output: false
```

## Variables

Variables are spaces at computer memory that stores data. It can be simple variables or compound variables. Javascript has three types of variables: **var**, **let** and **const**.

The **var** variable type it is present since its creation in 95. It has global scope because the hoisting process which hoist/elevates the variables to first lines of our script. This means that any declaration of a var variable will exists even if we call it before your definition.

```js
console.log(x)
// expected output: undefined. 
// The variable exist but its value still not read

var x = 'Hello world'

console.log(x)
// expected output: Hello World
```

> Note that we called the variabe X before its initialization with the console.log. This works because the hoisting process. But keep in mind that the value will be empty or, **undefined**, until its definition in the middle of our code example.

The **let** and **const** variable types was emerged with the Ecmascript Standard 6 especification. None of these variable types are affected by hoisting. Its scope is local, so they only exist inside your block of code.

```js
console.log(x)
// expected value: x is not defined

function greeting() {
    let x = 'Hi'
}

console.log(x)
// expected value: x is not defined
```

None of the console.logs above will print the value of x because it is calling the variable x out of its scope. This means that the variable x only is visible inside the greeting function.

The most important difference between **let** and **const** is that let variables can be modified while const variables are constants and can't be modified.