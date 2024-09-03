class User {
    // define the properties
    constructor(name,course,enrolmentDate){
        this.name = name
        this.course = course
        this.enrolmentDate = enrolmentDate
    }

    // Method
    getAgeWithAlmaBetter(){
        const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
        return `${this.name} has been studying the ${this.course} course for the last ${age} months`
    }

    // Method
    updateEnrolment(newDate){
        this.enrolmentDate = newDate
        console.log("The user enrolment has been updated successfully")
    }
}

const user1 = new User('Vikash','data science','2022-01-01')
const user2 = new User('Chirag','web dev','2024-01-01')
console.log(user1.getAgeWithAlmaBetter())
user2.updateEnrolment('2024-06-01')
console.log(user2.getAgeWithAlmaBetter())

// Extend class
class Alumni extends User {
    constructor(name,course,enrolmentDate,graduationDate){
        super(name,course,enrolmentDate)
        this.graduationDate = graduationDate
    }

    sendAlumniMeetMail(){
        console.log("You have been invited")
    }
}

Alumni.prototype.invitetoParty = function(){
    console.log("You have been invited for meet up party")
}

const alumni1 = new Alumni('Vikash','data science','2022-01-01','2023-10-01')
alumni1.updateEnrolment('2022-10-01')
console.log(alumni1.invitetoParty())