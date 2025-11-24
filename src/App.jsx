import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Intro from './pages/Intro'
import Chatbot from './pages/Chatbot'
import TimelineAnalysis from './pages/TimelineAnalysis'
import DeepLearning from './pages/DeepLearning'
import PersonalValue from './pages/PersonalValue'
import './App.css'

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/timeline-analysis" element={<TimelineAnalysis />} />
          <Route path="/deep-learning" element={<DeepLearning />} />
          <Route path="/personal-value" element={<PersonalValue />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

