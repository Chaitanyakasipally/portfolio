import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Intro.css'

const Intro = () => {
  const navigate = useNavigate()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const experiences = [
    {
      title: 'Embedded Software Engineer',
      company: 'BWI Group',
      period: 'September 2022 - Present',
      description: 'Working on Embedded Software development AUTOSAR, MISRA C,Cybersecurity,ISO26262.',
      skills: ['C++', 'Davinci', 'Canoe', 'Python', 'Agile Methgologies']
    },
    {
      title: 'Software Development Engineer Intern',
      company: 'Motorola Solutions',
      period: 'May 2022 - August 2022',
      description: 'Worked on USB Protocol Testing for Proprietry Embedded Platform',
      skills: ['C++', 'Unit Testing', 'Python', 'Embedded Systems']
    },
    {
      title: 'Software Engineer',
      company: 'Hyundai Motor India Engineering',
      period: 'April 2018 - August 2021',
      description: 'Designed and Developed Classic AUTOSAR software',
      skills: ['AUTOSAR', 'CAN', 'C', 'ISO26262']
    }
  ]

  const education = [
    {
      degree: "Master's in Artificial Intelligence",
      institution: 'Indiana Wesleyan University',
      period: 'October 2025 - Present',
      description: 'Specialization in Machine Learning and Artificial Intelligence',

    },
    {
      degree: "Master's in Computer Science",
      institution: 'University of Dayton',
      period: 'August 2021 - December 2022',
      description: 'Certficate in Autonomus Systems and Data Science',
      gpa: '3.9/4.0'
    }
  ]

  return (
    <div className="intro-page">
      {/* Floating shapes background */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <motion.div 
        className="intro-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section - About Me */}
        <motion.section 
          className="hero-section"
          variants={itemVariants}
        >
          <div className="hero-content">
            <motion.div 
              className="hero-image"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="image-placeholder">
                <span className="avatar-icon">👤</span>
              </div>
            </motion.div>
            
            <div className="hero-text">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm <span className="gradient-text">Chaitanya Kasipally</span>
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Software Engineer & AI Enthusiast
              </motion.p>
              
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Passionate about creating innovative solutions and exploring the frontiers of 
                Artificial Intelligence and Machine Learning. With a strong foundation in automotive software 
                development and a keen interest in cutting-edge technologies, I strive to build 
                impactful applications that make a difference.Please feel free to reach out to me for any questions or collaborations via chaitnaya.kasipally@gmail.com.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="stats-section"
          variants={itemVariants}
        >
          <div className="stats-grid">
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">6+</div>
              <div className="stat-label">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">10+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">10+</div>
              <div className="stat-label">Technologies</div>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">100%</div>
              <div className="stat-label">Results Driven</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Artifacts Section */}
        <motion.section 
          className="artifacts-section"
          variants={itemVariants}
        >
          <h2 className="section-title">
            <span className="title-icon">✨</span>
            My Artifacts
          </h2>
          
          <div className="artifacts-grid">
            <motion.div 
              className="artifact-tile"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              onClick={() => navigate('/chatbot')}
            >
              <div className="artifact-icon">🤖</div>
              <h3 className="artifact-title">Artifact 1</h3>
              <h4 className="artifact-name">Car Performance Research Assistant</h4>
              <p className="artifact-description">
                An intelligent GPT-5 powered chatbot that analyzes automotive performance datasets, 
                compares brands and models, and delivers actionable insights on fuel efficiency, 
                emissions, and vehicle optimization through natural language queries.
              </p>
              <div className="artifact-tags">
                <span className="tag">GPT-5</span>
                <span className="tag">Data Analysis</span>
                <span className="tag">Automotive</span>
              </div>
              <div className="artifact-cta">Explore →</div>
            </motion.div>

            <motion.div 
              className="artifact-tile"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              onClick={() => navigate('/timeline-analysis')}
            >
              <div className="artifact-icon">📊</div>
              <h3 className="artifact-title">Artifact 2</h3>
              <h4 className="artifact-name">AI/ML Timeline Evolution</h4>
              <p className="artifact-description">
                A comprehensive chronological narrative documenting 74 years of AI/ML development 
                from Turing's 1950 question "Can machines think?" to 2024's multimodal generative AI, 
                featuring key milestones, breakthroughs, and paradigm shifts with academic references.
              </p>
              <div className="artifact-tags">
                <span className="tag">Research</span>
                <span className="tag">History</span>
                <span className="tag">Education</span>
              </div>
              <div className="artifact-cta">Explore →</div>
            </motion.div>

            <motion.div 
              className="artifact-tile"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.03, y: -10 }}
              onClick={() => navigate('/deep-learning')}
            >
              <div className="artifact-icon">🧠</div>
              <h3 className="artifact-title">Artifact 3</h3>
              <h4 className="artifact-name">Deep Learning & Neurons</h4>
              <p className="artifact-description">
                A plain-language explanation of deep learning and neural networks that makes complex 
                AI concepts accessible to everyone. Using analogies, simplified diagrams, and step-by-step 
                breakdowns to transform advanced machine learning ideas into approachable knowledge.
              </p>
              <div className="artifact-tags">
                <span className="tag">Education</span>
                <span className="tag">Neural Networks</span>
                <span className="tag">AI Concepts</span>
              </div>
              <div className="artifact-cta">Explore →</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Professional Experience Section */}
        <motion.section 
          className="experience-section"
          variants={itemVariants}
        >
          <h2 className="section-title">
            <span className="title-icon">💼</span>
            Professional Experience
          </h2>
          
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="experience-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{exp.title}</h3>
                    <p className="card-company">{exp.company}</p>
                  </div>
                  <span className="card-period">{exp.period}</span>
                </div>
                
                <p className="card-description">{exp.description}</p>
                
                <div className="card-skills">
                  {exp.skills.map((skill, idx) => (
                    <motion.span 
                      key={idx}
                      className="skill-tag"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="education-section"
          variants={itemVariants}
        >
          <h2 className="section-title">
            <span className="title-icon">🎓</span>
            Education
          </h2>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="education-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -10 }}
              >
                <div className="card-icon">📚</div>
                <h3 className="card-title">{edu.degree}</h3>
                <p className="card-institution">{edu.institution}</p>
                <p className="card-period">{edu.period}</p>
                <p className="card-description">{edu.description}</p>
                <div className="card-gpa">
                  <span className="gpa-label">GPA:</span>
                  <span className="gpa-value">{edu.gpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default Intro

