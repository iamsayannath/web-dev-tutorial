// What is an array? - array is an ordered collection of elements where each element is characterised by two info - value, index


/**
products = [0 : 'Jeans',1:'Trousers,2:'Shirt']
**/
// console.log(products)
// console.log(typeof products);

// const user = {
//     name:'Vikash',
//     age:30,
//     city: 'Bengaluru'
// }
// console.log(user)
// console.log(typeof user)

// Array methods to discuss 
// What are methods ? Methods are special functions which act on a entity of a particular type/class
// length is a property/attributes
// console.log(products.length)
const productCatalog = [
    {name:'Umbrella',quantity : 54, price: 300},
    {name:'Monitor', quantity : 20, price : 10000},
    {name:'Fridge', quantity : 10, price : 15000},
    {name:'Phone', quantity : 50, price : 25000}
]

// push - adds element(s) to the end of the array and returns the length of the new array
const products = ['Jeans','Trousers','Shirt','Socks','Hat'] 
const updatedCatalogSize = products.push('T-Shirts','Spectacles','Something')

// console.log(products)
// console.log(`The updated number of products in our catalog is ${updatedCatalogSize}`)

// pop method removes the last element of the array
const deletedElement = products.pop()
// console.log(products)
// console.log(deletedElement)
// products.push(deletedElement)
// console.log(products)


// forEach
const userEmails = ['Vikash@almabetter.com','ABC@example.com','XYZ@sample.com']

// // function to return lowercase version of an email
// function convertEmailToLowerCase(email){
//     console.log(email.toLowerCase())
// }

// // Our objective is to clean up the emails
// // userEmails.forEach(convertEmailToLowerCase)

// userEmails.forEach(email => {
//     console.log(email.toLowerCase())
// })

// Create a function to send an email notification  to these userEmails
// function sendEmail(email){
//     // Call some service to send an email
//     // email handler - invoking AWS lambda functions
//     console.log(`Sending email to the user : ${email}`)
// }
// // forEach takes in a callback function 
// userEmails.forEach(sendEmail)

// shift 
// products.unshift()


//indexOf and lastIndexOf



//unshift


// map - map an operation to each element of the array defined by the callback function - predefined function or arrow function
// map returns an array with the transformed elements
// const updatedUserEmails = userEmails.map((value,index,arr) => {
//     return value.toLowerCase()
// })
// console.log(updatedUserEmails);
// console.log(userEmails)

// // forEach does not return an array
// userEmails.forEach((email,index) => {
//     console.log(`The value of the element at index ${index} is : ${email}`)
//     // console.log(`My array is`)
// })

// console.log(userEmails)

// Create an array with a defined size
// const myArray = Array(5)
// console.log(myArray.length)
// myArray[0] = 30 // Update the element at index 0 with value 30
// console.log(myArray)

// filter
// const myNumbers = [10,20,25,30,40,50,60,70,80,90,100, 150]
// const multiplesOfTwentyFive = myNumbers.filter((num,index,array) => num%25 == 0)
// console.log(multiplesOfTwentyFive)

// filter on an array of objects
// Create a variable which stores information about products in your inventory


// filter out those products in our catalog which are surplus ( > 15)
// const surplusProducts = productCatalog.filter((product) => product.quantity > 15)
// console.log(surplusProducts)


// Try to add a Number to an Array
// console.log([10] + [10,20,30])
// console.log([10].toString()  + [10,20,30].toString())
// console.log( 2 + '2')
// console.log( String(2) + '2')
// console.log( 2 - '2')
// console.log(2 - Number('2'))
// console.log(products.slice(-3))


// reduce
// const inventoryPrice =productCatalog.reduce((accumulator,product,index,array) => 
//         accumulator + product.price*product.quantity,0)
// console.log(`The total monetary size of my inventory is ${inventoryPrice}`)
// // slice

const yourNumbers = [10,2,3,4,5,6]
// get the cumulated product of yourNumbers
// const cumulatedProduct = yourNumbers.reduce((cumProd,num) => cumProd**0.5)
// console.log(cumulatedProduct)

