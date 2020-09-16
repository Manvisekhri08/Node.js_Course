const fs = require('fs')
const { title } = require('process')

// const book = {
//     title: 'Harry Potter',
//     author: 'J.K. Rowling'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString();
// console.log(dataJson)
// const data = JSON.parse(dataJson)
// console.log(data.author)


// console.log(bookJson)

// const bookParse = JSON.parse(bookJson)

// console.log(bookParse.author)

// Challenge
const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson)
data.name = 'Manvi'
data.age = 20
const changeJson = JSON.stringify(data)
fs.writeFileSync('1-json.json', changeJson)
//console.log(dataJson)