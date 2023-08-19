const userName = document.getElementById('name')
const password = document.getElementById('password')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (userName.value === '' || userName.value == null) {
        messages.push('Name is required')
    }

    if (email.value === '' || email.value == null) {
        messages.push('Email is required')
    }

    if (phone.value === '' || userName.value == null) {
        messages.push('Phone is required')
    }

    if (password.value.length <= 8) {
        messages.push('Password must be longer than 8 characters')
    }

    if (password.value.length >= 25) {
        messages.push('Password must be longer than 25 characters')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join('\n')
    }

})