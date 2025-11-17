import { motion } from 'framer-motion'
import './DeepLearning.css'

const DeepLearning = () => {
  return (
    <div className="deeplearning-page">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <motion.div 
        className="deeplearning-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="deeplearning-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="header-content">
            <div className="icon">🧠</div>
            <h1>Simple Explanation of Deep Learning & Neurons</h1>
            <p>Making complex AI concepts accessible to everyone</p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="deeplearning-image-section"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="image-container">
            <img 
              src="/portfolio/DL_Neurons_image.jpg" 
              alt="Deep Learning & Neurons Visualization" 
              className="deeplearning-image"
            />
            <p className="image-caption">Understanding Neural Networks and Deep Learning</p>
          </div>
        </motion.div>

        {/* Detailed Description Section */}
        <motion.div 
          className="detailed-description"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="description-card">
            <h2 className="description-title">Simple Explanation of Deep Learning & Neurons</h2>
            
            <div className="description-section">
              <h3 className="section-heading">Introduction</h3>
              <p className="section-text">
                This artifact showcases my work in explaining deep learning and neural networks in simple, accessible terms. Inspired by the idea that true understanding comes from being able to teach a concept clearly, I translated complex machine learning ideas into language that anyone—regardless of technical background—can understand.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Description</h3>
              <p className="section-text">
                The artifact includes a plain-language explanation of how deep learning works, how neurons process information, and how neural networks learn from examples. Through analogies, simplified diagrams, and step-by-step breakdowns, the content transforms advanced AI concepts into approachable knowledge suitable for students, beginners, and non-technical audiences.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Objective</h3>
              <p className="section-text">
                The objective of this work is to demonstrate the ability to:
              </p>
              <ul className="objective-list">
                <li>Simplify complex technical concepts without losing accuracy</li>
                <li>Communicate AI/ML topics clearly for diverse audiences</li>
                <li>Apply educational strategies such as chunking, storytelling, and visual thinking</li>
              </ul>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Process</h3>
              <div className="process-grid">
                <div className="process-step">
                  <span className="step-number">1</span>
                  <h4>Research</h4>
                  <p>Researched the core functions of neurons and deep neural networks.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">2</span>
                  <h4>Identify Key Concepts</h4>
                  <p>Identified key concepts that often confuse beginners.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">3</span>
                  <h4>Create Analogies</h4>
                  <p>Created a relatable analogy (e.g., teaching a child through examples).</p>
                </div>
                <div className="process-step">
                  <span className="step-number">4</span>
                  <h4>Break Down Content</h4>
                  <p>Broke the explanation into small, digestible sections.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">5</span>
                  <h4>Refinement</h4>
                  <p>Used iterative refinement with generative AI to improve clarity.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">6</span>
                  <h4>Quality Assurance</h4>
                  <p>Ensured the final write-up remained accurate, friendly, and engaging.</p>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Tools and Technologies Used</h3>
              <div className="tools-grid">
                <div className="tool-item">
                  <span className="tool-icon">🤖</span>
                  <div>
                    <strong>ChatGPT (GPT-5)</strong>
                    <p>Used for refining explanations, simplifying terminology, and improving clarity.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">✨</span>
                  <div>
                    <strong>Gemini (Google AI)</strong>
                    <p>Used for generating supporting images and visual representations of neurons and deep learning concepts.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">📝</span>
                  <div>
                    <strong>Google Docs / Jupyter Notebook</strong>
                    <p>Used for drafting, organizing thoughts, and structuring the artifact content.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">🌐</span>
                  <div>
                    <strong>Website Publishing Tools</strong>
                    <p>Used to upload and present the artifact on my portfolio site.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Value Proposition</h3>
              <p className="section-text">
                This artifact provides a simple yet accurate explanation of a complex topic, making deep learning less intimidating. It serves as an educational resource for students, professionals transitioning into AI, and anyone interested in understanding machine learning fundamentals without technical overload.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Unique Value</h3>
              <p className="section-text">
                What makes this work unique is the balance between technical correctness and extreme simplicity. Rather than oversimplifying to the point of distortion, the explanation keeps the core ideas intact while using stories, everyday examples, and plain English to make the content memorable and engaging.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Relevance</h3>
              <p className="section-text">
                Deep learning powers modern innovations such as autonomous vehicles, speech recognition, medical diagnostics, and recommendation systems. Understanding neural networks—even at a basic level—is becoming increasingly important in both technical and non-technical fields. This artifact reflects my ability to teach and communicate AI concepts effectively, a valuable skill in today's data-driven world.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Reflection</h3>
              <p className="section-text">
                Creating this artifact strengthened my ability to explain complex ideas clearly and responsibly. It also reinforced the importance of audience-friendly communication—especially when working in fields like AI, where terminology can easily overwhelm beginners. Using analogies and progressive disclosure helped me communicate with empathy and clarity. This process also mirrored the deep learning concept itself: small improvements, made repeatedly, lead to strong results.
              </p>
            </div>

            <div className="description-section references">
              <h3 className="section-heading">References</h3>
              <ul className="reference-list">
                <li>Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press.</li>
                <li>Chollet, F. (2018). Deep Learning with Python. Manning Publications.</li>
                <li>Stanford CS231n: Convolutional Neural Networks for Visual Recognition.</li>
                <li>Mazhar et al. (2023). Applications of AI in Data Processing.</li>
                <li>Additional clarifications and refinement supported by ChatGPT (GPT-5).</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DeepLearning

