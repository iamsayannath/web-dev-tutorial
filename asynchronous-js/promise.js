// const promise = new Promise((resolve,reject)=> {
//     console.log("This is a promise")
//     // resolve("hell yeah, promise fulfilled")
//     reject("Oh no, Promise rejected")
// })


const users = [
    {
        id: 1,
        name : 'Vikash Srivastava',
        email : 'vikash@almabetter.com'
        },
        {
        id:2,
        name : 'Chirag Bhardwaj',
        email : 'abc@gmail.com'
        },
        {
        id:3,
        name:"Sayan Nath",
        email:"xyz@example.com"
        }
]

// function to get users - simulate some API call
function getUsers(){
    setTimeout(()=> {
        let output = ""

        users.forEach((user,index) => {
            output += `<li>${user.name}</li>`
        } )

        document.body.innerHTML = output
    },1000)
}

// function to create a user
function createUser(user){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            users.push(user)
            const error = true
            if(!error){
                resolve("user created successfully")
            }
            else {
                reject("Something went wrong")
            }
           }, 2000)
    })

   
}

// const promise1 = createUser({
//     id:4,
//     name:"Jamil Akhtar",
//     email:"def@example.com"
// })

// promise1.then((res) => console.log(res))

// promise1.catch((err) => console.log(err))

// const promise = new Promise((resolve,reject) => {
//     console.log("It is a promise")
//     reject("Some error")
// })

// creating a function which returns a promise
function myFunc(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Fetching user ${id}`)
            resolve("success")
        }, 3000)
    })
}

// myFunc(1)
// .then(() => {
//     myFunc(2)
//     .then(() => {
//         myFunc(3)
//         .then(() => console.log("Done fetching all the users"))
//     })
// })

// const promise2 = fetch('https://jsonplacholder.typicode.com/users')
// promise2
// .then((res) => console.log(res.json()))
// .catch((err) => console.log("Error fetching data"))



async function enrolUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`fetching user ${id}`)
            resolve("user details received successfully")
        }, 100)
    })
}

// asyncFunc(1).then((res) => {
//     console.log(res)
//     asyncFunc(2).then((res) => {
//         console.log(res)
//         asyncFunc(3).then((res) => {
//             console.log(res)
//         })
//     })
// })



async function fetchData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res
}

// simulate multiple API calls
async function fetchDataInBatch(size){

    for (i=0;i< size;i++){
        const res = await fetchData()
        console.log(res)
        console.log(await res.json())
    }
}

fetchDataInBatch(4)


// getUsers()
// fetchData()
// createUser({
//     name : 'Chirag Kumar',
//     email : 'abc@gmail.com'
//     })
//     .then(getUsers)
//     .catch(err => console.log(err))

// const promise1 = Promise.resolve("Hello user!")
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve,1000,'Good Bye!')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())

// Promise.all([promise1,promise2,promise3,promise4])
// .then((values) => console.log(values))
// .catch(err => console.log(err))

// async await
// async function init(){
//     await createUser({
//             name : 'Chirag Kumar',
//             email : 'abc@gmail.com'
//             })
//     getUsers()
// }

// init()

// async function fetchUsers() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     console.log(data)
// }

// fetchUsers()