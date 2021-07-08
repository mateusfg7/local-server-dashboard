/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import weatherApi from '../services/api'

export interface CurrentWeatherData {
  location: {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
  }
  current: {
    last_updated: string
    temp_c: number
    is_day: number
    condition: {
      text: string
      icon: string
      humidity: number
    }
  }
}

export async function getCurrentWeatherData() {
  const weatherRequest = await weatherApi.get('current.json')
  const weatherData: CurrentWeatherData = weatherRequest.data

  return weatherData
}
