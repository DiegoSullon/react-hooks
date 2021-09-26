import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)
  const handleClick = () => {
    setDarkMode(!darkMode)
    setTheme(!theme)
  }
  
  return (
    <div className='Header'>
      <h1>ReactHooks</h1>
      <button type='button' onClick={handleClick}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default Header
