import { motion } from 'framer-motion'
import './PersonalValue.css'

const PersonalValue = () => {
  return (
    <div className="personal-value-page">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <motion.div 
        className="personal-value-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="personal-value-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="header-content">
            <div className="icon">⚖️</div>
            <h1>Personal Value Statement & Strategies to Address Human Bias</h1>
            <p>Practical frameworks for reducing bias in automotive engineering environments</p>
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
            <h2 className="description-title">Leadership Values & Bias Reduction in Engineering</h2>
            
            <div className="description-section">
              <h3 className="section-heading">Introduction</h3>
              <p className="section-text">
                This artifact highlights my work in creating a personal value statement and a set of practical strategies to reduce human bias in automotive engineering environments. As someone who works with diagnostics, cross-functional teams, and complex technical decisions, I developed this content to reflect my commitment to fairness, clarity, and inclusive leadership. The artifact demonstrates my ability to communicate values and apply them in a technical, real-world workplace.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Description</h3>
              <p className="section-text">
                The artifact contains a personal leadership statement emphasizing the importance of awareness, transparency, and collaboration. It also outlines five actionable strategies for addressing human bias in engineering workflows. These strategies include encouraging diverse viewpoints, improving communication, using balanced data, enabling feedback loops, and building awareness about bias. Together, they form a practical framework for leading teams with integrity and reducing errors caused by assumptions or one-sided perspectives.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Objective</h3>
              <ul className="objective-list">
                <li>Define my leadership values in the context of technical engineering work</li>
                <li>Demonstrate how ethical decision-making and bias awareness improve team outcomes</li>
                <li>Show how communication and collaboration can strengthen problem-solving</li>
                <li>Provide a clear, structured set of strategies others can apply in similar roles</li>
              </ul>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Process</h3>
              <div className="process-grid">
                <div className="process-step">
                  <span className="step-number">1</span>
                  <h4>Reflection</h4>
                  <p>Reflected on personal experiences in automotive engineering and team leadership.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">2</span>
                  <h4>Identification</h4>
                  <p>Identified common areas where bias affects communication, diagnostics, and decisions.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">3</span>
                  <h4>Value Statement</h4>
                  <p>Drafted a personal value statement expressing my leadership approach.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">4</span>
                  <h4>Strategy Development</h4>
                  <p>Developed five practical, field-specific strategies to address human bias.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">5</span>
                  <h4>Refinement</h4>
                  <p>Refined tone, structure, and clarity using generative AI while keeping the ideas authentic.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">6</span>
                  <h4>Finalization</h4>
                  <p>Finalized the content for professional presentation on my website.</p>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Tools and Technologies Used</h3>
              <div className="tools-grid">
                <div className="tool-item">
                  <span className="tool-icon">🤖</span>
                  <div>
                    <strong>ChatGPT 5.1</strong>
                    <p>Used to refine structure, enhance readability, and summarize key ideas.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">📝</span>
                  <div>
                    <strong>Google Docs / Notion</strong>
                    <p>For drafting and organizing the written content.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">🌐</span>
                  <div>
                    <strong>Website Builder Tools</strong>
                    <p>To display the artifact on my personal site.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">🔧</span>
                  <div>
                    <strong>Workplace Experience</strong>
                    <p>Engineering case examples as primary source of real-world insights.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Value Proposition</h3>
              <p className="section-text">
                This artifact offers a clear, practical approach to reducing human bias in engineering teams. It is valuable for new leaders, technical contributors, and organizations seeking to improve accuracy, communication, and collaboration. It demonstrates how ethical leadership contributes directly to higher-quality engineering outcomes.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Unique Value</h3>
              <ul className="value-list">
                <li>Grounded in real automotive engineering scenarios</li>
                <li>Reflects day-to-day challenges such as diagnostic analysis and cross-team communication</li>
                <li>Provides realistic, proven strategies aligned with technical environments</li>
                <li>Focuses on precision and teamwork where accuracy matters most</li>
              </ul>
              <p className="section-text">
                What makes this artifact unique is its grounding in real automotive engineering scenarios. Instead of generic leadership statements, the content reflects day-to-day challenges such as diagnostic analysis, cross-team communication, and technical decision-making. The strategies are realistic, proven, and aligned with the needs of technical environments where precision and teamwork matter.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Relevance</h3>
              <p className="section-text">
                Human bias affects all engineering and problem-solving environments. Whether reviewing data, interpreting diagnostics, or analyzing system behavior, assumptions can influence decisions. This artifact is relevant because strong technical outcomes depend on fair, balanced, and thoughtful leadership. It also supports modern engineering values: collaboration, transparency, continuous improvement, and safety.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Reflection</h3>
              <p className="section-text">
                Creating this artifact helped me better understand my leadership style and how bias influences daily work. It reminded me that technical accuracy is only one part of engineering—ethical communication and decision-making are equally important. By articulating these strategies, I strengthened my commitment to creating a supportive, inclusive, and high-performing team culture. This process also showed how intentional reflection can lead to clearer communication and stronger leadership.
              </p>
            </div>

            <div className="description-section references">
              <h3 className="section-heading">References</h3>
              <ul className="reference-list">
                <li>Edmondson, A. (2019). The Fearless Organization: Creating Psychological Safety in the Workplace.</li>
                <li>Kahneman, D. (2011). Thinking, Fast and Slow.</li>
                <li>Catmull, E. (2014). Creativity, Inc.</li>
                <li>Experience-based examples from automotive engineering practice</li>
                <li>Draft refinement supported by ChatGPT 5.1</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PersonalValue

