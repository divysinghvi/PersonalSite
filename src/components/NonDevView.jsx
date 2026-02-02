import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, Calendar } from 'lucide-react';
import './NonDevView.css';

const BLUR_FADE_DELAY = 0.04;

const BlurFade = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const BlurFadeText = ({ text, delay = 0, className = '' }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {text}
    </motion.h1>
  );
};

const NonDevView = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="non-dev-wrapper">
      <nav className="nav-bar">
        <div className="nav-content">
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className={activeSection === 'hero' ? 'active' : ''}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className={activeSection === 'about' ? 'active' : ''}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.a>
          <motion.a
            href="#experience"
            onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
            className={activeSection === 'experience' ? 'active' : ''}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Experience
          </motion.a>
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className={activeSection === 'projects' ? 'active' : ''}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className={activeSection === 'contact' ? 'active' : ''}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.a>
        </div>
      </nav>

      <main className="main-content">
        <section id="hero" className="hero-section">
          <div className="container">
            <div className="hero-content">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="hero-title"
                text="Hi, I'm Divy"
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="hero-subtitle">Full-Stack Developer & Problem Solver</p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="hero-description">
                  Building scalable, efficient digital experiences with a focus on clean design and user impact.
                </p>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <h2 className="section-title">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="about-content">
                <p>
                  I'm a passionate developer pursuing B.Tech in Electronics and Communication Engineering 
                  at College of Technology and Engineering, Udaipur (2023-2027).
                </p>
                <p>
                  I specialize in creating solutions that are both technically sound and user-friendly, 
                  with experience in modern web and mobile technologies. I believe in building technology 
                  that not only works — but matters.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="container">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h2 className="section-title">Work Experience</h2>
            </BlurFade>

            <div className="experience-list">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <motion.div 
                  className="experience-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="exp-header">
                    <div className="exp-title-wrapper">
                      <h3 className="exp-title">Golang Developer Intern</h3>
                      <span className="exp-company">Euro Technologies</span>
                    </div>
                    <div className="exp-period">Aug 2025 - Nov 2025</div>
                  </div>
                  <p className="exp-location">On-Site</p>
                  <ul className="exp-achievements">
                    <li>Developed an IAM platform MVP</li>
                    <li>Built backend services enhancing authentication and scalability</li>
                    <li>Designed secure endpoints for authentication flows</li>
                  </ul>
                </motion.div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 8}>
                <motion.div 
                  className="experience-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="exp-header">
                    <div className="exp-title-wrapper">
                      <h3 className="exp-title">Software Engineering Intern</h3>
                      <span className="exp-company">EF Polymer Ltd.</span>
                    </div>
                    <div className="exp-period">May 2024 - Jul 2025</div>
                  </div>
                  <p className="exp-location">Hybrid (AgriTech startup valued at $70M+)</p>
                  <ul className="exp-achievements">
                    <li>Developed Sales & Warehouse Management System for agri supply chains</li>
                    <li>Achieved 40% reduction in manual entries and 20% fewer mis-products</li>
                    <li>Deployed system across multiple warehouses</li>
                  </ul>
                </motion.div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <motion.div 
                  className="experience-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="exp-header">
                    <div className="exp-title-wrapper">
                      <h3 className="exp-title">Open Source Contributor</h3>
                      <span className="exp-company">Kubernetes (CNCF)</span>
                    </div>
                    <div className="exp-period">Mar 2025 - Present</div>
                  </div>
                  <p className="exp-location">Remote</p>
                  <ul className="exp-achievements">
                    <li>Fixed bugs in driver provisioning and container networking (Minikube)</li>
                    <li>Enhanced CI automation for reliability</li>
                    <li>Actively collaborating in PR reviews and RFC discussions</li>
                  </ul>
                </motion.div>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="container">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <h2 className="section-title">Featured Projects</h2>
            </BlurFade>

            <div className="projects-grid">
              <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <motion.div 
                  className="project-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="project-title">Self-Healing Microservice Infrastructure</h3>
                  <p className="project-description">
                    Built microservices with automatic failure detection and container restarts. 
                    Integrated monitoring for performance tracking and health checks.
                  </p>
                </motion.div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 12}>
                <motion.div 
                  className="project-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="project-title">Savely - Price Comparator Chrome Extension</h3>
                  <p className="project-description">
                    Browser extension comparing real-time prices across major e-commerce sites. 
                    <strong> 5,000+ active users</strong> on Chrome Web Store.
                  </p>
                  <a 
                    href="https://chromewebstore.google.com/detail/savely-price-comparison-f/nikhaokjeplnpmiacenkhmbfoeondkga" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on Chrome Web Store
                    <ArrowUpRight className="link-icon" />
                  </a>
                </motion.div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 13}>
                <motion.div 
                  className="project-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="project-title">Notely: AI-Powered Note App</h3>
                  <p className="project-description">
                    Mobile app with AI features including OCR, Speech-to-Text, and Auto-Summarization. 
                    Implemented authentication and realtime sync for seamless cross-device experience.
                  </p>
                </motion.div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 14}>
                <motion.div 
                  className="project-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="project-title">Lawyer Document Summarizer</h3>
                  <p className="project-description">
                    AI-based legal document summarizer with secure upload and retrieval flow. 
                    Uses fine-tuned models for intelligent document analysis.
                  </p>
                </motion.div>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <h2 className="section-title">Let's Connect</h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="contact-content">
                <p className="contact-intro">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology.
                </p>

                <div className="contact-methods">
                  <motion.div 
                    className="contact-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Email</span>
                      <a href="mailto:divysinghvi5@gmail.com">divysinghvi5@gmail.com</a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="contact-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Phone</span>
                      <a href="tel:+919587960934">+91 9587960934</a>
                    </div>
                  </motion.div>
                </div>

                <div className="social-links">
                  <motion.a
                    href="https://github.com/divysinghvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/divysinghvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://x.com/sdiv172632"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Twitter
                  </motion.a>
                  <motion.a
                    href="https://calendly.com/divysinghvi5/let-s-connect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button primary"
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="button-icon" />
                    Schedule a Meeting
                  </motion.a>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Divy Singhvi. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default NonDevView;
