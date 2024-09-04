// let's create some users

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
    // simulate the API call
    setTimeout(() => {
        let output = ""
        // Iterate over each user
        users.forEach((user) => {
            output += `<li>${user.email}</li>`
        })
        document.body.innerHTML = output

    }, 1000)
}


// function to create a user
function createUser(user,callback){
    setTimeout(() => {
        users.push(user)
        callback()
    },2000)
}

// createUser({id:4,
//     name:"Jamil Akhtar",
//     email:"def@example.com"
// },getUsers)


// Get the data of a userID
function getUser(id, callback){
    setTimeout(() => {
        console.log(`This is User : ${id}`)
        callback()
}, 3000)
}

// getUser(1)
// getUser(2)
// getUser(3)

// First get user 1 then user 2 and user 3
getUser(1,() => {
    getUser(2,() => {
        getUser(3,() => {
            console.log("We are done!")
            getUser(1,()=>{
                console.log("Calling with input 1 again")
            })
        })
    })
})

// What is happe

// getUser(1, () => {
//     getUser(2,() => {
//         getUser(3)
//     })
// })