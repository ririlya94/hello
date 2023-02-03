import { createContext } from 'react'

const defaultValue = {
  currentTheme: 'light',
  changeCurrentTheme: (newTheme: 'light' | 'dark') => { },
  tabSelection: 0,
  changeTab: (num: number) => { },
}

const ThemeContext = createContext(defaultValue)

export default ThemeContext