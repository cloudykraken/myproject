
function login() {
  const username = "peter.smith@gmail.com"
  const password = "238hadfjkdf"

  if (username == getUserNameFromdB() && password === getPasswordFromDb()) {
       console.log("You are logged in!")
  } else {
       console.log("Incorrect username or password!"
  }
}
