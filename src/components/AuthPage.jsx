import { useState } from 'react'
import { useUser } from '../context/UserContext'
import './AuthPage.css'

const AVATARS = ['🌸', '🦋', '🐼', '🌺', '🦊', '🐸', '🌙', '⭐', '🍓', '🎀']

export default function AuthPage() {
  const { signup, login } = useUser()
  const [mode, setMode] = useState('welcome')
  const [form, setForm] = useState({ name: '', email: '', password: '', avatar: '🌸' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [shake, setShake] = useState(false)
  const [showPwd, setShowPwd] = useState(false)

  const triggerShake = () => {
    setShake(true)
    setTimeout(() => setShake(false), 500)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.email.trim() || !form.password) { setError('请填写邮箱和密码'); triggerShake(); return }
    setLoading(true)
    try {
      await login(form.email.trim(), form.password)
    } catch (err) {
      setError(err.message)
      triggerShake()
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.name.trim()) { setError('请输入你的昵称'); triggerShake(); return }
    if (!form.email.includes('@')) { setError('请输入有效的邮箱'); triggerShake(); return }
    if (form.password.length < 6) { setError('密码至少6位'); triggerShake(); return }
    setLoading(true)
    try {
      await signup({ name: form.name.trim(), email: form.email.trim(), password: form.password, avatar: form.avatar })
    } catch (err) {
      setError(err.message)
      triggerShake()
    } finally {
      setLoading(false)
    }
  }

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  if (mode === 'welcome') {
    return (
      <div className="auth-page">
        <div className="auth-hero">
          <div className="auth-petals">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="auth-petal" style={{
                left: `${10 + i * 11}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${5 + (i % 3)}s`,
              }}>🌸</span>
            ))}
          </div>
          <div className="auth-mascot">🌸</div>
          <h1 className="auth-title">Sakura Tour</h1>
          <p className="auth-subtitle">成都赏樱旅行规划</p>
          <p className="auth-desc">记录你的赏樱足迹，积累 XP，解锁专属花期报告</p>
        </div>
        <div className="auth-actions">
          <button className="auth-btn-primary" onClick={() => setMode('signup')}>
            开始我的赏樱之旅 🌸
          </button>
          <button className="auth-btn-secondary" onClick={() => setMode('login')}>
            已有账号，去登录
          </button>
        </div>
      </div>
    )
  }

  if (mode === 'login') {
    return (
      <div className="auth-page">
        <button className="auth-back" onClick={() => { setMode('welcome'); setError('') }}>← 返回</button>
        <div className="auth-form-area">
          <div className="auth-form-icon">👋</div>
          <h2 className="auth-form-title">欢迎回来！</h2>
          <p className="auth-form-sub">登录后数据跨设备同步</p>
          <form onSubmit={handleLogin} className={`auth-form ${shake ? 'shake' : ''}`}>
            <div className="form-group">
              <label>邮箱</label>
              <input type="email" placeholder="your@email.com" value={form.email}
                onChange={e => set('email', e.target.value)} autoComplete="email" />
            </div>
            <div className="form-group">
              <label>密码</label>
              <div className="pwd-wrap">
                <input type={showPwd ? 'text' : 'password'} placeholder="请输入密码"
                  value={form.password} onChange={e => set('password', e.target.value)}
                  autoComplete="current-password" />
                <button type="button" className="pwd-toggle" onClick={() => setShowPwd(v => !v)}>
                  {showPwd ? '🙈' : '👁️'}
                </button>
              </div>
            </div>
            {error && <div className="auth-error">⚠️ {error}</div>}
            <button type="submit" className="auth-btn-primary" disabled={loading}>
              {loading ? '登录中...' : '登录'}
            </button>
          </form>
          <p className="auth-switch">
            还没有账号？{' '}
            <button className="auth-link" onClick={() => { setMode('signup'); setError('') }}>立即注册</button>
          </p>
        </div>
      </div>
    )
  }

  // signup
  return (
    <div className="auth-page">
      <button className="auth-back" onClick={() => { setMode('welcome'); setError('') }}>← 返回</button>
      <div className="auth-form-area">
        <div className="auth-form-icon">🎉</div>
        <h2 className="auth-form-title">创建账号</h2>
        <p className="auth-form-sub">数据存储在服务端，任何设备都能登录</p>
        <form onSubmit={handleSignup} className={`auth-form ${shake ? 'shake' : ''}`}>
          <div className="form-group">
            <label>选择你的头像</label>
            <div className="avatar-grid">
              {AVATARS.map(av => (
                <button key={av} type="button"
                  className={`avatar-option ${form.avatar === av ? 'selected' : ''}`}
                  onClick={() => set('avatar', av)}>{av}</button>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>昵称</label>
            <input type="text" placeholder="你想叫什么名字？" value={form.name}
              onChange={e => set('name', e.target.value)} maxLength={16} />
          </div>
          <div className="form-group">
            <label>邮箱</label>
            <input type="email" placeholder="your@email.com" value={form.email}
              onChange={e => set('email', e.target.value)} autoComplete="email" />
          </div>
          <div className="form-group">
            <label>密码</label>
            <div className="pwd-wrap">
              <input type={showPwd ? 'text' : 'password'} placeholder="至少6位"
                value={form.password} onChange={e => set('password', e.target.value)}
                autoComplete="new-password" />
              <button type="button" className="pwd-toggle" onClick={() => setShowPwd(v => !v)}>
                {showPwd ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          {error && <div className="auth-error">⚠️ {error}</div>}
          <button type="submit" className="auth-btn-primary" disabled={loading}>
            {loading ? '注册中...' : '注册并开始 🌸'}
          </button>
        </form>
        <p className="auth-switch">
          已有账号？{' '}
          <button className="auth-link" onClick={() => { setMode('login'); setError('') }}>去登录</button>
        </p>
      </div>
    </div>
  )
}
