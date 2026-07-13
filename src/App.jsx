import { useState, useEffect } from 'react'
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
import AlbumPage from './components/AlbumPage'
import './App.css'

function AppInner() {
  const { user, loading } = useUser()
  const [activeTab, setActiveTab] = useState('home')
  const [pendingSpot, setPendingSpot] = useState(null)

  /* 加载期间由 index.html 内联开屏顶着（bundle 下载起即可见），
     登录态确认后淡出移除，避免开屏和 React 两套加载 UI 叠放 */
  useEffect(() => {
    if (loading) return
    const splash = document.getElementById('splash')
    if (!splash) return
    splash.classList.add('done')
    const t = setTimeout(() => splash.remove(), 320)
    return () => clearTimeout(t)
  }, [loading])

  if (loading) return null

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
    spots:   <SpotsPage pendingSpot={pendingSpot} clearPendingSpot={() => setPendingSpot(null)} openMap={() => setActiveTab('map')} />,
    plan:    <PlanPage setActiveTab={setActiveTab} goToSpot={goToSpot} />,
    tips:    <TipsPage goToSpot={goToSpot} />,
    map:     <MapPage goToSpot={goToSpot} openList={() => setActiveTab('spots')} />,
    profile: <ProfilePage goToSpot={goToSpot} />,
    album:   <AlbumPage goBack={() => setActiveTab('home')} />,
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
