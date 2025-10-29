import { motion } from 'framer-motion'
import './Research.css'

const Research = () => {
  return (
    <div className="research-page">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <motion.div 
        className="research-container"
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
          <div className="icon">🔬</div>
          <h1>AI/ML Research Timeline</h1>
          <p>This section will showcase my research on Artificial Intelligence and Machine Learning with an interactive timeline.</p>
          <div className="features">
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span>Interactive Timeline</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📝</span>
              <span>Detailed Descriptions</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>Key Milestones</span>
            </div>
          </div>
          <motion.div 
            className="status-badge"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Coming Soon
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Research

