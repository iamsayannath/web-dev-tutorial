

// if (role === 'admin'){
//     console.log('You have full access'); 
// }
// else if (role === 'editor') {
//     console.log('You can edit the content'); 
// }
// else if (role === 'viewer'){
//     console.log('You can view the content');
// }
// else if (role === 'guest'){
//     console.log('You have limited access');
    
// }
// else {
//     console.log('Role not recognized'); 
// }

// const role = "admin";
// // Alternative switch case statement for multiple else if blocks
// switch(role){
//     case 'admin':
//         console.log("You have full access")
//         break
//     case 'editor':
//         console.log("You have edit access")
//         break
//     case 'viewer':
//         console.log('You have view access');
//         break
//     case 'guest':
//         console.log('You have limited access');
//         break
//     default:
//         console.log('Role not recognised')
// }

// Convert this into a function
function handleUserRole(role){
    switch(role){
        case 'admin':
            return "You have full access"
        case 'editor':
            return "You have edit access"
        case 'viewer':
            return 'You have view access'
        case 'guest':
            return 'You have limited access'
        default:
            return 'Role not recognised'
    }
}

// console.log(handleUserRole('editor'));
// console.log(handleUserRole('guest'));

editorMessage = handleUserRole('editor')
adminMessage = handleUserRole('admin')

function sendMessage(message){
     return `Here is the mesage from above : ${message}`
}

// Store the function response in some variable
const outputMessage = sendMessage(editorMessage)
console.log(outputMessage);


// Call the abvove function on editorMessage
// console.log(sendMessage(editorMessage))
// console.log(sendMessage(adminMessage))


// Switch case statement 

// function handleUserRole(role) {
//     switch (role) {
//         case 'admin':
//         return 'You have full access';
//       case 'editor':
//         return 'You can edit content';
//       case 'viewer':
//         return 'You can view content';
//       case 'guest':
//         return 'You have limited access';
//       default:
//         return 'Role not recognized';
//     }
//   }
  
//   console.log(handleUserRole('editor')); // Output: You can edit content
//   console.log(handleUserRole('manager')); // Output: Role not recognized

// Write a function which takes in the daynumber and it will tell me which day it is

function getDayname(dayNumber){
    switch(dayNumber){
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:

    }
}

//   // Another switch case statement
  function getDayName(dayNumber) {
    switch (dayNumber) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return 'Invalid day number';
    }
  }
  
  console.log(getDayName(3)); // Output: Wednesday
  console.log(getDayName(8)); // Output: Invalid day number
  