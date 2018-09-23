const request = require('request')
var getWeather=(lat,lng,callback)=>{
  request({
    url: `https://api.darksky.net/forecast/a0165bd6b4934bd385b8c70db60f00cf/${lat},${lng}`,
    json:true
  },(error,response,body)=>{
    if(!error && response.statusCode===200){
        callback(undefined, {
          temperature:body.currently.temperature,
          apparentTemperature:body.currently.apparentTemperature
        } )

    } else {
      callback('Unable to fetch weather information')
    }

  }
  )

}
module.exports={
  getWeather
}
