import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('sakura_theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('sakura_theme', theme)
    // 状态栏/工具栏染色跟随 App 主题（值 = --header-bg 实底色，与头部无缝）
    // App 主题可与系统主题不一致，故直接覆写两条 media meta
    const color = theme === 'dark' ? '#1A1F27' : '#F3EEE3'
    document.querySelectorAll('meta[name="theme-color"]')
      .forEach(m => m.setAttribute('content', color))
  }, [theme])

  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
