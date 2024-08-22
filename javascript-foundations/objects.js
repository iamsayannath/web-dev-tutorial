// What are objects?
// Object literals, functions, arrays are alos objects

// Object literal
function userDetails() {
    const user = {
        // Define the properties
        firstName : 'Chirag',
        lastName : 'Bhardwaj',
        age : 22,
        email : 'chirag@gmail.com',
        // Create the methods which will define the behavior of the object
        callAttendance : function(message) {
            console.log(`The message sent by ${this.firstName} is: ${message} `)
        }
}
return user
}
userDetails().callAttendance("present")



const user = {
    // Define the properties
    firstName : 'Chirag',
    lastName : 'Bhardwaj',
    age : 22,
    email : 'chirag@gmail.com',
    // Create the methods which will define the behavior of the object
    callAttendance : function(message) {
         console.log(`The message sent by ${this.firstName} is: ${message} `)
    },
    sendEmail : function(message){
        console.log(`Sending email to ${this.email} with the message : ${message}`)
    }
    }
user.callAttendance('Present')
user.sendEmail("We have a class on Sunday")

// JSON - JavaScript Object Notation, useful data format for data interchange
// frontend can send a json data to a backend web server
// JSON can be an array or an object

// json.stringify() converts javascript object into a json string
// const jsonString = JSON.stringify(user)
// console.log(jsonString)
// console.log(typeof jsonString)

// // json.parse() to convert a json string back to a javascript object
// const parsedData = JSON.parse(jsonString)
// console.log(parsedData)
// console.log(typeof parsedData)

