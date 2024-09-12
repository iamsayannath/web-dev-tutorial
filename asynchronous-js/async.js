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

// asyncFunction()

<<<<<<< HEAD

setTimeout(() => {
    console.log('Executing immediately.');
}, 1000)
=======
// setTimeout(() => {
//     console.log('Executing immediately.');
// }, 1000)
>>>>>>> upstream/programming-with-javascript

// console.log("hello-")
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
// Simulating an asynchronous function that represents ordering food
function orderFood() {
    return new Promise((resolve) => {
      console.log("Order placed. Preparing food...");
      setTimeout(() => {
        resolve("🍔 Your food is ready!");
      }, 3000);  // Simulating a 3-second delay for food preparation
    });
  }

async function dineAtRestaurant() {
    console.log("Welcome to the restaurant!");
  
    // Place the order and wait for the food asynchronously
    const food = await orderFood();  // Waits for the food to be ready, but does not block other tasks
  
    // Now that the food is ready, you can eat
    console.log(food);
  
    console.log("Enjoy your meal!");
  }
  
  dineAtRestaurant();
  