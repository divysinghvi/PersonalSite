<script>
  let activeSection = 'about';
  
  function scrollToSection(section) {
    activeSection = section;
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<div class="non-dev-container">
  <nav class="navigation">
    <a href="#about" on:click|preventDefault={() => scrollToSection('about')} class:active={activeSection === 'about'}>About</a>
    <a href="#experience" on:click|preventDefault={() => scrollToSection('experience')} class:active={activeSection === 'experience'}>Experience</a>
    <a href="#projects" on:click|preventDefault={() => scrollToSection('projects')} class:active={activeSection === 'projects'}>Projects</a>
    <a href="#contact" on:click|preventDefault={() => scrollToSection('contact')} class:active={activeSection === 'contact'}>Contact</a>
  </nav>
  
  <section id="about" class="section">
    <div class="hero">
      <h1 class="name">Divy Singhvi</h1>
      <p class="tagline">Full-Stack Developer & Problem Solver</p>
      <p class="description">
        Building scalable, efficient digital experiences with a focus on clean design and user impact.
      </p>
    </div>
    
    <div class="content">
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
  </section>
  
  <section id="experience" class="section">
    <h2>Experience</h2>
    
    <div class="experience-card">
      <div class="exp-header">
        <h3>Golang Developer Intern</h3>
        <span class="company">Euro Technologies</span>
      </div>
      <p class="period">Aug 2025 - Nov 2025 | On-Site</p>
      <ul>
        <li>Developed an IAM platform MVP</li>
        <li>Built backend services enhancing authentication and scalability</li>
        <li>Designed secure endpoints for authentication flows</li>
      </ul>
    </div>
    
    <div class="experience-card">
      <div class="exp-header">
        <h3>Software Engineering Intern</h3>
        <span class="company">EF Polymer Ltd.</span>
      </div>
      <p class="period">May 2024 - Jul 2025 | Hybrid (AgriTech startup valued at $70M+)</p>
      <ul>
        <li>Developed Sales & Warehouse Management System for agri supply chains</li>
        <li>Achieved 40% reduction in manual entries and 20% fewer mis-products</li>
        <li>Deployed system across multiple warehouses</li>
      </ul>
    </div>
    
    <div class="experience-card">
      <div class="exp-header">
        <h3>Open Source Contributor</h3>
        <span class="company">Kubernetes (CNCF)</span>
      </div>
      <p class="period">Mar 2025 - Present | Remote</p>
      <ul>
        <li>Fixed bugs in driver provisioning and container networking (Minikube)</li>
        <li>Enhanced CI automation for reliability</li>
        <li>Actively collaborating in PR reviews and RFC discussions</li>
      </ul>
    </div>
  </section>
  
  <section id="projects" class="section">
    <h2>Featured Projects</h2>
    
    <div class="project-card">
      <h3>Self-Healing Microservice Infrastructure</h3>
      <p>
        Built microservices with automatic failure detection and container restarts. 
        Integrated monitoring for performance tracking and health checks.
      </p>
    </div>
    
    <div class="project-card">
      <h3>Savely - Price Comparator Chrome Extension</h3>
      <p>
        Browser extension comparing real-time prices across major e-commerce sites. 
        <strong>5,000+ active users</strong> on Chrome Web Store.
      </p>
      <a href="https://chromewebstore.google.com/detail/savely-price-comparison-f/nikhaokjeplnpmiacenkhmbfoeondkga" target="_blank" class="project-link">
        View on Chrome Web Store →
      </a>
    </div>
    
    <div class="project-card">
      <h3>Notely: AI-Powered Note App</h3>
      <p>
        Mobile app with AI features including OCR, Speech-to-Text, and Auto-Summarization. 
        Implemented authentication and realtime sync for seamless cross-device experience.
      </p>
    </div>
    
    <div class="project-card">
      <h3>Lawyer Document Summarizer</h3>
      <p>
        AI-based legal document summarizer with secure upload and retrieval flow. 
        Uses fine-tuned models for intelligent document analysis.
      </p>
    </div>
  </section>
  
  <section id="contact" class="section">
    <h2>Let's Connect</h2>
    
    <div class="contact-content">
      <p class="contact-intro">
        I'm always open to discussing new opportunities, interesting projects, 
        or just having a chat about technology.
      </p>
      
      <div class="contact-methods">
        <div class="contact-item">
          <span class="label">Email</span>
          <a href="mailto:divysinghvi5@gmail.com">divysinghvi5@gmail.com</a>
        </div>
        
        <div class="contact-item">
          <span class="label">Phone</span>
          <a href="tel:+919587960934">+91 9587960934</a>
        </div>
      </div>
      
      <div class="social-links">
        <a href="https://github.com/divysinghvi" target="_blank" class="social-button">GitHub</a>
        <a href="https://linkedin.com/in/divysinghvi" target="_blank" class="social-button">LinkedIn</a>
        <a href="https://x.com/sdiv172632" target="_blank" class="social-button">Twitter</a>
        <a href="https://calendly.com/divysinghvi5/let-s-connect" target="_blank" class="social-button primary">Schedule a Meeting</a>
      </div>
    </div>
  </section>
  
  <footer>
    <p>&copy; 2025 Divy Singhvi. All rights reserved.</p>
  </footer>
</div>

<style>
  .non-dev-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    color: #f8f8f8;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }
  
  .navigation {
    position: static;
    background: rgba(30, 30, 30, 0.95);
    backdrop-filter: blur(10px);
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
    z-index: 100;
    border-bottom: 1px solid rgba(87, 199, 84, 0.2);
    border-radius: 10px;
    margin-bottom: 20px;
  }
  
  .navigation a {
    color: #a0a0a0;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
  }
  
  .navigation a:hover,
  .navigation a.active {
    color: #57c754;
  }
  
  .navigation a.active::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    right: 0;
    height: 2px;
    background: #57c754;
  }
  
  .section {
    margin-bottom: 80px;
    padding-top: 60px;
  }
  
  .hero {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .name {
    font-size: 48px;
    font-weight: 700;
    margin: 0 0 10px 0;
    background: linear-gradient(135deg, #57c754, #57c7c4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .tagline {
    font-size: 20px;
    color: #57c7c4;
    margin: 0 0 20px 0;
    font-weight: 400;
  }
  
  .description {
    font-size: 16px;
    color: #c0c0c0;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .content p {
    font-size: 16px;
    line-height: 1.8;
    color: #d0d0d0;
    margin-bottom: 15px;
  }
  
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #57c754;
  }
  
  .experience-card,
  .project-card {
    background: rgba(45, 45, 45, 0.6);
    border: 1px solid rgba(87, 199, 84, 0.2);
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }
  
  .experience-card:hover,
  .project-card:hover {
    border-color: rgba(87, 199, 84, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(87, 199, 84, 0.1);
  }
  
  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }
  
  .experience-card h3,
  .project-card h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: #f8f8f8;
  }
  
  .company {
    color: #57c7c4;
    font-size: 16px;
    font-weight: 500;
  }
  
  .period {
    color: #888;
    font-size: 14px;
    margin-bottom: 15px;
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
    color: #d0d0d0;
    line-height: 1.6;
  }
  
  .project-card p {
    color: #d0d0d0;
    line-height: 1.7;
    margin: 10px 0;
  }
  
  .project-link {
    display: inline-block;
    margin-top: 10px;
    color: #57c754;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .project-link:hover {
    color: #7de87a;
  }
  
  .contact-content {
    text-align: center;
  }
  
  .contact-intro {
    font-size: 18px;
    color: #d0d0d0;
    line-height: 1.7;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .contact-methods {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }
  
  .contact-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .contact-item .label {
    font-size: 14px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .contact-item a {
    font-size: 18px;
    color: #57c754;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .contact-item a:hover {
    color: #7de87a;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  
  .social-button {
    padding: 12px 24px;
    background: rgba(87, 199, 84, 0.15);
    border: 1px solid rgba(87, 199, 84, 0.3);
    border-radius: 8px;
    color: #57c754;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  .social-button:hover {
    background: rgba(87, 199, 84, 0.25);
    border-color: #57c754;
    transform: translateY(-2px);
  }
  
  .social-button.primary {
    background: #57c754;
    color: #1e1e1e;
    border-color: #57c754;
  }
  
  .social-button.primary:hover {
    background: #7de87a;
    border-color: #7de87a;
  }
  
  footer {
    text-align: center;
    padding: 40px 20px;
    color: #666;
    font-size: 14px;
    border-top: 1px solid rgba(87, 199, 84, 0.2);
  }
  
  @media (max-width: 600px) {
    .non-dev-container {
      padding: 15px;
    }
    
    .navigation {
      gap: 15px;
      padding: 12px 15px;
      overflow-x: auto;
      justify-content: flex-start;
      -webkit-overflow-scrolling: touch;
    }
    
    .navigation a {
      font-size: 13px;
      white-space: nowrap;
    }
    
    .name {
      font-size: 36px;
    }
    
    .tagline {
      font-size: 16px;
    }
    
    .description {
      font-size: 14px;
    }
    
    h2 {
      font-size: 26px;
    }
    
    .exp-header {
      flex-direction: column;
      gap: 5px;
    }
    
    .contact-methods {
      flex-direction: column;
      gap: 30px;
    }
    
    .social-links {
      flex-direction: column;
    }
    
    .social-button {
      width: 100%;
      text-align: center;
    }
  }
</style>
