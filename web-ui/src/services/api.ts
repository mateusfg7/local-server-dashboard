import axios from 'axios'

const weatherApi = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
  params: {
    key: process.env.WEATHER_API_KEY,
    q: process.env.WEATHER_LOCATION
  }
})

export default weatherApi
