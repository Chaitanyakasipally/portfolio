import { motion } from 'framer-motion'
import './Leadership.css'

const Leadership = () => {
  return (
    <div className="leadership-page">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <motion.div 
        className="leadership-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="leadership-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="header-content">
            <div className="icon">🎯</div>
            <h1>AI/ML Leadership & Change Management Framework</h1>
            <p>Strategic leadership for responsible AI/ML transformation</p>
          </div>
        </motion.div>

        {/* Detailed Description Section */}
        <motion.div 
          className="detailed-description"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="description-card">
            <h2 className="description-title">AI/ML Leadership & Change Management Framework</h2>
            
            <div className="description-section">
              <h3 className="section-heading">Introduction</h3>
              <p className="section-text">
                This artifact represents my work on developing a personal AI/ML leadership and change management framework, created as part of an advanced course on AI integration and leadership. The work reflects my ability to critically assess my leadership strengths and growth areas, synthesize academic concepts with real-world experience, and articulate a structured vision for leading AI/ML-driven transformation responsibly. This artifact demonstrates not only technical awareness of AI/ML but also the human, ethical, and organizational considerations required for successful adoption.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Description</h3>
              <p className="section-text">
                The artifact documents my leadership journey through self-assessment, reflection, and framework creation. It includes an evaluation of my change management and AI/ML integration skills, insights gained throughout the course, and a structured leadership framework consisting of a mission statement, core values, objectives, action plans, and evaluation mechanisms. The focus is on responsible AI leadership, emphasizing ethics, collaboration, continuous learning, and effective change management.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Objectives</h3>
              <ul className="objective-list">
                <li>Assess my readiness to lead AI/ML initiatives within complex organizations</li>
                <li>Identify strengths and gaps in change management and AI leadership capabilities</li>
                <li>Develop a clear, actionable leadership framework aligned with ethical and professional values</li>
                <li>Articulate a long-term vision for contributing to responsible and sustainable AI/ML adoption</li>
                <li>Demonstrate reflective and strategic thinking suitable for leadership roles</li>
              </ul>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Process</h3>
              <div className="process-grid">
                <div className="process-step">
                  <span className="step-number">1</span>
                  <h4>Self-Assessment</h4>
                  <p>Completed structured self-assessments focused on AI/ML integration leadership and change management skills.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">2</span>
                  <h4>Critical Reflection</h4>
                  <p>Analyzed my strengths (strategic thinking, collaboration, communication, empathy) and areas for growth (technical depth, ethics awareness, structured change planning).</p>
                </div>
                <div className="process-step">
                  <span className="step-number">3</span>
                  <h4>Concept Application</h4>
                  <p>Course readings and discussions on change leadership, AI governance, and ethical deployment were applied to real-world organizational contexts.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">4</span>
                  <h4>Framework Development</h4>
                  <p>Synthesized insights into a professional leadership framework with clearly defined mission, values, objectives, and action plans.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">5</span>
                  <h4>Evaluation Planning</h4>
                  <p>Mechanisms for continuous feedback, self-review, and adaptation were embedded to ensure long-term relevance.</p>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Tools and Technologies Used</h3>
              <div className="tools-grid">
                <div className="tool-item">
                  <span className="tool-icon">🤖</span>
                  <div>
                    <strong>AI-Assisted Writing Tools</strong>
                    <p>For ideation, structure refinement, and clarity in documentation.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">📊</span>
                  <div>
                    <strong>Leadership & Change Frameworks</strong>
                    <p>Course materials and industry best practices for structured approach.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">🔍</span>
                  <div>
                    <strong>Reflective Analysis Techniques</strong>
                    <p>Self-assessment and critical reflection methodologies.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">🧠</span>
                  <div>
                    <strong>AI/ML Conceptual Knowledge</strong>
                    <p>Model lifecycle awareness, ethics, and governance considerations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Value Proposition</h3>
              <p className="section-text">
                This artifact demonstrates my ability to bridge technical AI/ML understanding with leadership and change management practices. It shows that I can lead AI initiatives not just from a technical standpoint, but from a strategic, ethical, and human-centered perspective—an increasingly critical requirement in modern organizations.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Unique Value</h3>
              <p className="section-text">
                What differentiates this work is its integration of AI/ML leadership with change management and ethical reflection. Rather than focusing solely on model performance or tools, this artifact emphasizes responsible deployment, workforce impact, governance, and adaptability. It reflects a leadership mindset suited for safety-critical, regulated, and enterprise environments.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Relevance</h3>
              <p className="section-text">
                This artifact is relevant for roles involving:
              </p>
              <ul className="relevance-list">
                <li>AI/ML leadership and strategy</li>
                <li>Technical or engineering leadership</li>
                <li>Digital transformation and change management</li>
                <li>Responsible and ethical AI governance</li>
                <li>Cross-functional collaboration in AI-driven organizations</li>
              </ul>
              <p className="section-text">
                It aligns particularly well with industries such as automotive systems, enterprise software, healthcare, and regulated technology environments.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Reflection</h3>
              <p className="section-text">
                Developing this artifact reshaped my understanding of leadership in the AI era. I moved from viewing AI leadership as primarily innovation-focused to recognizing it as a stewardship role that balances progress with responsibility. The process reinforced the importance of ethical awareness, structured change planning, and continuous learning. This framework now serves as a living document that will evolve alongside my career and the AI landscape.
              </p>
            </div>

            <div className="description-section references">
              <h3 className="section-heading">References</h3>
              <ul className="reference-list">
                <li>Harvard Business Review – How to Be a Successful Change Leader</li>
                <li>Course materials on AI/ML integration and change management</li>
                <li>Industry literature on responsible AI, governance, and ethics</li>
                <li>Personal leadership self-assessments conducted during the course</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Leadership

