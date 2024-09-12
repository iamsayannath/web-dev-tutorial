// app.js
// Default and named exports
// Default exports do not require {} while importing while named exports need to be defined inside the {}
import add,{pi,subtract,multiply} from './math.js'
import User,{Alumni} from './module.js'
import express from 'express'

const app = express()
app.listen(() => console.log("Listening on port 3000"))

console.log(pi);  // Output: 3.14159
console.log(add(2, 3));  // Output: 5
console.log(multiply(2, 3));  // Output: 6
console.log(subtract(5,6));

const user1 = new User('Vikash','data science','2022-01-01')
const alumni1 = new Alumni('Chirag','web dev','2023-01-01','2024-05-01')
console.log(user1.getAgeWithAlmaBetter())
console.log(alumni1.getAgeWithAlmaBetter());

