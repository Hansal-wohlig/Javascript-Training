const os = require('os')

//info about current uset

const user = os.userInfo()
console.log(user)

//return the system uptime
console.log(`the system uptime is ${os.uptime()} in seconds`)

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()


}

console.log(currentOS)