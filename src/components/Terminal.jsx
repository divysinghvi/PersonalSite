import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const Terminal = () => {
  const terminalBodyRef = useRef(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const commandHistoryRef = useRef([]);
  const historyIndexRef = useRef(0);
  
  const asciiArt = `
 _____   _                   
|  __ \\ (_)               
| |  | | _  __   __ _   _  
| |  | || | \\ \\ / /| | | |
| |__| || |  \\ V / | |_| |  
|_____/ |_|   \\_/   \\__, |
                     __/ |                                       
                    |___/                                        
`;
  
  const aliases = {
    'bio': 'about',
    'exp': 'experience',
    'work': 'experience',
    'portfolio': 'projects',
    'tech': 'skills',
    'email': 'contact',
    'github': 'git',
    'meet': 'connect',
    'schedule': 'connect',
    'cv': 'resume',
    'cls': 'clear'
  };
  
  const commands = {
    help: () => `<strong>Available Commands:</strong>

  <span class="help-command">help</span>              Show this help message
  <span class="help-command">about</span>             Learn about Divy <span style="color: #666;">(alias: bio)</span>
  <span class="help-command">experience</span>        View my work experience <span style="color: #666;">(alias: exp, work)</span>
  <span class="help-command">projects</span>          View my portfolio projects <span style="color: #666;">(alias: portfolio)</span>
  <span class="help-command">skills</span>            List my technical skills <span style="color: #666;">(alias: tech)</span>
  <span class="help-command">contact</span>           Get my contact information <span style="color: #666;">(alias: email)</span>
  <span class="help-command">social</span>            Show my social media links
  <span class="help-command">git</span>               View my GitHub profile <span style="color: #666;">(alias: github)</span>
  <span class="help-command">resume</span>            Download my resume <span style="color: #666;">(alias: cv)</span>
  <span class="help-command">connect</span>           Schedule a meeting <span style="color: #666;">(alias: meet, schedule)</span>
  <span class="help-command">now</span>               What I'm currently working on
  <span class="help-command">history</span>           Show command history
  <span class="help-command">clear</span>             Clear the terminal <span style="color: #666;">(alias: cls)</span>
  <span class="help-command">banner</span>            Display the welcome banner

<strong>Standard Commands:</strong>
  ls, pwd, whoami, date, echo

<strong>Easter Eggs:</strong>
  <span style="color: #ff69b4;">sudo, hack, matrix, coffee, rocket</span> 😉`,
    
    about: () => `Hi, I'm Divy Singhvi — a passionate full-stack developer and problem solver.

Currently pursuing B.Tech in Electronics and Communication Engineering at College of Technology and Engineering, Udaipur (2023-2027). I specialize in building scalable, efficient, and user-focused digital experiences with expertise in Go, Python, Java, Flutter, and Django.

I'm deeply familiar with deploying and managing applications using Docker and Kubernetes, and I enjoy leveraging cloud platforms to ensure scalability and reliability. As an active open-source contributor to Kubernetes (Minikube), I work on improving driver provisioning, CI automation, and container networking.

I've worked as a Golang Developer Intern at Euro Technologies building an IAM platform MVP, and previously as a Software Engineering Intern at EF Polymer Ltd. (AgriTech startup valued at $70M+), where I developed a Sales & Warehouse Management System that reduced manual entries by 40%.

I believe in building tech that not only works — but matters.`,
    
    experience: () => `<div class="project">
<strong>Golang Developer Intern</strong> — Euro Technologies
<span style="color: #666;">Aug 2025 - Nov 2025 | On-Site</span>
• Worked on developing an IAM platform MVP
• Developed backend using Go, Gin, Redis, enhancing authentication and scalability
• Designed secure endpoints for full OIDC authentication flow and session lifecycle
<div class="tags">
    <span class="tag">Go</span>
    <span class="tag">Gin</span>
    <span class="tag">Redis</span>
    <span class="tag">OIDC</span>
    <span class="tag">IAM</span>
</div>
</div>

<div class="project">
<strong>Software Engineering Intern</strong> — EF Polymer Ltd.
<span style="color: #666;">May 2024 - Jul 2025 | Hybrid (AgriTech startup valued at $70M+)</span>
• Developed a Sales & Warehouse Management System tailored to agri supply chains
• Implemented inventory tracking, analytics dashboards, and movement back-tracing
• Achieved 40% reduction in manual entries and 20% fewer mis-products
• Deployed system across multiple warehouses with successful production adoption
<div class="tags">
    <span class="tag">Zoho Creator</span>
    <span class="tag">Deluge</span>
    <span class="tag">Workflow Automation</span>
    <span class="tag">Analytics</span>
</div>
</div>

<div class="project">
<strong>Open Source Contributor</strong> — Kubernetes (CNCF)
<span style="color: #666;">Mar 2025 - Present | Remote</span>
• Fixed bugs in driver provisioning, binary generation, and container networking (Minikube)
• Enhanced GitHub Actions CI automation for image-testing reliability
• Actively collaborating in PR reviews and RFC discussions
<div class="tags">
    <span class="tag">Kubernetes</span>
    <span class="tag">Go</span>
    <span class="tag">CI/CD</span>
    <span class="tag">Open Source</span>
</div>
</div>`,
    
    projects: () => `<div class="project">
<strong>Self-Healing Microservice Infrastructure</strong>
Built microservices with automatic failure detection and container restarts. Added Prometheus + Grafana metrics for structured performance monitoring and health checks.
<div class="tags">
    <span class="tag">Docker</span>
    <span class="tag">Kubernetes</span>
    <span class="tag">Django</span>
    <span class="tag">Prometheus</span>
    <span class="tag">Grafana</span>
</div>
</div>

<div class="project">
<strong>Price Comparator Chrome Extension - Savely</strong>
Browser extension comparing real-time prices across major e-commerce sites. Used web scraping with proxy & retry logic for reliable data fetching. 5,000+ active users on Chrome Web Store.
<div class="tags">
    <span class="tag">Flask</span>
    <span class="tag">FastAPI</span>
    <span class="tag">Web Scraping</span>
    <span class="tag">Svelte</span>
    <span class="tag">Chrome Extension</span>
</div>
<a href="https://chromewebstore.google.com/detail/savely-price-comparison-f/nikhaokjeplnpmiacenkhmbfoeondkga" target="_blank" class="link">→ View on Chrome Web Store</a>
</div>

<div class="project">
<strong>Notely: AI-Powered Note App</strong>
Flutter-based note-taking app with AI features including OCR, Speech-to-Text, and Auto-Summarization. Implemented Firebase authentication & realtime sync for seamless cross-device experience.
<div class="tags">
    <span class="tag">Flutter</span>
    <span class="tag">Firebase</span>
    <span class="tag">Gemini API</span>
    <span class="tag">OCR</span>
</div>
</div>

<div class="project">
<strong>Lawyer Document Summarizer</strong>
LLM-based legal document summarizer with secure upload and retrieval flow. Uses fine-tuned Mistral model hosted with Ollama for intelligent document analysis.
<div class="tags">
    <span class="tag">Django</span>
    <span class="tag">React</span>
    <span class="tag">Ollama</span>
    <span class="tag">Mistral</span>
</div>
</div>`,
    
    skills: () => `<strong>Languages:</strong>
<div class="tags">
    <span class="tag">Go</span>
    <span class="tag">Python</span>
    <span class="tag">Java</span>
    <span class="tag">Dart</span>
    <span class="tag">JavaScript</span>
    <span class="tag">SQL</span>
</div>

<strong>Frameworks & Tools:</strong>
<div class="tags">
    <span class="tag">Django</span>
    <span class="tag">Flutter</span>
    <span class="tag">Docker</span>
    <span class="tag">Kubernetes</span>
    <span class="tag">Gin</span>
    <span class="tag">Redis</span>
    <span class="tag">PostgreSQL</span>
</div>

<strong>Platforms & Services:</strong>
<div class="tags">
    <span class="tag">Firebase</span>
    <span class="tag">Prometheus</span>
    <span class="tag">Grafana</span>
    <span class="tag">GitHub Actions</span>
    <span class="tag">Postman</span>
</div>

<strong>Other:</strong>
<div class="tags">
    <span class="tag">DSA</span>
    <span class="tag">Open Source Collaboration</span>
</div>`,
    
    contact: () => `You can reach me at <a href="mailto:divysinghvi5@gmail.com" class="link">divysinghvi5@gmail.com</a>
Phone: +91 9587960934

Feel free to reach out for collaboration opportunities or just to say hello!`,
    
    social: () => `GitHub: <a href="https://github.com/divysinghvi" target="_blank" class="link">github.com/divysinghvi</a>
LinkedIn: <a href="https://linkedin.com/in/divysinghvi" target="_blank" class="link">linkedin.com/in/divysinghvi</a>
Portfolio: <a href="https://divysinghvi.vercel.app/" target="_blank" class="link">divysinghvi.vercel.app</a>
Twitter: <a href="https://x.com/sdiv172632" target="_blank" class="link">twitter.com/sdiv172632</a>`,
    
    git: () => {
      window.open("https://github.com/divysinghvi", "_blank");
      return '<span class="success">✓ Opening GitHub profile in new tab...</span>';
    },
    
    connect: () => {
      window.open("https://calendly.com/divysinghvi5/let-s-connect", "_blank");
      return '<span class="success">✓ Opening Calendly to schedule a meeting...</span>';
    },
    
    resume: () => {
      window.open("resume.pdf", "_blank");
      return '<span class="success">✓ Opening resume in new tab...</span>';
    },
    
    now: () => `<strong>Currently Working On:</strong>
• Contributing to Kubernetes (Minikube) - fixing bugs in driver provisioning, binary generation, and container networking
• Enhancing GitHub Actions CI automation for image-testing reliability
• Actively participating in PR reviews and RFC discussions in CNCF community
• Exploring advanced Go patterns and microservices architecture
• Building projects with IAM, OIDC authentication flows, and distributed systems

<strong>Recent Achievements:</strong>
• WorldQuant IQC Stage 1 – 2nd Prize ($1,000): Ranked 98 globally in quantitative finance competition
• 5,000+ active users on Savely Chrome Extension

<span style="color: #666;">Last updated: November 2025</span>`,
    
    history: () => {
      if (commandHistoryRef.current.length === 0) {
        return 'No commands in history yet.';
      }
      return commandHistoryRef.current.map((cmd, idx) => `${idx + 1}  ${cmd}`).join('\n');
    },
    
    clear: () => {
      if (terminalBodyRef.current) {
        const mobileCommands = terminalBodyRef.current.querySelector('#mobile-commands');
        terminalBodyRef.current.innerHTML = '';
        if (mobileCommands) {
          terminalBodyRef.current.appendChild(mobileCommands);
        }
      }
      return '';
    },
    
    banner: () => `<pre class="ascii-art">${asciiArt}</pre>
Welcome to Divy Singhvi's Terminal. Type <span style="color: var(--accent-color)">help</span> to see available commands.`,
    
    ls: () => `about.txt  projects.md  skills.json  contact.md  resume.pdf  secrets/`,
    pwd: () => `/Users/divysinghvi/personal-site`,
    whoami: () => `divysinghvi`,
    date: () => new Date().toString(),
    echo: (args) => args.join(' '),
    
    sudo: () => '<span class="easter-egg">Nice try! 😄 You\'re already root here. No password needed.</span>',
    hack: () => '<span class="easter-egg">ACCESS GRANTED ✓ Just kidding! 😎 I don\'t condone actual hacking.</span>',
    matrix: () => '<span class="easter-egg" style="color: #00ff00; text-shadow: 0 0 10px #00ff00;">Wake up, Neo... 🕶️ The Matrix has you... Follow the white rabbit. 🐰</span>',
    coffee: () => `<span class="easter-egg" style="color: #d2691e;">
      ) )  (
     ( (   ) )
      ) )  ( (
    __________)_
   |          _  |
   |  ☕     |_| |
   |____________|
   
<span style="color: var(--accent-color);">Coffee ready! ☕</span>
<span style="color: #a0a0a0;">[ Caffeine levels: ████████░░ 80% ]</span>
Stay caffeinated and keep coding! 💻</span>`,
    rocket: () => '<span class="easter-egg">🚀 Launching... To infinity and beyond! 🌌</span>'
  };
  
  const processCommand = (input) => {
    const inputTrimmed = input.trim();
    if (!inputTrimmed) return '';
    
    let newHistory;
    setCommandHistory(prev => {
      const updated = [...prev, inputTrimmed];
      const sliced = updated.slice(-50);
      newHistory = sliced;
      localStorage.setItem('terminalHistory', JSON.stringify(sliced));
      return sliced;
    });
    setHistoryIndex(newHistory ? newHistory.length : commandHistory.length + 1);
    
    const args = inputTrimmed.split(' ');
    let command = args[0].toLowerCase();
    const commandArgs = args.slice(1);
    
    if (command in aliases) {
      command = aliases[command];
    }
    
    if (command in commands) {
      if (typeof commands[command] === 'function') {
        if (commandArgs.length > 0 && command === 'echo') {
          return commands[command](commandArgs);
        } else {
          return commands[command]();
        }
      }
      return commands[command];
    } else {
      let response = `Command not found: ${command}.`;
      response += `\n\nType 'help' for available commands.`;
      return response;
    }
  };
  
  const createNewLine = (withInput = true) => {
    const inputLine = document.createElement('div');
    inputLine.className = 'input-line';
    inputLine.innerHTML = `<span class="prompt">divysinghvi@Divys-MacBook-Air</span><span class="path">personal-site %</span>&nbsp;`;
    
    if (withInput) {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = 'terminal-input';
      input.autocomplete = 'off';
      input.spellcheck = false;
      inputLine.appendChild(input);
      
      terminalBodyRef.current.appendChild(inputLine);
      input.focus();
      
      setupInputListeners(input);
    }
    
    return inputLine;
  };
  
  const addOutput = (content, isCommand = false) => {
    const outputLine = document.createElement('div');
    outputLine.className = 'output-line';
    
    if (isCommand) {
      outputLine.innerHTML = `<span class="prompt">divysinghvi@Divys-MacBook-Air</span><span class="path">personal-site %</span> ${content}`;
    } else {
      outputLine.innerHTML = content;
    }
    
    terminalBodyRef.current.appendChild(outputLine);
    terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
  };
  
  const setupInputListeners = (input) => {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const command = input.value;
        
        const inputLine = input.parentElement;
        const staticLine = document.createElement('div');
        staticLine.className = 'output-line';
        staticLine.innerHTML = `<span class="prompt">divysinghvi@Divys-MacBook-Air</span><span class="path">personal-site %</span> ${command}`;
        
        inputLine.parentElement.replaceChild(staticLine, inputLine);
        
        const output = processCommand(command);
        if (output) {
          addOutput(output);
        }
        
        createNewLine();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndexRef.current > 0) {
          historyIndexRef.current--;
          input.value = commandHistoryRef.current[historyIndexRef.current];
          setHistoryIndex(historyIndexRef.current);
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndexRef.current < commandHistoryRef.current.length - 1) {
          historyIndexRef.current++;
          input.value = commandHistoryRef.current[historyIndexRef.current];
          setHistoryIndex(historyIndexRef.current);
        } else {
          historyIndexRef.current = commandHistoryRef.current.length;
          input.value = '';
          setHistoryIndex(historyIndexRef.current);
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const partial = input.value.toLowerCase();
        if (partial) {
          const allCommands = Object.keys(commands).concat(Object.keys(aliases));
          const matches = allCommands.filter(cmd => cmd.startsWith(partial));
          if (matches.length === 1) {
            input.value = matches[0];
          }
        }
      }
    });
  };
  
  const initializeTerminal = () => {
    addOutput(commands.banner());
    
    if (!localStorage.getItem('visitedBefore')) {
      setTimeout(() => {
        addOutput('<span style="color: var(--path-color);">💡 Tip: Type "help" to see all available commands, or try tab completion!</span>');
        localStorage.setItem('visitedBefore', 'true');
      }, 500);
    }
    
    createNewLine();
  };
  
  const executeQuickCommand = (cmd) => {
    const input = document.getElementById('terminal-input');
    if (input) {
      input.value = cmd;
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      input.dispatchEvent(event);
    }
  };
  
  useEffect(() => {
    commandHistoryRef.current = commandHistory;
  }, [commandHistory]);

  useEffect(() => {
    historyIndexRef.current = historyIndex;
  }, [historyIndex]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('terminalHistory');
    if (savedHistory) {
      const parsed = JSON.parse(savedHistory);
      setCommandHistory(parsed);
      setHistoryIndex(parsed.length);
    }
    
    initializeTerminal();
    
    const handleClick = () => {
      const currentInput = document.getElementById('terminal-input');
      if (currentInput) {
        currentInput.focus();
      }
    };
    
    const terminalBody = terminalBodyRef.current;
    if (terminalBody) {
      terminalBody.addEventListener('click', handleClick);
    }
    
    return () => {
      if (terminalBody) {
        terminalBody.removeEventListener('click', handleClick);
      }
    };
  }, []);
  
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close-button"></div>
          <div className="terminal-button minimize-button"></div>
          <div className="terminal-button maximize-button"></div>
        </div>
        <div className="terminal-title">divysinghvi@Divys-MacBook-Air: personal-site</div>
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        <div className="mobile-commands" id="mobile-commands">
          <button className="command-button" onClick={() => executeQuickCommand('help')}>help</button>
          <button className="command-button" onClick={() => executeQuickCommand('about')}>about</button>
          <button className="command-button" onClick={() => executeQuickCommand('experience')}>experience</button>
          <button className="command-button" onClick={() => executeQuickCommand('projects')}>projects</button>
          <button className="command-button" onClick={() => executeQuickCommand('skills')}>skills</button>
          <button className="command-button" onClick={() => executeQuickCommand('contact')}>contact</button>
          <button className="command-button" onClick={() => executeQuickCommand('social')}>social</button>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
