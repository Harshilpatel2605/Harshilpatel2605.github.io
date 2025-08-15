import './App.css';
import { FaPython, FaCuttlefish, FaJs, FaReact, FaRegStar, FaTrophy, FaGithub } from 'react-icons/fa';
import { SiMui, SiNumpy, SiPandas, SiGit } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function downloadResume() {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1STBrlzhA5hGvwCa_pTtIuGsf4h9SOBr4/view?usp=drive_link';
  link.download = 'Harshil_Patel_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="portfolio-navbar">
      <div className="navbar-content">
        <span className="navbar-name">HARSHIL PATEL</span>
        <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </button>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a></li>
          <li><a href="https://drive.google.com/file/d/1STBrlzhA5hGvwCa_pTtIuGsf4h9SOBr4/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Resume</a></li>
          <li>
            <a href="https://github.com/Harshilpatel2605" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={() => setMenuOpen(false)}>
              <FaGithub style={{ verticalAlign: 'middle', fontSize: '1.3em' }} />
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-wave">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#6366f1" fillOpacity="0.18" d="M0,30 C360,60 1080,0 1440,30 L1440,50 L0,50 Z"/>
          <path fill="#2563eb" fillOpacity="0.13" d="M0,40 C400,0 1040,60 1440,20 L1440,50 L0,50 Z"/>
        </svg>
      </div>
    </nav>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 40 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <header className="portfolio-header fade-in">
        <h1>
          Harshil Patel
          <span className="accent-bar"></span>
        </h1>
        <h2>Fourth Year Undergraduate, Computer Science and Engineering</h2>
        <h3>Indian Institute of Technology Goa</h3>
        <div className="portfolio-contact">
          <a href="mailto:harshilnavinpatel@gmail.com">harshilnavinpatel@gmail.com</a> |
          <span>+91 9409586000</span> |
          <a href="https://www.linkedin.com/in/harshil-patel-hnp2605/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://leetcode.com/u/harshilnavinpatel/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
        <div className="hero-animated-bg">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fill="#6366f1" fillOpacity="0.18" d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z"/>
            <path fill="#2563eb" fillOpacity="0.13" d="M0,100 C400,0 1040,180 1440,60 L1440,120 L0,120 Z"/>
          </svg>
        </div>
      </header>
      <section className="portfolio-section" id="skills" data-aos="fade-up">
        <h2 className="accent-heading">Skills</h2>
        <div className="portfolio-skills-group">
          <div className="portfolio-skills-left">
            <div>
              <strong>Programming Skills:</strong>
              <ul className="portfolio-skills">
                <li><FaPython className="icon-skill" /> Python</li>
                <li><FaCuttlefish className="icon-skill" /> C++</li>
                <li><FaJs className="icon-skill" /> JavaScript</li>
                <li><FaCuttlefish className="icon-skill" /> C</li>
                <li><FaRegStar className="icon-skill" /> DSA</li>
              </ul>
            </div>
            <div style={{ marginTop: '1.1em' }}>
              <strong>Frameworks/Libraries:</strong>
              <ul className="portfolio-skills">
                <li><FaReact className="icon-skill" /> NumPy</li>
                <li><SiMui className="icon-skill" /> Pandas</li>
                <li><SiNumpy className="icon-skill" /> React JS</li>
                <li><SiPandas className="icon-skill" /> Material UI</li>
                <li><SiGit className="icon-skill" /> Git VCS</li>
              </ul>
            </div>
            <div style={{ marginTop: '1.1em' }}>
              <strong>Relevant Coursework:</strong>
              <ul className="portfolio-skills">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Operating Systems</li>
                <li>Computer Networks</li>
                <li>Data Structures & Algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-section" id="projects" data-aos="fade-up" data-aos-delay="100">
        <h2 className="accent-heading">Featured Projects</h2>
        <div className="portfolio-projects-grid">
          <div className="portfolio-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Spam Email Classifier (SVM)</h3>
            <p> Developed a spam detection system from scratch using Soft-Margin Support Vector Machine (SVM). Implemented the dual SVM formulation manually using cvxopt solver, incorporating slack variables and KKT conditions for optimal classification..</p>
            <a href="https://github.com/Harshilpatel2605/Spam-Email-Classification---SVM" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="portfolio-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Fruit Ripeness Classification</h3>
            <p>Developed a Convolutional Neural Network (CNN) using TensorFlow and Keras to classify fruit ripeness for 3 types of fruits (apple, banana, orange) across 9 classes (unripe, fresh, and rotten for each fruit).</p>
            <a href="https://github.com/Harshilpatel2605/Fruit-Ripeness-Classifier" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="portfolio-card" data-aos="zoom-in" data-aos-delay="400">
            <h3>Cash Flow Minimizer System</h3>
            <p>Cash flow optimizer minimizes the inter-bank transactions using greedy algorithms. Designed a flexible architecture supporting multiple payment modes per bank, using set intersections to ensure compatibility in settlements.</p>
            <a href="https://github.com/Harshilpatel2605/Cash-Flow-Minimizer" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
      </section>
      <section className="portfolio-section" id="achievements" data-aos="fade-up" data-aos-delay="200">
        <h2 className="accent-heading">Achievements</h2>
        <ul className="portfolio-achievements">
          <li><FaTrophy className="icon-achievement" /> Got AIR 2740 in JEE Advanced, and AIR 3047 in JEE Mains (General Category).</li>
          <li><FaRegStar className="icon-achievement" /> Solved 700+ DSA questions on LeetCode.</li>
        </ul>
      </section>
      <footer className="portfolio-footer">
        <div className="footer-download">
          <button className="download-resume-btn" onClick={downloadResume}>Download Resume</button>
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <a href="mailto:harshilnavinpatel@gmail.com">Email</a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/harshil-patel-hnp2605/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>|</span>
            <a href="https://github.com/Harshilpatel2605" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
          </div>
          <div className="footer-meta">
            <span>&copy; {new Date().getFullYear()} Harshil Patel</span>
            <span className="footer-made">Made with <FaReact className="footer-react-icon" /> React</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
