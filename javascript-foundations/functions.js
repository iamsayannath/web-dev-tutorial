// // write a function to calculate of a number
// function calculatePower(num,pow){
//     return num**pow
// }

// what is a function - a function reprsents some operation where it takes some input, does something on the input, return some output

// Write a function which takes two parameters - number, power
const calculatePower = (number,power) => {
    number**power
}
const cubeOfThree = Math.round(calculatePower(7,0.5))
// console.log(cubeOfThree)


// Write a function which will generate a random password of a defined length
const someValue = calculatePower(8,2)
console.log(someValue)

// What else do we need
const allowedLength = 10
const includeLowerCase = true
const includeUpperCase = false
const includeNumbers = true
const includeSymbols = false

function generateRandomPassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    
    // Define all my characters
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChars = lowerCaseChars.toUpperCase()
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()-+=-,.;:'|{}[]"

    let allowedChars = ""
    let password = ""

    //Update our allowedChars
    allowedChars += includeLowerCase ? lowerCaseChars : ""
    allowedChars += includeUpperCase ? upperCaseChars : ""
    allowedChars += includeNumbers ? numbers : ""
    allowedChars += includeSymbols ? symbols :""
    

    //Let's do some basic checks
    if (length <= 0){
        console.log("Need to provide length greater than 0")
    }

    if (allowedChars === ""){
        console.log("hey at least include some string character")
    }

    // Write the main logic here
    // Iterate as many times as is the length of allowed password
    for(i=0; i < length;i++){

        // generate random index, floor will give the greatest integer less than a particular value
        // draw a random element/character from my allowedChars
        const randomIndex = Math.floor(Math.random()*allowedChars.length)
        password += allowedChars[randomIndex]
    }

    return password
}

// to generate a password
const password = generateRandomPassword(allowedLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols)
console.log(`The generated password is ${password}`)

// Write a function to generate IPv4

