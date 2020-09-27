//Object property shorthand

const name = 'Manvi'

const userAge = 20

const user = {
    name,
    // name: name, if property name is as same the variable name we can simple write the name .
    age: userAge,
    location: 'Chandigarh'
}

console.log(user)

// Object Destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label;
// const stock = product.stock;

//Destructuring syntax:- rather than writing so many line we can simply write :-

// Destructuring standard object outside the function
// const { label, stock } = product    //the invidual variable of same name  goes b/w the braces
// const { label: productLabel, stock, rating = 5 } = product;   // if you want to change the variable name you can simple do

// console.log(productLabel)
// console.log(stock)
// console.log(rating)             // you can only use default value if there is no property name matching in the product.

// function arguments destructuring

// Destructuring if object is an argument

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('selling',product)