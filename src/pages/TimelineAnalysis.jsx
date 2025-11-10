import { motion } from 'framer-motion'
import './TimelineAnalysis.css'

const TimelineAnalysis = () => {
  return (
    <div className="timeline-analysis-page">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <motion.div 
        className="timeline-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="timeline-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="header-content">
            <div className="icon">📊</div>
            <h1>AI/ML Timeline — Evolution of Artificial Intelligence and Machine Learning</h1>
            <p>A comprehensive chronological narrative from 1950 to 2024</p>
          </div>
        </motion.div>

        {/* Timeline Image Section */}
        <motion.div 
          className="timeline-image-section"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="image-container">
            <img 
              src="/portfolio/artifact2.jpeg" 
              alt="AI/ML Timeline Evolution" 
              className="timeline-image"
            />
            <p className="image-caption">Evolution of AI/ML: From Turing to Modern Multimodal Systems</p>
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
            <h2 className="description-title">AI/ML Timeline Project</h2>
            
            <div className="description-section">
              <h3 className="section-heading">Introduction</h3>
              <p className="section-text">
                The AI/ML Timeline project presents a detailed chronological narrative of artificial intelligence and machine learning development — from Alan Turing's foundational question, "Can machines think?" in 1950, to the rise of multimodal generative AI in 2024. This work was created as part of the Machine Learning Fundamentals course to illustrate how decades of innovation shaped the intelligent systems used today.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Description</h3>
              <p className="section-text">
                This artifact visually and descriptively summarizes key milestones such as the 1956 Dartmouth Conference, ELIZA (the first chatbot), the backpropagation breakthrough in 1986, IBM Deep Blue's chess victory, ImageNet's creation, and the advent of deep learning and large language models (LLMs). It also explores the modern transition to multimodal AI (text, image, audio, video) in platforms like Gemini 1.5 and OpenAI Sora.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Objective</h3>
              <p className="section-text">
                The objective of this project was to research and document pivotal moments in AI/ML evolution, connecting historical research breakthroughs with modern deep learning and generative AI systems. The timeline helps students, engineers, and AI enthusiasts understand the technological progression, paradigm shifts, and patterns of innovation that led to today's state-of-the-art AI.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Process</h3>
              <div className="process-grid">
                <div className="process-step">
                  <span className="step-number">1</span>
                  <h4>Research and Curation</h4>
                  <p>Collected verified references from academic sources (Nature, arXiv, Stanford archives, IBM, and Wikipedia).</p>
                </div>
                <div className="process-step">
                  <span className="step-number">2</span>
                  <h4>Chronological Structuring</h4>
                  <p>Organized milestones into decades to highlight transitions — symbolic AI → neural networks → deep learning → generative AI.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">3</span>
                  <h4>Tool Usage</h4>
                  <p>Gemini AI was used for draft generation, fact validation, and summarization of technical papers.</p>
                </div>
                <div className="process-step">
                  <span className="step-number">4</span>
                  <h4>Design</h4>
                  <p>The final content was formatted as a structured PDF timeline with citations and clear academic attributions.</p>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Tools and Technologies Used</h3>
              <div className="tools-grid">
                <div className="tool-item">
                  <span className="tool-icon">🤖</span>
                  <div>
                    <strong>Gemini AI</strong>
                    <p>For synthesis, summarization, and fact validation.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">📝</span>
                  <div>
                    <strong>Microsoft Word / Google Docs</strong>
                    <p>For documentation and PDF generation.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">🔬</span>
                  <div>
                    <strong>Research Platforms</strong>
                    <p>arXiv, Nature, ACM Digital Library, IBM archives.</p>
                  </div>
                </div>
                <div className="tool-item">
                  <span className="tool-icon">📚</span>
                  <div>
                    <strong>Citation Sources</strong>
                    <p>Scholarly links including Turing (1950), Dartmouth Workshop, ImageNet, AlphaGo, and Transformer papers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Value Proposition</h3>
              <p className="section-text">
                The timeline distills over seven decades of AI progress into a concise educational artifact. It bridges the gap between academic learning and real-world AI applications — helping readers quickly grasp why each innovation mattered and how it influenced future systems like GPT, Gemini, and AlphaGo.
              </p>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Unique Value</h3>
              <ul className="value-list">
                <li>Unlike generic AI histories, this artifact integrates technical explanations, references to original research papers, and modern interpretations using AI tools for curation.</li>
                <li>It highlights the interplay between human creativity and machine intelligence — showing how each generation of AI research built upon the previous one.</li>
                <li>Provides clear academic attributions and verifiable sources for all major milestones.</li>
                <li>Connects historical breakthroughs to modern AI applications in an accessible format.</li>
              </ul>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Relevance</h3>
              <p className="section-text">
                This timeline is highly relevant to:
              </p>
              <ul className="relevance-list">
                <li>Students and professionals learning AI fundamentals</li>
                <li>Educators and curriculum designers seeking concise visuals of AI's evolution</li>
                <li>Industry innovators tracking how past breakthroughs guide future development in multimodal and generative AI</li>
                <li>Researchers understanding the historical context of modern AI capabilities</li>
              </ul>
            </div>

            <div className="description-section">
              <h3 className="section-heading">Reflection</h3>
              <p className="section-text">
                Creating this artifact deepened my appreciation for how iterative progress, failure (AI winters), and interdisciplinary collaboration shaped today's AI. Using Gemini AI helped me balance automation with human critical thinking — reinforcing that the most powerful AI outcomes come from human–machine synergy. The process taught me academic rigor, proper sourcing, and clarity in technical storytelling.
              </p>
            </div>

            <div className="description-section references">
              <h3 className="section-heading">References</h3>
              <ul className="reference-list">
                <li>Turing, A. M. (1950). Computing Machinery and Intelligence. University of Manchester. <a href="https://academic.oup.com/mind/article/LIX/236/433/986238" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>McCarthy, J., Minsky, M., Shannon, C., Rochester, N. (1956). Dartmouth AI Proposal. <a href="http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf" target="_blank" rel="noopener noreferrer">Link</a></li>
                <li>Rumelhart, D., Hinton, G., Williams, R. (1986). Learning Representations by Back-Propagating Errors. Nature.</li>
                <li>Li, F.-F. et al. (2009). ImageNet: A Large-Scale Hierarchical Image Database.</li>
                <li>Krizhevsky, A., Sutskever, I., & Hinton, G. (2012). ImageNet Classification with Deep Convolutional Neural Networks.</li>
                <li>Silver, D. et al. (2016). Mastering the Game of Go with Deep Neural Networks and Tree Search. Nature.</li>
                <li>Vaswani, A. et al. (2017). Attention Is All You Need. arXiv:1706.03762.</li>
                <li>Brown, T. et al. (2020). Language Models are Few-Shot Learners. arXiv:2005.14165.</li>
                <li>Google DeepMind. (2024). Gemini 1.5: Multimodal AI for Long-Context Reasoning.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TimelineAnalysis

