console.log("Starting app")
setTimeout(()=>{
  console.log('Inside of callback')
},2000)
setTimeout(()=>{
  console.log('Another callback')
}, 0)
console.log('finishing up')
var getUser=(id, callback)=>{
  var user={
    id:id,
    name:"Rohan"
  }
  setTimeout(()=>{
    callback(user)
  }, 3000)

}
getUser(31, (user)=>{
  console.log(user)
})
http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1301%20lombard%20street%20philadelphia
mapquestapi kep VxYGR5AJAhGNMYq4LAwmlGQrZesnnU6L