const names = ['Jamil','Abhishek','Rajnish','Miral']
const combinedNames = names.reduce((acc,name) => acc + ' ' + name)
// console.log(combinedNames)

// slice method
const numberSlice = yourNumbers.slice(-2,-5)
// console.log(yourNumbers)
// console.log(numberSlice)


// Negative indexing - 
// -1 - last element, -2 - second last element, -3 - third last elemen
// console.log(yourNumbers[-4])


// splice - remove multiple elements by specifying start index and the count of elements to be deleted, we can also
// add additional elements
const deletedElements = yourNumbers.splice(2,1,100,200)
// console.log(deletedElements)
// console.log(yourNumbers)


// fill method
// create an array of first 100 natural numbers
const myArray = Array(10).fill(0).map((value,index) => index + 1)
// console.log(myArray)

// console.log(myArray)

// shift method
const deleted = myArray.shift()
// console.log(deleted)
// console.log(myArray)

// unshift method
const arrayLength = myArray.unshift(100,200)
// console.log(arrayLength)
// console.log(myArray)


// concat
const firstDeckOfCards = ['9H','10C','AS','4D','3C','6H','KD']
const secondDeckOfCards = ['5H','QC','2S','5D','9C','6H','JD']

const allDeckOfCards = firstDeckOfCards.concat(secondDeckOfCards)
// console.log(firstDeckOfCards)
// console.log(secondDeckOfCards)
// console.log(allDeckOfCards)

// create a shallow copy of an array using the 
const deckCopy = allDeckOfCards.concat()
deckCopy.push('Joker')
// console.log(deckCopy)
// console.log(allDeckOfCards)


// spread operator
const anotherDeck = [...deckCopy]
// console.log(anotherDeck)

// object destructuring


// includes
const isFourOfClubs = anotherDeck.includes('9C')
// console.log(isFourOfClubs)


// sort method
const arrayNumbers = [100,200,30,45,67,500,1000]

// numeric sort
const sortedArray = arrayNumbers.sort((a,b) => b - a) // internally the numbers are converted to string : '10','1000','200'
// console.log(sortedArray)
console.log(firstDeckOfCards)
const sortedDeck = firstDeckOfCards.sort()
console.log(sortedDeck)


// join
const joinedDeck = deckCopy.join(',')
// console.log(deckCopy)
// console.log(joinedDeck)

// ASCII code
const studentNames = ['Ankit','Abhishek','Vikash','Chirag']
console.log(studentNames.sort())

// every


// check if I have at least a threshold stock
const isEnoughStockForEverything = productCatalog.every((product) => product.quantity > 10)
console.log(isEnoughStockForEverything)
console.log(productCatalog)

// some
const isEnoughStockForSomething = productCatalog.some((product) => product.quantity > 10)
// console.log(isEnoughStockForSomething)


// find the product name whose price  = 25000
// console.log(productCatalog.find((product) => product.price === 25000).name)

// create a new array - constructor method
const ourArray = new Array(10)
// console.log(ourArray)

// Methods are special functions which act on an object of specific type or class

// new allows us to create a new instance of a class or function
const newObject = new Object()
// console.log(newObject)

const emptySet = new Set()
// console.log(emptySet)

// from
const myString = 'abcedefgh'
// console.log(Array.from(myString))


// isArray
// console.log(Array.isArray(newObject))


// flat - this is useful when you have nested dictionaries
const arrayOfArrays = [[1,2],[[[34,5]],[[64,5]]],[[10,90]]]

// flatten the array upto depth 1 - depth is essentially the depth of nesting
const flatArray = arrayOfArrays.flat(Infinity)
console.log(flatArray)

//indexOf
console.log(deckCopy.indexOf(4))

// flatMap - a combination of map and flat
const flatMapArray = arrayOfArrays.flatMap((element) => element[0])
console.log(flatMapArray)
console.log([1,[[34,5]],[10,90]].flat(1));