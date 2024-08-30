// Writing a sync function
function syncFunction(){
    console.log("Starting the sync operations")

    function middleFunction(){
        console.log("Executing immediately")
    }
    middleFunction()

    console.log("Ending the sync operations")
}

// Async function
function asyncFunction(){
    console.log('Starting the async operations');

    function middleFunction(){
        setTimeout(() => {
        console.log('Execute immediately.');
    }, 2000);
    
}
    middleFunction()
    console.log('Ending the async operations');
}

asyncFunction()

setTimeout(() => {
    console.log('Executing immediately.');
}, 1000)

console.log("hello-")
// asyncFunction()

// function greet() {
//     console.log('This will appear next. Hello World!');
//   }
  
// setTimeout(function() {
//     console.log("This message appears after 3 seconds");
//     greet();
//   }, 2000);

// function sayHello(name, message) {
//     console.log(`Hello, ${name}! ${message}`);
// }
  
// setTimeout(sayHello, 2000, "John", "How are you?");
  