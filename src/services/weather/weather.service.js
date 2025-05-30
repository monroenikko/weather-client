import api from '@/services/api'

export default class WeatherService {
  getWeather(lon, lat) {
    return api.get(`/weather?lon=${lon}&lat=${lat}`)
  }
}

export const weatherService = new WeatherService()
