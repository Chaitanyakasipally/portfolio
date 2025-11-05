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
          className="chatbot-cta"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a 
            href="https://chatgpt.com/g/g-690abaa59a808191af6cb4e38b1de95a-car-performance-research"
            target="_blank"
            rel="noopener noreferrer"
            className="open-chatbot-btn"
          >
            <span className="btn-icon">🚀</span>
            Open Chatbot
          </a>
          <p className="cta-hint">Click to start analyzing car performance data</p>
        </motion.div>

        {/* Detailed Description Section */}
        <motion.div 
          className="detailed-description"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="description-card">
            <h2 className="description-title">Car Performance Research using AI-Driven Analysis</h2>
            
            <div className="description-section">
              <h3 className="section-heading">Introduction</h3>
              <p className="section-text">
                The Car Performance Research Chatbot (GPT-5) is an intelligent AI system designed to analyze and interpret vehicle performance data with precision and efficiency. It provides detailed insights into factors influencing car efficiency, safety, and driving dynamics, enabling researchers, engineers, and automotive enthusiasts to make data-backed decisions.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Description</h3>
              <p className="section-text">
                This chatbot specializes in processing structured car performance datasets to deliver actionable insights. It compares brands and models across multiple parameters such as fuel efficiency, emissions, braking performance, comfort, and reliability.
                By analyzing both raw and optimized datasets, it highlights how performance optimizations impact vehicle behavior under various driving and environmental conditions.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Objective</h3>
              <ul className="objective-list">
                <li>To develop a data-driven chatbot capable of interpreting automotive performance metrics.</li>
                <li>To automate the comparison of car brands and models based on performance indicators.</li>
                <li>To assist users in identifying optimization impacts on fuel efficiency, emissions, and comfort.</li>
                <li>To enhance the decision-making process in automotive research and development through AI analysis.</li>
              </ul>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Process</h3>
              <div className="process-grid">
                <div className="process-step">
                  <span className="step-number">1</span>
                  <h4>Data Collection</h4>
                  <p>Import raw and optimized performance datasets (CSV format).</p>
                </div>
                <div className="process-step">
                  <span className="step-number">2</span>
                  <h4>Preprocessing</h4>
                  <p>Clean and organize data for consistent analysis.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">3</span>
                  <h4>Analysis</h4>
                  <p>Apply filters by brand, model, and driving conditions.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">4</span>
                  <h4>Comparison</h4>
                  <p>Evaluate brand/model performance (e.g., Toyota vs. Hyundai).</p>
                </div>
                <div className="process-step">
                  <span className="step-number">5</span>
                  <h4>Insights Generation</h4>
                  <p>Summarize and visualize findings for user interpretation.</p>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Tools and Technologies Used</h3>
              <div className="tools-grid">
                <div className="tool-item">
                  <span className="tool-icon">🤖</span>
                  <div>
                    <strong>GPT-5 (ChatGPT Custom Model)</strong>
                    <p>Core AI engine for data analysis and response generation.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">🐍</span>
                  <div>
                    <strong>Python (Pandas, Matplotlib)</strong>
                    <p>For data manipulation and visualization.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">🔧</span>
                  <div>
                    <strong>OpenAI ACE Tools</strong>
                    <p>To display and interact with performance data.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">📊</span>
                  <div>
                    <strong>CSV Data Sources</strong>
                    <p>car_performance_dataset.csv, optimized_car_performance_dataset.csv.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Value Proposition</h3>
              <p className="section-text">
                The chatbot simplifies complex automotive analytics by providing instant, intelligent insights from performance data.
                It eliminates the need for manual data sorting or computation, enabling faster and more informed decisions in research, design, and optimization.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Unique Value</h3>
              <ul className="value-list">
                <li>Specialized for automotive performance analysis.</li>
                <li>Provides real-time, brand-specific comparisons.</li>
                <li>Operates exclusively on verifiable dataset information — ensuring data integrity.</li>
                <li>Capable of bridging the gap between raw data and actionable insights using natural language queries.</li>
              </ul>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Relevance</h3>
              <p className="section-text">
                As the automotive industry transitions toward data-centric development and sustainability, tools like this chatbot enhance research precision.
                It's particularly relevant for:
              </p>
              <ul className="relevance-list">
                <li>Automotive R&D teams</li>
                <li>Performance testing engineers</li>
                <li>Environmental analysts</li>
                <li>AI-driven automotive innovation projects</li>
              </ul>
            </div>

            <div className="description-section references">
              <h3 className="section-heading">References</h3>
              <ul className="reference-list">
                <li>Car Performance Dataset – /mnt/data/car_performance_dataset.csv</li>
                <li>Optimized Car Performance Dataset – /mnt/data/optimized_car_performance_dataset.csv</li>
                <li>OpenAI, GPT-5 Chat Model Documentation, 2025.</li>
                <li>Automotive Research Association Reports on Fuel Efficiency and Performance (2024).</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Chatbot

