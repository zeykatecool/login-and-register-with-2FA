const prompt = require('prompt-sync')({sigint: true});
const cli = require("cli-color")
const db = require("quick.db")
let can = true
if(can === true){
let kl = prompt(cli.white("Type login for login, register for register! | >"))
if(kl === "register") {
  let k = prompt(cli.white("Type your username! | >"))
  if(k === "") {
  return  console.log(cli.red("Your username must be at least 1 character!"))
  }
  if(k === db.fetch(`kisik_${k}`,k)) {
  return console.log(cli.red("This username is already taken!"))
  }
  db.set(`kisik_${k}`,k)

  if(k === k) {
    let ks = prompt(cli.white("Type your password! | >"))
    if(ks === "") {
    return  console.log(cli.red("Your password must be at least 1 character!"))
      db.delete(`kisik_${k}`,k)
    }
    if(ks === ks) {
      db.set(`kisiss_${ks}`,ks)
      console.log(cli.green("You have successfully registered the system " + db.fetch(`kisik_${k}`)+" !"))
    }
  }
}


if(kl === "login") {
  let i = prompt(cli.white("Please type your username! | >"))
  if(i !== db.fetch(`kisik_${i}`)) {
    console.log(cli.red("Username not found!"))
  }
  if(i === db.fetch(`kisik_${i}`)) {
    let is = prompt(cli.white("Please type your password! | >"))
    if(is === db.fetch(`kisiss_${is}`)) {
      console.log(cli.green("Entered the system."))
    let ic = prompt(cli.white("Type data for system data! | >"))
    if(ic === "data"){
        console.log(db.all(`kisik`))
      }
    }
    if(is !== db.fetch(`kisiss_${is}`)) {
      console.log(cli.red("Wrong password!"))
    }
  }
}
}
