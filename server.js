
function login() {
  const username = process.env.USERNAME
  const password = process.env.PASSWORD

  if (username == getUserNameFromdB() && password === getPasswordFromDb()) {
       console.log("You are logged in!")
  } else {
       console.log("Incorrect username or password!"
  }
}


login()
