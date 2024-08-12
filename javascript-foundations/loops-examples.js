// regular for loop
// Calculate sum of an array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(`Sum: ${sum}`); // Output: Sum: 15


// for of loop
const statuses = ['Pending Approval', 'Accepted', 'Food prpeared','On way', 'Delivered'];

for (const status of statuses) {
  console.log(status);
}


// for in 

const person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
  };
  
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

for (let prop of Object.entries(person)) {
    console.log(prop);
    console.log("This is where we iterate over the entries of the object")
}
  
// Pagination in a product listing page
const products = [/* Array of 1000+ products */];
const pageSize = 20;
const currentPage = 3;

const startIndex = (currentPage - 1) * pageSize;
const endIndex = Math.min(startIndex + pageSize, products.length);

for (let i = startIndex; i < endIndex; i++) {
  console.log(products[i]);
}

// for of loop
const userActions = [
    { action: 'login', timestamp: '2024-08-11T10:00:00Z' },
    { action: 'purchase', timestamp: '2024-08-11T10:05:00Z' },
    { action: 'logout', timestamp: '2024-08-11T10:10:00Z' },
  ];

for (const action of userActions) {
    console.log(`Action: ${action.action}, Timestamp: ${action.timestamp}`);
}
  


const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
  ];
for (const index in users) {
        console.log(users[index]);
}
  

for (const stat in userActions) {
    console.log(userActions[stat]);
}

for (let stat in userActions) {
    console.log(`${userActions[stat].action}`);
}

  users.forEach(user => {
    if (user.status === 'active') {
      console.log(`Sending notification to ${user.name}`);
      // Code to send notification
    }
  });


  for (const user of users){
    if (user.status === 'active') {
        console.log(`Sending another notification to ${user.name}`);
  }
  }