import { motion } from 'framer-motion'
import './Chatbot.css'

const Chatbot = () => {
  return (
    <div className="chatbot-page">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <motion.div 
        className="chatbot-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="coming-soon"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="icon">💬</div>
          <h1>Personal AI Chatbot</h1>
          <p>An intelligent chatbot powered by AI that can answer questions about my experience, skills, and projects.</p>
          <div className="features">
            <div className="feature-item">
              <span className="feature-icon">🤖</span>
              <span>AI-Powered</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💡</span>
              <span>Smart Responses</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚀</span>
              <span>Real-time Chat</span>
            </div>
          </div>
          <motion.div 
            className="status-badge"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Under Development
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Chatbot

