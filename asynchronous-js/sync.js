// Dive deep into the JS engine

// console.log("Hello Students!")

// // This is our first function
// function sayHello(message){

//     for (let i=0; i<10000000;){
//         i++
//     }

//     console.log(`hello, our message is ${message}`)
    
// }
// sayHello('We are done with the for loop')

// // This is 2nd function
// function anotherFunction(){
//     console.log("We are executing another function")
// }

// anotherFunction()

// const myValue = 40
// console.log(myValue)

// console.log("We are done executing")


function async(){
    function mid(){
    setTimeout(()=>{
    console.log('hello')
    }, 0)
    console.log ('ending');
  }
  mid();
}

async()