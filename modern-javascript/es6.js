// var and let and const
// var is function scoped, let and const are block scoped
const myArray = Array(10)

function fetchUsers(){
    for (let i=0;i < 5;i++){
        console.log(i)
    }

    console.log(myArray)
}

// fetchUsers()


// Objects
const user = {
    name:"Vikash",
    age:30,
    speak: function(){
        console.log(this)
    }
}

// user.speak()

// this keyword
function getUsers(){
    console.log(this)
}

// getUsers()



// Arrow functions
const square = (num) => num**2
// console.log(square(5))



// map method




// Array destructuring
const array = [20,30,40]
const [firstElem,secondElem,,fourthElem] = array
console.log(firstElem,secondElem,fourthElem)


// Object derstructuring
const student = {
    name:"Vikash Srivastava",
    isGraduated:true,
    firstName:"Vikash"
}

const {name, firstName, isGraduated} = student
// console.log(name,firstName,isGraduated)



// Spread operator - useful for copying contents of an array
const firstListOfUsers = ['Vikash', 'Tom', 'Chirag'];
const secondListOfUsers = ['Jamil',...firstListOfUsers,'Akarsh']
console.log(secondListOfUsers);  // Output: [1, 2, 3, 4, 5]

const alumni = {...student,graduationDate:"2024-01-01"}
console.log(Object.values(alumni))


// rest operator - arranges some values into an array
function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
  }

console.log(sum(1, 2, 3, 40,60, 5))

function combineNames(...names){
    return names.reduce((acc,name) => acc + name,"")
}

console.log(combineNames('Vikash','Jamil','Tom'))

console.log({...firstListOfUsers})
console.log([...firstListOfUsers])

// modules and exports
const payload = {
    id:1,
    content:"data"
}

const updatedPayload= {...payload,requestedBy:"Vikash"}
console.log(updatedPayload)
console.log(...'Vikash')
