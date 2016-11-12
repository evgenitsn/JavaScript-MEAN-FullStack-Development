//noinspection Eslint
let a = (function () {
  let id = 0
  return class StormWatcher {
    constructor (temperature, humidity, pressure, windSpeed) {
      this.id = id++
      this.temperature = temperature
      this.humidity = humidity
      this.pressure = pressure
      this.windSpeed = windSpeed
    }

    static getWeather (temp, pressure, windSpeed) {
      let weather = 'Not stormy'
      if (temp < 20 && (pressure < 700 || pressure > 900) && windSpeed > 25){
        weather = 'Stormy'
      }
      return weather
    }

    toString () {
      let output = `Reading ID: ${this.id}\n`
      output += `Temperature: ${this.temperature}*C\n`
      output += `Relative Humidity: ${this.humidity}%\n`
      output += `Pressure: ${this.pressure}hpa\n`
      output += `Wind Speed: ${this.windSpeed}m/s\n`
      output += `Weather: ${StormWatcher.getWeather(this.temperature, this.pressure, this.windSpeed)}`

      return output
    }
  }
})()
