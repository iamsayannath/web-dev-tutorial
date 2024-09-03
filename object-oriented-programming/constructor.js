// function User(name, course, enrolmentDate){
//     this.name = name
//     this.course = course
//     this.enrolmentDate=enrolmentDate

//     this.getAgeWithAlmaBetter = function(){
//         const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
//         return `${this.name} has been studying the ${this.course} for the last ${age} months`
//     }
// }

// const user1 = new User('Vikash','data science','2022-02-01');
// const user2 = new User('Vivek','web dev','2023-10-01');
// console.log(user1.getAgeWithAlmaBetter())
// console.log(user2.getAgeWithAlmaBetter())

// We want to find a way to define a template to create multiple instances/objects of same types
function User(name,course,enrolmentDate){

    // set up the properties of my User constructor
    this.name = name.toUpperCase()
    this.course = course
    this.enrolmentDate = enrolmentDate

    // We can enable our objects with some behaviors/methods
    this.getAgeWithAlmaBetter = function(){
        const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
        return `${this.name} has been studying the ${this.course} course for the last ${age} months`
    }

    // A method to update enrolment date
    this.updateEnrolmentDate = function(newDate){
        this.enrolmentDate = newDate
        console.log("The user enrolment has been updated successfully")
    }
}

// let's create multiple users using the User constructor
const user1 = new User('Chirag Bhardwaj','web dev','2023-10-01')
const user2 = new User('Jamil Akhtar','data science','2024-06-01')

// update enrolment foir Chirag
user1.updateEnrolmentDate('2024-06-05')

console.log(user1.getAgeWithAlmaBetter())
console.log(user2.getAgeWithAlmaBetter())
