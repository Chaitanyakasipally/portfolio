import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Intro from './pages/Intro'
import Research from './pages/Research'
import Chatbot from './pages/Chatbot'
import './App.css'

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/research" element={<Research />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

