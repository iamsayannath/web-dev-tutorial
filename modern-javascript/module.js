export default class User {
    // define the properties
    constructor(name,course,enrolmentDate){
        this.name = name
        this.course = course
        this.enrolmentDate = enrolmentDate
    }

    // // Method
    getAgeWithAlmaBetter(){
        const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
        return `${this.name} has been studying the ${this.course} course for the last ${age} months`
    }

    // // Method
    updateEnrolment(newDate){
        this.enrolmentDate = newDate
        console.log("The user enrolment has been updated successfully")
    }
}

// // We can actually define these methods in the prototype
// User.prototype.getAgeWithAlmaBetter = function(){
//      const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
//     return `${this.name} has been studying the ${this.course} course for the last ${age} months`
// }

// User.prototype.updateEnrolment = function(newDate){
//     this.enrolmentDate = newDate
//     console.log("The user enrolment has been updated successfully")
// }



// Create a new class called Alumni
export class Alumni extends User {
    constructor(name,course,enrolmentDate,graduationDate){
        super(name,course,enrolmentDate)
        this.graduationDate = graduationDate
    }

    sendAlumniMeetMail(){
        console.log("You have been invited")
    }
}