// Generate a random number between 0 to 255
// This is a function expression
const generateRandomNumber = function() {
const random = Math.floor(Math.random()*255)
return random
}

// Arrow function

// function generateRandomNumber() {
//     const random = Math.floor(Math.random()*255)
//     return random
// }


let ipAddress = generateRandomNumber() + "." + generateRandomNumber() + "." + generateRandomNumber() + "." + generateRandomNumber()
console.log(ipAddress);

//IIFE - Immediately Invoked Function Expression
(function() {
	let str = "Hello AlmaBetter Learner";
    console.log(str);
})();

// let's write a function for finding the factorial of a number
function factorial(number) {
    // Base case
    if (number === 1){
        return 1
    }
    return number*factorial(number-1)
}

console.log(factorial(15))
//Main idea = n! = n*(n-1)!
// f(n) = n!
// f(n) = n*(n-1)! = n*f(n-1)
// f(n) = af(n-1) + bf(n-2) + cf(n-3) + .....
// fib(n) = fib(n-1) + fib(n-2)

function fibonacci(position){
    //base case
    if(position===1){
        return 0
    }
    if(position===2){
        return 1
    }

    return fibonacci(position - 1) + fibonacci(position - 2)
}

console.log(fibonacci(10))

// 0,1,1,2,3,5,8,13,21,34

const user = {
    firstName : 'Vikash',
    lastName : 'Srivastava',
    title: 'CTO'
}

console.log(user.lastName)