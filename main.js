


let userButton = document.querySelector('#userButton')
let userContainer = document.querySelector('#userContainer')

userButton.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        // wait for the response from the API
        .then((response) => {
            // when you get the response, parse it so we can use it
            return response.json()
            // data refers to what the above promise returns
        }).then((data) => {
            console.log(data)
            let user = data.results[0]
            let nameDiv = document.createElement('div')
            nameDiv.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`
            userContainer.appendChild(nameDiv)
        }
    )
})

