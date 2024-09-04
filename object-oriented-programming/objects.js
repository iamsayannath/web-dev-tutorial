// Let's create an object literal

const myArray = [1,2,3,4,5]
const myStr = "hello"

// Object literal
const user1 = {
    // Properties
    name : 'Chirag Bhardwaj',
    course:'web dev',
    enrolmentDate:'2023-10-01',

    //Add some methods
    getAgeWithAlmaBetter : function() {
                const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
                return `${this.name} has been studying the ${this.course} course for the last ${age} months`
            }
}

const user2 = {
    // Properties
    name : 'Jamil Akhtar',
    course:'data science',
    enrolmentDate:'2024-06-01',

    //Add some methods
    getAgeWithAlmaBetter : function() {
                const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
                return `${this.name} has been studying the ${this.course} course for the last ${age} months`
            }
}

console.log(user1.getAgeWithAlmaBetter())
console.log(user2.getAgeWithAlmaBetter())




















// const user1 = {
//     name:'Vikash Srivastava',
//     course:'data science',
//     enrolmentDate : '2022-02-01',

//     getAgeWithAlmaBetter:  function() {
//         const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
//         return `${this.name} has been studying the ${this.course} for the last ${age} months`
//     }
// }

// const user2 = {
//     name:'Vivek Srivastava',
//     course:'web-dev',
//     enrolmentDate : '2023-10-01',

//     getAgeWithAlmaBetter:  function() {
//         const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
//         return `${this.name} has been studying the ${this.course} for the last ${age} months`
//     }
// }

// console.log(user1.getAgeWithAlmaBetter())
// console.log(user2.getAgeWithAlmaBetter())