import api from '@/services/api'

export default class LocationService {
  getLocation(city) {
    return api.get(`/location?text=${city}`)
  }
}

export const locationService = new LocationService()
