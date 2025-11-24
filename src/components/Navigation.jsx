import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import './Navigation.css'

const Navigation = () => {
  const location = useLocation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const closeTimeoutRef = useRef(null)

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' }
  ]

  const artifactItems = [
    { path: '/chatbot', label: 'Artifact 1: AI Chatbot', icon: '🤖' },
    { path: '/timeline-analysis', label: 'Artifact 2: Timeline Analysis', icon: '📊' },
    { path: '/deep-learning', label: 'Artifact 3: Deep Learning & Neurons', icon: '🧠' },
    { path: '/personal-value', label: 'Artifact 4: Personal Value & Bias', icon: '⚖️' }
  ]

  const isArtifactActive = artifactItems.some(item => item.path === location.pathname)

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 200)
  }

  return (
    <motion.nav 
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">CK</span>
        </motion.div>
        
        <ul className="nav-links">
          {navItems.map((item) => (
            <motion.li 
              key={item.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </motion.li>
          ))}
          
          {/* Artifacts Dropdown */}
          <motion.li 
            className="nav-dropdown"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`nav-dropdown-trigger ${isArtifactActive ? 'active' : ''}`}>
              <span className="nav-icon">✨</span>
              <span className="nav-label">Artifacts</span>
              <span className="dropdown-arrow">{isDropdownOpen ? '▲' : '▼'}</span>
            </div>
            
            {isDropdownOpen && (
              <motion.div 
                className="nav-dropdown-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {artifactItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    className={`dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navigation

