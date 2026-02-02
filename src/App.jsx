import { useState, useEffect } from 'react'
import ModeToggle from './components/ModeToggle.jsx'
import Terminal from './components/Terminal.jsx'
import NonDevView from './components/NonDevView.jsx'

function App() {
  const [isDev, setIsDev] = useState(true)

  useEffect(() => {
    const savedMode = localStorage.getItem('siteMode')
    if (savedMode !== null) {
      setIsDev(savedMode === 'dev')
    }
  }, [])

  const handleModeChange = (newIsDev) => {
    setIsDev(newIsDev)
    localStorage.setItem('siteMode', newIsDev ? 'dev' : 'simple')
  }

  return (
    <>
      <title>Divy Singhvi | Full-Stack Developer & Cloud Engineer</title>
      <ModeToggle isDev={isDev} onChange={handleModeChange} />
      <main>
        {isDev ? <Terminal /> : <NonDevView />}
      </main>
    </>
  )
}

export default App
