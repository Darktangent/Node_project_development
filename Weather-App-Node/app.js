const request= require('request')
const yargs= require('yargs')
const geocode=require('./geocode/geocode.js')
const weather= require('./weather/weather')
const argv= yargs
  .options({
  a:{
    demand:true,
    alias: 'address',
    describe : 'address to fetch weather for',
    string:true
  }
})
.help()
.alias('help','h')
.argv
geocode.geocodedAddress(argv.a, (errorMessage, results)=>{
  if(errorMessage){
    console.log(errorMessage)
  }else{
    console.log(results.address)
    weather.getWeather(results.latitude,results.longitude,(error, weatherResults)=>{
      if(error){
        console.log(error)
      }else{
        console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
      }
    })
  }
})
