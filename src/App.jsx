import { useState } from 'react'
import { UserProvider, useUser } from './context/UserContext'
import { ThemeProvider } from './context/ThemeContext'
import { CityProvider } from './context/CityContext'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import AuthPage from './components/AuthPage'
import HomePage from './components/HomePage'
import SpotsPage from './components/SpotsPage'
import PlanPage from './components/PlanPage'
import TipsPage from './components/TipsPage'
import MapPage from './components/MapPage'
import ProfilePage from './components/ProfilePage'
import './App.css'

function AppInner() {
  const { user, loading } = useUser()
  const [activeTab, setActiveTab] = useState('home')
  const [pendingSpot, setPendingSpot] = useState(null)

  if (loading) {
    return (
      <div className="app loading-screen">
        <div className="loading-seal">桜</div>
        <div className="loading-brand">Sakura Tour</div>
        <div className="loading-sub">中国小城漫游</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="app">
        <AuthPage />
      </div>
    )
  }

  const goToSpot = (spotId) => { setPendingSpot(spotId); setActiveTab('spots') }

  const pages = {
    home:    <HomePage setActiveTab={setActiveTab} goToSpot={goToSpot} />,
    spots:   <SpotsPage pendingSpot={pendingSpot} clearPendingSpot={() => setPendingSpot(null)} />,
    plan:    <PlanPage setActiveTab={setActiveTab} goToSpot={goToSpot} />,
    tips:    <TipsPage goToSpot={goToSpot} />,
    map:     <MapPage goToSpot={goToSpot} />,
    profile: <ProfilePage goToSpot={goToSpot} />,
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        {pages[activeTab]}
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <CityProvider>
        <UserProvider>
          <AppInner />
        </UserProvider>
      </CityProvider>
    </ThemeProvider>
  )
}
