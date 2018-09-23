const request=require('request')

request({
  url:'http://www.mapquestapi.com/geocoding/v1/address?key=VxYGR5AJAhGNMYq4LAwmlGQrZesnnU6L&location=1301%20lombard%20street%20philadelphia'
  ,
  json:true
},(error,response,body)=>{
  // console.log(JSON.stringify(response, undefined, 2))
  console.log(`Address: ${body.results[0].providedLocation.location}`)
  console.log(`latitude: ${body.results[0].locations[0].latLng.lat}`)
  console.log(`longitude: ${body.results[0].locations[0].latLng.lng}`)

})
