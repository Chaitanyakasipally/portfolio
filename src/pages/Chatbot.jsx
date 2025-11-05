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
          className="chatbot-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="header-content">
            <div className="icon">🤖</div>
            <h1>Car Performance Research Assistant</h1>
            <p>Planning a new car? Ask me anything about your desired car performance</p>
          </div>
        </motion.div>

        <motion.div 
          className="chatbot-iframe-container"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <iframe
            src="https://chatgpt.com/g/g-690abaa59a808191af6cb4e38b1de95a-car-performance-research"
            className="chatbot-iframe"
            title="Car Diagnostics Chatbot"
            allow="microphone; camera"
          />
          <div className="iframe-overlay">
            <a 
              href="https://chatgpt.com/g/g-690abaa59a808191af6cb4e38b1de95a-car-performance-research"
              target="_blank"
              rel="noopener noreferrer"
              className="open-chatbot-btn"
            >
              <span className="btn-icon">🚀</span>
              Open Chatbot in New Tab
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="chatbot-info"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="info-card">
            <span className="info-icon">💡</span>
            <p>This AI-powered chatbot can help you in researching your next car, understand performance metrics.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Chatbot

