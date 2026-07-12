import { createContext, useContext, useState } from 'react'
import { CITIES } from '../data/cities'

const CityContext = createContext(null)

export function CityProvider({ children }) {
  const [currentCity, setCurrentCity] = useState(() => {
    // 深链优先（踏印攻略链接带 ?city=lijiang 直达对应城市），其次记忆
    const fromUrl = new URLSearchParams(window.location.search).get('city')
    const saved = localStorage.getItem('sakura_city')
    const city = CITIES.find(c => c.id === fromUrl) || CITIES.find(c => c.id === saved) || CITIES[0]
    if (fromUrl && CITIES.some(c => c.id === fromUrl)) localStorage.setItem('sakura_city', fromUrl)
    return city
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
