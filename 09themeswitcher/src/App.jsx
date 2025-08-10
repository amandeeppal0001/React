import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components.jsx/ThemeBtn'
import Card from './components.jsx/card'
function App() {
  // const [count, setCount] = useState(0)
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
      setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }


  /// actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
  <ThemeProvider  value={{themeMode, lightTheme, darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  
              </div>
      {/* theme button  */}
              <ThemeBtn/>
              <div className="w-full max-w-sm mx-auto">
                {/* Card */}
                <Card/>
              </div>
          </div>
      </div>
      </ThemeProvider>
  )
}

export default App
