/* eslint-disable curly */

import { CurrentWeatherData } from './getWeatherData'

import weatherCodeList from './weather_codes.json'
import backgrounds from './background_urls.json'

function backgroundByWeather(weatherCode: number, time: string) {
  if (weatherCodeList.clean_weather.includes(weatherCode))
    return backgrounds.clear[time]
  if (weatherCodeList.closed_weather.includes(weatherCode))
    return backgrounds.closed[time]

  return backgrounds.default
}

function getCurrentBackgroundUrl(
  date: Date,
  weatherData: CurrentWeatherData
): string {
  const currentHour = date.getHours()
  const weatherCode = weatherData.current.condition.code

  // 5 to 13
  if (currentHour >= 5 && currentHour <= 13)
    return backgroundByWeather(weatherCode, 'morning')
  // 14 to 16
  if (currentHour >= 14 && currentHour <= 16)
    return backgroundByWeather(weatherCode, 'afternoon')
  // 17 to 18
  if (currentHour >= 17 && currentHour <= 18)
    return backgroundByWeather(weatherCode, 'sunset')
  // 19 to 4
  if (currentHour >= 19) return backgroundByWeather(weatherCode, 'night')

  console.log('n passou em nada')
  return backgrounds.default
}

export default getCurrentBackgroundUrl
