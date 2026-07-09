import './BottomNav.css'

const Icon = ({ paths }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
       strokeLinecap="round" strokeLinejoin="round" width="23" height="23">
    {paths}
  </svg>
)

const ICONS = {
  home:  <Icon paths={<><path d="M4 11l8-7 8 7" /><path d="M6 10v9h12v-9" /></>} />,
  spots: <Icon paths={<><path d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z" /><circle cx="12" cy="11" r="2.2" /></>} />,
  map:   <Icon paths={<><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" /></>} />,
  plan:  <Icon paths={<><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M8 3v4M16 3v4" /></>} />,
  tips:  <Icon paths={<><path d="M5 4h10a2 2 0 012 2v14H7a2 2 0 01-2-2z" /><path d="M17 4h2v16" /></>} />,
  profile: <Icon paths={<><circle cx="12" cy="8" r="3.4" /><path d="M5 20c1.2-3.6 4-5 7-5s5.8 1.4 7 5" /></>} />,
}

const TABS = [
  { id: 'home',    label: '首页' },
  { id: 'spots',   label: '景点' },
  { id: 'map',     label: '地图' },
  { id: 'plan',    label: '行程' },
  { id: 'tips',    label: '攻略' },
  { id: 'profile', label: '我的' },
]

export default function BottomNav({ activeTab, setActiveTab }) {
  return (
    <nav className="bottom-nav">
      <div className="bn-brand">
        <span className="bn-seal">桜</span>
        <span className="bn-brand-name">Sakura Tour</span>
      </div>
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`bn-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="bn-icon">{ICONS[tab.id]}</span>
          <span className="bn-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
