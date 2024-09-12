//Log the value in the variable myCourse - declaration is hoisted
// Some code here - 100 lines of code

//Declaring a variable
let myCourse = "Web Dev";
myCourse = "Data Science"
//Log the variable value
// console.log(myCourse);


//Create another variable
myName = "Vikash"
// console.log(myName)

/*

let myCourse = "Web Dev"
//Log the value in the variable myCourse - declaration is hoisted
console.log(myCourse);



//Log the variable value
console.log(myCourse);
*/

// Discuss some string methods
const myString = "Software Development"

// charAt method to find a charcter
const indexChar = myString.charAt(5)
console.log(indexChar)

// includes method 
const isDevPresent = myString.includes('Ware')
console.log(isDevPresent)

// indexof 
console.log(myString.lastIndexOf(' '))

// match some data via a regular expression 
// regex - it basically defines a way to construct string patterns
// structure of an email - email_name@email_domain.domain_type
// email_name - it should have alphabets, numbers, no space,.,_
// email_domain - it should be alphabets,numbers?
//domain_type - it should be at least two letters/alphabets
const emailRegex = /[a-zA-Z0-9#_.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}/g;
const emailData = "I have a list of emails of participants for our seminar - vikash@almabetter.com ,abc@example.com, xyz@sample.com"
const myEmails = emailData.match(emailRegex)
console.log(Array.from(myEmails).map((array) => array))

const phoneRegex = /\b[0-9]{10}\b/g; // \b indicates word boundary
const anotherString = "The contacts in my phone book are 7646238629, 7866434684, 764623657609, 72364763476"

// match 10 digit phone numbers
const phoneNumbers = anotherString.matchAll(phoneRegex)
console.log(Array.from(phoneNumbers).map((array) => array[0]))
