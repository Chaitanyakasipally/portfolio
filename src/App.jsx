import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Intro from './pages/Intro'
import Research from './pages/Research'
import './App.css'

function App() {
  useEffect(() => {
    // Load JotForm chat widget
    const script = document.createElement('script')
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/019a326d37237bcebed37e9e04f7feccfb4e/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <Router basename="/portfolio">
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

