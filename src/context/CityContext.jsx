import { createContext, useContext, useState } from 'react'
import { CITIES } from '../data/cities'

const CityContext = createContext(null)

export function CityProvider({ children }) {
  const [currentCity, setCurrentCity] = useState(() => {
    const saved = localStorage.getItem('sakura_city')
    return CITIES.find(c => c.id === saved) || CITIES[0]
  })

  const selectCity = (cityId) => {
    const city = CITIES.find(c => c.id === cityId)
    if (city) {
      setCurrentCity(city)
      localStorage.setItem('sakura_city', cityId)
    }
  }

  return (
    <CityContext.Provider value={{ currentCity, selectCity, CITIES }}>
      {children}
    </CityContext.Provider>
  )
}

export function useCity() {
  return useContext(CityContext)
}
