const ora = require('ora')
const getWeather = require('../utils/weather')
const getLocation = require('../utils/location')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l || await getLocation()
    const weather = await getWeather(location)

    spinner.stop()

    console.log(`Forecast for ${location}:`)
    weather.forecast.forEach(item =>
      console.log(`\t${item.date} - Low: ${item.low}° | High: ${item.high}° | ${item.text}`))
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}
