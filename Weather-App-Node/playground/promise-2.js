const request= require('request')
var geocodeAddress=(address)=>{
return new Promise((resolve,reject)=>{
  var encodedAddress=encodeURIComponent(address)

  request({
    // url:`http://www.mapquestapi.com/geocoding/v1/address?key=VxYGR5AJAhGNMYq4LAwmlGQrZesnnU6L&location=${encodedAddress}`
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDt_4c722LTIVfkc9vFUBoLrwa7f8gqfH4`
    ,
    json:true
  },(error,response,body)=>{
    // console.log(JSON.stringify(response, undefined, 2))
    if(error){
      reject ('unable to connect to map server')

    } else if(body.status==='ZERO_RESULTS'){
      reject('Unable to find that address')

    } else if(body.status==='OK') {
      resolve({
        address : body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
      // console.log(`Address: ${body.results[0].providedLocation.location}`)
      // console.log(`latitude: ${body.results[0].locations[0].latLng.lat}`)
      // console.log(`longitude: ${body.results[0].locations[0].latLng.lng}`)
    }
  })
})
}
geocodeAddress('21017').then((location)=>{
  console.log(location, undefined, 2)
}).catch((error)=>{
  console.log(error)
})
