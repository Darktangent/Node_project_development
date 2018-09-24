const axios = require('axios')
const yargs = require('yargs')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv
var encodedAddress = encodeURIComponent(argv.a)
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDt_4c722LTIVfkc9vFUBoLrwa7f8gqfH4`

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === "ZERO_RESULTS") {
      throw new Error('unable to find that address')
    }
    var lat = response.data.results[0].geometry.location.lat
    var lng = response.data.results[0].geometry.location.lng
    var weatherUrl = `https://api.darksky.net/forecast/a0165bd6b4934bd385b8c70db60f00cf/${lat},${lng}`
    console.log(response.data.results[0].formatted_address)
    return axios.get(weatherUrl)
  }).then((response) => {
    var temperature = response.data.currently.temperature
    var apparentTemperature = response.data.currently.apparentTemperature
    console.log(`Its currently ${temperature}. It feels like ${apparentTemperature}`)
  })
  .catch((e) => {
    if (e.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers")
    } else {
      console.log(e.message)

    }

  })