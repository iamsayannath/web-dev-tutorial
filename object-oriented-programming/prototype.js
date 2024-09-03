function User(name, course, enrolmentDate){
    this.name = name
    this.course = course
    this.enrolmentDate=enrolmentDate
    
}
// all objects have their prototypes by default in JS
// getAgeWithAlmaBetter
User.prototype.getAgeWithAlmaBetter = function(){
    const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
    return `${this.name} has been studying the ${this.course} course for the last ${age} months`
}

// Add another method called updateEnrolment to my prototype
User.prototype.updateEnrolmentDate = function(newDate){
    this.enrolmentDate = newDate
    console.log("The user enrolment has been updated successfully")
}


// update the enrolment date

const user1 = new User('Vikash','data science','2022-02-01');
const user2 = new User('Vivek','web dev','2023-10-01');
console.log(user1.getAgeWithAlmaBetter())
user1.updateEnrolmentDate('2023-05-01')
console.log(user1.getAgeWithAlmaBetter())
console.log(user1)

console.log(Object.getPrototypeOf(user1))