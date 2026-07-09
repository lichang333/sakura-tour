import { useUser } from '../context/UserContext'
import './BottomNav.css'

const TABS = [
  { id: 'home', label: '总览', icon: '✦' },
  { id: 'spots', label: '花线', icon: '✿' },
  { id: 'plan', label: '路线', icon: '🗺️' },
  { id: 'tips', label: '手册', icon: '☰' },
  { id: 'profile', label: '旅档', icon: null },
]

export default function BottomNav({ activeTab, setActiveTab }) {
  const { user } = useUser()

  return (
    <nav className="bottom-nav">
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`bn-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="bn-icon">
            {tab.id === 'profile' ? (user?.avatar || '👤') : tab.icon}
          </span>
          <span className="bn-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
