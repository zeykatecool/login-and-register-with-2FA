const prompt = require('prompt-sync')({sigint: true});
const cli = require("cli-color")
const db = require("quick.db")
const mamut = Math.floor(100000 + Math.random() * 900000)
const { Webhook } = require("discord-webhook-node");
const { disableUnicode } = require('npmlog');
let can = true
if(can === true){
let kl = prompt(cli.whiteBright("Type login for login, register for register! | >"))
if(kl === "register") {
  let k = prompt(cli.whiteBright("Type your username! | >"))
  if(k === "") {
  return  console.log(cli.red("Your username must be at least 1 character!"))
  }
  if(k === db.fetch(`kisik_${k}`,k)) {
  return console.log(cli.red("This username is already taken!"))
  }
  db.set(`kisik_${k}`,k)

  if(k === k) {
    let ks = prompt(cli.whiteBright("Type your password! | >"))
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
  let i = prompt(cli.whiteBright("Please type your username! | >"))
  if(i !== db.fetch(`kisik_${i}`)) {
    console.log(cli.red("Username not found!"))
  }
  if(i === db.fetch(`kisik_${i}`)) {
    let is = prompt(cli.whiteBright("Please type your password! | >"))
    if(is !== db.fetch(`kisiss_${is}`)) {
      return console.log(cli.red("Wrong password!"))
    }
    if(is === db.fetch(`kisiss_${is}`)) {
     
          const hook = new Webhook("YOUR WEBHOOK URL")
            
          hook.setUsername("Verify")
          const avatar = "https://dummyimage.com/150x150/000/fff&text=Verify"
          hook.setAvatar(avatar)
              hook.send("Your verification code : "+"**"+mamut+"**")
              db.set("kod",mamut)
              setTimeout(function sa() {
                kl = prompt(cli.whiteBright("Please type the 2FA code! | >"))
                if(kl == db.fetch("kod")) {
                  console.log(cli.green("Entered the system."))
                  hook.send("Verify is successful!")
                  setTimeout( function ma() {
                     let menu = prompt(cli.whiteBright("Type profile for account information! | >"))
                     if(menu !== "profile") {
                        ma()
                    }
                     if(menu === "profile") {
                        console.log("Username : " + db.fetch(`kisik_${i}`) + "\n2FA Code : "+db.fetch("kod"))
                        ma()
                     }
                  
                  })
                }
                else{
                  console.log(cli.red("Wrong 2FA code!"))
                  hook.send("Verify is failed!")
                }
              },2000)
    
           
    }
}
  }
}
