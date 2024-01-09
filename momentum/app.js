const loginInput = document.querySelector('#login-form input')
const loginForm = document.querySelector('#login-form')

const link = document.querySelector('a')

function onLoginSubmit(event) {
  event.preventDefault()
  const username = loginInput.value
  loginForm.classList.add.add()
}

loginForm.addEventListener('submit', onLoginSubmit)
