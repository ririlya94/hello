import { FC, useState, useEffect, ReactNode } from 'react'
import ThemeContext from './ThemeContext'

type Props = {
  children: ReactNode
}

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {

    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
    else {
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
  }

  return 'light';
};

const ThemeContextWrapper: FC<Props> = ({ children }) => {
  const persistedTheme: string | null = getInitialTheme()
  const [theme, setTheme] = useState(persistedTheme || 'light')
  const [tab, setTab] = useState(0)

  const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    window.localStorage.setItem('color-theme', newTheme)
  }

  useEffect(() => {
    if (theme === 'light') window.document.documentElement.classList.remove('dark')
    else window.document.documentElement.classList.add('dark')
  }, [theme])

  return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme, tabSelection: tab, changeTab: setTab }}>{children}</ThemeContext.Provider>
}

export default ThemeContextWrapper