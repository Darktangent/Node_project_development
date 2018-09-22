console.log("Starting app.js")
const fs = require('fs')
const os=require('os')
const notes=require('./notes')

var user= os.userInfo();
console.log(user);

fs.appendFile('./greetings.txt', `hello ${user.username} you are ${notes.age}` ,(err)=>{
    if(err){
        console.log("Unable to write file")
    }
})
