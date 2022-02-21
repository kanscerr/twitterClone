const name= document.getElementById('uname')
const password= document.getElementById('password')

const errorElement= document.getElementById('error') 

form.addEventListener('submit', (e) => {
    let message= []
    if (password.value != 'kanscerr.git') {
        message.push('Incorrect Password')
    }

    if (message.length > 0) {
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
}) 