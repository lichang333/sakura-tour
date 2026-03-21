import { useState } from 'react'
import { UserProvider, useUser } from './context/UserContext'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import AuthPage from './components/AuthPage'
import HomePage from './components/HomePage'
import SpotsPage from './components/SpotsPage'
import PlanPage from './components/PlanPage'
import TipsPage from './components/TipsPage'
import ProfilePage from './components/ProfilePage'
import './App.css'

function AppInner() {
  const { user, loading } = useUser()
  const [activeTab, setActiveTab] = useState('home')

  if (loading) {
    return (
      <div className="app loading-screen">
        <div className="loading-icon">🌸</div>
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

  const pages = {
    home: <HomePage setActiveTab={setActiveTab} />,
    spots: <SpotsPage />,
    plan: <PlanPage setActiveTab={setActiveTab} />,
    tips: <TipsPage />,
    profile: <ProfilePage />,
  }

  return (
    <div className="app">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main">
        {pages[activeTab]}
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppInner />
      </UserProvider>
    </ThemeProvider>
  )
}
