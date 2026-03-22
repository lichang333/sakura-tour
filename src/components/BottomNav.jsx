import { useUser } from '../context/UserContext'
import './BottomNav.css'

const TABS = [
  { id: 'home',    label: '首页',  icon: '🏠' },
  { id: 'spots',   label: '赏樱地', icon: '🌸' },
  { id: 'plan',    label: '行程',  icon: '📅' },
  { id: 'tips',    label: '攻略',  icon: '💡' },
  { id: 'profile', label: '我的',  icon: null  },
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
