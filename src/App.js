import './App.css'
import Header from './components/Header'
import Characters from './components/Characters'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App () {
  const { theme} = useContext(ThemeContext)
  const style = theme
    ? {
        color: 'white',
        backgroundColor: '#323940'
      }
    : {
        color: 'black',
        backgroundColor: 'white'
      }
  return (
    <div className='App' style={style}>
      <Header />
      <h1>Hola mundo</h1>
      <Characters />
    </div>
  )
}

export default App
