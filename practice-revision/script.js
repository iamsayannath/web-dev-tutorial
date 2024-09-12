//map, hof, join,

//map: is used to iterate over arrays | return an array
const num = [10, 20, 3, 4, 1, 40];

// element, index, arr
const resultMap = num.map((ele, i, arr) => {
  // console.log(e, i, arr);
  return ele * 2;
}); //

console.log(resultMap);

const user = [
  {
    id: 1,
    firstName: "alina",
    age: 20,
  },
  {
    id: 2,
    firstName: "alex",
    age: 22,
  },
];

//forEach: used to iterate over array
const result = num.forEach((e, i, arr) => {
  console.log(e * 2);
  return e * 2;
});

console.log(result); //undefined

//filter: return a result array filled with array elements based on condition passed
const ages = [10, 3, 19, 28, 10, 39];

const filterResult = ages.filter((ele, i, arr) => {
  return ele >= 18;
});

console.log(filterResult); //[19, 28, 39 ]

//
const products = [
  {
    discountedPrice: 90900,
    originalPrice: 10000,
    color: "pink",
    category: "mobile",
    expiryDate: "10-10-2023",
    productName: "Iphone 15Pro Max",
    os: 15.6,
    QuantatityAvai: 50,
    offerAvailable: {
      cards: {},
    },
    ram: "",
    storage: "",
  },
];

//higher ordered function: function takes another fucntion as an argument
// e. g.  map, filter, forEach, add
display = (r) => {
  console.log(r);
};

add = (a, b, callback) => {
  callback(a + b);
};

add(10, 20, display);

//splice: add/ remove array element in b/w of array
const color = ["pink", "red", "green", "blue"];

//remove "red", add "orange", "white"
color.splice(1, 1, "orange", "white"); //start of the index, number of array element to delete, new array elements to be added
console.log(color); //["pink", "orange", "white", "green", "blue" ]

//slice: is used extract the array
console.log("Result", color.slice(1, 4)); //return the new array from 1st index till 3th index

console.log(color.slice(-1));

//join: convert array to string
console.log(color.join()); //"pink,orange,white,green,blue"
console.log(color.join(""));
console.log(color.join("*"));
console.log(num.join("")); //"102034140"

//reverse a string
let str = "hello world"; //"dlrow olleh"

let reverseStr = str.split("").reverse().join(""); //
console.log(reverseStr);

//flattend array
console.log([10, 20, [20, 30, [29, 39]]].flat(2));
console.log([10, 20, [20, 30, [29, 39]]].flat(1));
// [10, 20, [50, 60, [100, 200]] ,39, 40]

//some: return true if any of the element pass the test case/condition
const numbers = [10, 29, 3, 9, 2, 90, 3];

const resultSome = numbers.some((e, i, arr) => {
  return e >= 90;
});

console.log(resultSome);

//every: return true if all of the element pass the test case/condition
const resultEvery = numbers.every((e, i, arr) => {
  return e >= 90;
});

console.log(resultEvery); //

// Next Session
// arrow function
// regex, for...in, for..of
// proptotype
// async programming- promise / async & await
