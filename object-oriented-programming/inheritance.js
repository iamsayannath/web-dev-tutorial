function User(name, course, enrolmentDate){
    this.name = name
    this.course = course
    this.enrolmentDate=enrolmentDate

}


// getAgeWithAlmaBetter
User.prototype.getAgeWithAlmaBetter = function(){
    const age = Math.floor((new Date() - new Date(this.enrolmentDate)) / (1000 * 60 * 60 * 24*30));
    return `${this.name} has been studying the ${this.course} for the last ${age} months`
}

// alumni constructor
function Alumni(name,course,enrolmentDate,graduationDate){
    User.call(this,name,course,enrolmentDate)
    this.graduationDate = graduationDate
}

// Inherit prototype
Alumni.prototype = Object.create(User.prototype)
Alumni.prototype.constructor = Alumni

const alumni1 = new Alumni('Hardik','web dev','2024-02-01','2024-08-01')
console.log(alumni1.getAgeWithAlmaBetter())
console.log(Object.getPrototypeOf(alumni1))