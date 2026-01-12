<script>
  import { onMount } from 'svelte';
  
  let terminalBody;
  let commandHistory = [];
  let historyIndex = 0;
  
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
      if (commandHistory.length === 0) {
        return 'No commands in history yet.';
      }
      return commandHistory.map((cmd, idx) => `${idx + 1}  ${cmd}`).join('\n');
    },
    
    clear: () => {
      if (terminalBody) {
        const mobileCommands = terminalBody.querySelector('#mobile-commands');
        terminalBody.innerHTML = '';
        if (mobileCommands) {
          terminalBody.appendChild(mobileCommands);
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
  
  function processCommand(input) {
    const inputTrimmed = input.trim();
    if (!inputTrimmed) return '';
    
    commandHistory.push(inputTrimmed);
    historyIndex = commandHistory.length;
    localStorage.setItem('terminalHistory', JSON.stringify(commandHistory.slice(-50)));
    
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
  }
  
  function createNewLine(withInput = true) {
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
      
      terminalBody.appendChild(inputLine);
      input.focus();
      
      setupInputListeners(input);
    }
    
    return inputLine;
  }
  
  function addOutput(content, isCommand = false) {
    const outputLine = document.createElement('div');
    outputLine.className = 'output-line';
    
    if (isCommand) {
      outputLine.innerHTML = `<span class="prompt">divysinghvi@Divys-MacBook-Air</span><span class="path">personal-site %</span> ${content}`;
    } else {
      outputLine.innerHTML = content;
    }
    
    terminalBody.appendChild(outputLine);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
  
  function setupInputListeners(input) {
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
        if (historyIndex > 0) {
          historyIndex--;
          input.value = commandHistory[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          input.value = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          input.value = '';
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
  }
  
  function initializeTerminal() {
    addOutput(commands.banner());
    
    if (!localStorage.getItem('visitedBefore')) {
      setTimeout(() => {
        addOutput('<span style="color: var(--path-color);">💡 Tip: Type "help" to see all available commands, or try tab completion!</span>');
        localStorage.setItem('visitedBefore', 'true');
      }, 500);
    }
    
    createNewLine();
  }
  
  function executeQuickCommand(cmd) {
    const input = document.getElementById('terminal-input');
    if (input) {
      input.value = cmd;
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      input.dispatchEvent(event);
    }
  }
  
  onMount(() => {
    const savedHistory = localStorage.getItem('terminalHistory');
    if (savedHistory) {
      commandHistory = JSON.parse(savedHistory);
      historyIndex = commandHistory.length;
    }
    
    initializeTerminal();
    
    terminalBody.addEventListener('click', function() {
      const currentInput = document.getElementById('terminal-input');
      if (currentInput) {
        currentInput.focus();
      }
    });
  });
</script>

<div class="terminal">
  <div class="terminal-header">
    <div class="terminal-buttons">
      <div class="terminal-button close-button"></div>
      <div class="terminal-button minimize-button"></div>
      <div class="terminal-button maximize-button"></div>
    </div>
    <div class="terminal-title">divysinghvi@Divys-MacBook-Air: personal-site</div>
  </div>
  <div class="terminal-body" bind:this={terminalBody}>
    <div class="mobile-commands" id="mobile-commands">
      <button class="command-button" on:click={() => executeQuickCommand('help')}>help</button>
      <button class="command-button" on:click={() => executeQuickCommand('about')}>about</button>
      <button class="command-button" on:click={() => executeQuickCommand('experience')}>experience</button>
      <button class="command-button" on:click={() => executeQuickCommand('projects')}>projects</button>
      <button class="command-button" on:click={() => executeQuickCommand('skills')}>skills</button>
      <button class="command-button" on:click={() => executeQuickCommand('contact')}>contact</button>
      <button class="command-button" on:click={() => executeQuickCommand('social')}>social</button>
    </div>
  </div>
</div>

<style>
  :global(:root) {
    --background: #1e1e1e;
    --terminal-bg: #2d2d2d;
    --text-color: #f8f8f8;
    --prompt-color: #57c754;
    --accent-color: #57c754;
    --path-color: #57c7c4;
    --link-color: #57c754;
    --link-hover: #7de87a;
  }
  
  .terminal {
    background-color: var(--terminal-bg);
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .terminal-header {
    background: linear-gradient(to bottom, #e4e4e4, #c8c8c8);
    height: 28px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: relative;
  }
  
  .terminal-buttons {
    display: flex;
    gap: 6px;
  }
  
  .terminal-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  
  .close-button {
    background-color: #ff5f56;
    border: 1px solid #e0443e;
  }
  
  .minimize-button {
    background-color: #ffbd2e;
    border: 1px solid #dea123;
  }
  
  .maximize-button {
    background-color: #27c93f;
    border: 1px solid #1aab29;
  }
  
  .terminal-title {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 13px;
    color: #4d4d4d;
    pointer-events: none;
  }
  
  .terminal-body {
    padding: 15px;
    font-size: 14px;
    height: 70vh;
    max-height: 600px;
    overflow-y: auto;
    white-space: pre-wrap;
    scroll-behavior: smooth;
  }
  
  :global(.prompt) {
    color: var(--prompt-color);
    margin-right: 5px;
    white-space: nowrap;
  }
  
  :global(.path) {
    color: var(--path-color);
    margin-right: 5px;
    white-space: nowrap;
  }
  
  :global(.output-line) {
    margin-bottom: 10px;
    line-height: 1.5;
    word-wrap: break-word;
  }
  
  :global(.link) {
    color: var(--link-color);
    text-decoration: none;
    border-bottom: 1px dotted var(--link-color);
    transition: color 0.3s ease;
  }
  
  :global(.link:hover) {
    color: var(--link-hover);
  }
  
  :global(#terminal-input) {
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-color);
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    flex: 1;
    caret-color: var(--text-color);
    width: 100%;
  }
  
  :global(.input-line) {
    display: flex;
    margin-bottom: 10px;
  }
  
  :global(.ascii-art) {
    color: var(--prompt-color);
    line-height: 1.2;
    margin-bottom: 15px;
  }
  
  :global(.tags) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 5px;
  }
  
  :global(.tag) {
    background-color: rgba(87, 199, 84, 0.2);
    color: var(--accent-color);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
  }
  
  :global(.project) {
    margin-bottom: 15px;
    border-left: 2px solid var(--accent-color);
    padding-left: 10px;
  }
  
  :global(.help-command) {
    color: var(--accent-color);
    font-weight: bold;
  }
  
  :global(.command-description) {
    color: #a0a0a0;
    padding-left: 20px;
    margin-bottom: 8px;
  }
  
  .command-button {
    display: inline-block;
    background-color: rgba(87, 199, 84, 0.15);
    color: var(--accent-color);
    padding: 6px 12px;
    margin: 4px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid rgba(87, 199, 84, 0.3);
    font-size: 12px;
    transition: all 0.2s ease;
  }
  
  .command-button:hover {
    background-color: rgba(87, 199, 84, 0.3);
    border-color: var(--accent-color);
  }
  
  .mobile-commands {
    display: none;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
  
  :global(.easter-egg) {
    color: #ff69b4;
  }
  
  :global(.success) {
    color: var(--accent-color);
  }
  
  @media (max-width: 600px) {
    .terminal-body {
      padding: 12px;
      font-size: 12px;
      height: calc(100vh - 200px);
      max-height: none;
    }
    
    .mobile-commands {
      display: flex;
    }
    
    :global(.ascii-art) {
      font-size: 8px;
    }
    
    :global(#terminal-input) {
      font-size: 12px;
    }
    
    .terminal-title {
      font-size: 11px;
    }
  }
</style>
