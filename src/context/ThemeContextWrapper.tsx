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

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
          return 'dark';
      }
  }

  return 'light';
};

const ThemeContextWrapper: FC<Props> = ({ children }) => {
  const persistedTheme: string | null = getInitialTheme()
  const [theme, setTheme] = useState(persistedTheme || 'light')

  console.log(getInitialTheme() + " YES")

  const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    window.localStorage.setItem('color-theme', theme)
  }

  useEffect(() => {
    if (theme === 'light') window.document.documentElement.classList.remove('dark')
    else window.document.documentElement.classList.add('dark')
  }, [theme])

  return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextWrapper