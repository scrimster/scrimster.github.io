// Retro 90s AI Assistant (Clippy-like)
class RetroAssistant {
  constructor() {
    this.isVisible = false;
    this.messages = [
      "Hi! I'm your retro assistant! 📎",
      "Need help navigating this nostalgic playground?",
      "I see you're working on something interesting!",
      "Would you like me to help you format your document?",
      "This reminds me of the good old days of computing!",
      "Click anywhere on the document to start typing!",
      "Pro tip: Try the different toolbar buttons!",
      "I'm here whenever you need assistance! 🤖"
    ];
    this.currentMessageIndex = 0;
    this.init();
  }

  init() {
    this.createClippyElement();
    this.bindEvents();
    this.startRandomAppearances();
    this.addSoundEffects();
  }

  createClippyElement() {
    const clippyHTML = `
      <div class="clippy-container">
        <div class="clippy" id="clippy">
          <div class="clippy-character"></div>
          <div class="clippy-text" id="clippy-text">
            ${this.messages[0]}
          </div>
          <div class="clippy-buttons">
            <button class="clippy-btn" onclick="assistant.nextTip()">Next</button>
            <button class="clippy-btn" onclick="assistant.hide()">Close</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', clippyHTML);
  }

  show(message = null) {
    const clippy = document.getElementById('clippy');
    const textEl = document.getElementById('clippy-text');
    
    if (message) {
      textEl.textContent = message;
    } else {
      textEl.textContent = this.messages[this.currentMessageIndex];
    }
    
    clippy.classList.add('show');
    this.isVisible = true;
    this.playSound('appear');
  }

  hide() {
    const clippy = document.getElementById('clippy');
    clippy.classList.remove('show');
    this.isVisible = false;
    this.playSound('disappear');
  }

  nextTip() {
    this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
    const textEl = document.getElementById('clippy-text');
    textEl.textContent = this.messages[this.currentMessageIndex];
    this.playSound('click');
  }

  startRandomAppearances() {
    // Show Clippy initially after 3 seconds
    setTimeout(() => {
      this.show();
    }, 3000);

    // Random appearances every 30-60 seconds
    setInterval(() => {
      if (!this.isVisible && Math.random() > 0.7) {
        this.show();
        setTimeout(() => this.hide(), 8000); // Auto-hide after 8 seconds
      }
    }, 30000);
  }

  bindEvents() {
    // Show Clippy when user seems inactive
    let inactivityTimer;
    
    document.addEventListener('mousemove', () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (!this.isVisible) {
          this.show("Haven't seen you in a while! Need any help?");
        }
      }, 60000); // 1 minute of inactivity
    });

    // Respond to user actions
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('tool-btn')) {
        this.respondToToolClick(e.target);
      }
    });

    // Paper click events
    const paper = document.querySelector('.paper');
    if (paper) {
      paper.addEventListener('click', () => {
        if (Math.random() > 0.8) {
          this.show("Great choice! This document is looking fantastic!");
        }
      });
    }
  }

  respondToToolClick(button) {
    const responses = [
      "Nice choice! That tool will help your document look professional!",
      "I see you're getting creative with the formatting!",
      "That's a handy tool! Just like the old days!",
      "Excellent selection! Your document is coming together nicely!"
    ];
    
    if (Math.random() > 0.6) {
      setTimeout(() => {
        this.show(responses[Math.floor(Math.random() * responses.length)]);
      }, 1000);
    }
  }

  addSoundEffects() {
    // Create audio context for retro sound effects
    this.audioContext = null;
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.log('Audio context not available');
    }
  }

  playSound(type) {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.3);
    
    switch(type) {
      case 'appear':
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.1);
        break;
      case 'disappear':
        oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, this.audioContext.currentTime + 0.2);
        break;
      case 'click':
        oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime);
        break;
    }
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }
}

// Retro Window Functions
class RetroWindow {
  constructor() {
    this.init();
  }

  init() {
    this.addWindowControls();
    this.addMenuFunctionality();
    this.addToolbarFunctionality();
    this.addTypingEffects();
  }

  addWindowControls() {
    // Minimize button
    const minimizeBtn = document.querySelector('.minimize');
    if (minimizeBtn) {
      minimizeBtn.addEventListener('click', () => {
        assistant.show("Can't actually minimize in a browser, but nice try! 😄");
      });
    }

    // Maximize button
    const maximizeBtn = document.querySelector('.maximize');
    if (maximizeBtn) {
      maximizeBtn.addEventListener('click', () => {
        const window = document.querySelector('.window');
        window.style.top = '0px';
        window.style.left = '0px';
        window.style.right = '0px';
        window.style.bottom = '0px';
        assistant.show("Maximized! Just like Windows 95! 🪟");
      });
    }

    // Close button
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        assistant.show("Can't close this window, but I appreciate the nostalgia! 😉");
      });
    }
  }

  addMenuFunctionality() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const menuText = item.textContent;
        assistant.show(`You clicked "${menuText}"! Just like the good old days! 📝`);
      });
    });
  }

  addToolbarFunctionality() {
    const toolBtns = document.querySelectorAll('.tool-btn');
    toolBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Add visual feedback
        btn.style.borderStyle = 'inset';
        setTimeout(() => {
          btn.style.borderStyle = 'outset';
        }, 100);
      });
    });
  }

  addTypingEffects() {
    const paper = document.querySelector('.paper');
    if (paper) {
      // Add blinking cursor effect
      let cursorVisible = true;
      setInterval(() => {
        if (document.activeElement === paper) {
          cursorVisible = !cursorVisible;
          paper.style.borderRight = cursorVisible ? '2px solid black' : '2px solid transparent';
        }
      }, 500);

      // Focus on paper when clicked
      paper.addEventListener('click', () => {
        paper.focus();
      });

      // Make paper editable
      paper.contentEditable = true;
      paper.addEventListener('input', () => {
        if (Math.random() > 0.9) {
          assistant.show("Looking good! Keep typing away! ⌨️");
        }
      });
    }
  }
}

// Easter Eggs
class EasterEggs {
  constructor() {
    this.konamiCode = [];
    this.konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];
    this.init();
  }

  init() {
    this.addKonamiCode();
    this.addRandomGlitches();
    this.add90sReferences();
  }

  addKonamiCode() {
    document.addEventListener('keydown', (e) => {
      this.konamiCode.push(e.code);
      
      if (this.konamiCode.length > this.konamiSequence.length) {
        this.konamiCode.shift();
      }
      
      if (this.konamiCode.join(',') === this.konamiSequence.join(',')) {
        this.activateSecretMode();
        this.konamiCode = [];
      }
    });
  }

  activateSecretMode() {
    assistant.show("🎉 KONAMI CODE ACTIVATED! Welcome to SUPER RETRO MODE! 🎉");
    document.body.style.filter = 'hue-rotate(180deg) saturate(1.5)';
    
    // Add rainbow background
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      body {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab) !important;
        background-size: 400% 400% !important;
        animation: rainbow 3s ease infinite !important;
      }
    `;
    document.head.appendChild(style);
  }

  addRandomGlitches() {
    setInterval(() => {
      if (Math.random() > 0.98) {
        this.glitchEffect();
      }
    }, 1000);
  }

  glitchEffect() {
    const paper = document.querySelector('.paper');
    if (paper) {
      paper.style.transform = 'skew(1deg, 0deg)';
      setTimeout(() => {
        paper.style.transform = 'none';
      }, 100);
    }
  }

  add90sReferences() {
    const paper = document.querySelector('.paper');
    if (paper && paper.textContent.trim() === '') {
      paper.innerHTML = `
        <h1>Welcome to the Information Superhighway! 🌐</h1>
        <p>Greetings, fellow cyber-surfer! You've entered a radical zone where pixels are chunky, 
        sounds are bleepy, and everything is totally tubular! 🏄‍♂️</p>
        
        <p>This nostalgic playground captures the essence of computing in the 1990s, when:</p>
        <ul>
          <li>📼 We saved files on floppy disks</li>
          <li>🔊 Dial-up modems sang their digital songs</li>
          <li>📎 Office assistants helped us write letters</li>
          <li>🖥️ CRT monitors ruled supreme</li>
          <li>💿 CD-ROMs were cutting-edge technology</li>
        </ul>
        
        <p><em>Click anywhere to start your retro computing experience!</em></p>
        
        <p><strong>Pro tip:</strong> Try typing something, clicking the toolbar buttons, 
        or just wait for your helpful assistant to appear! 🤖</p>
      `;
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add click sound to document
  document.addEventListener('click', () => {
    if (assistant && assistant.audioContext) {
      assistant.playSound('click');
    }
  });
  
  // Initialize all systems
  window.assistant = new RetroAssistant();
  window.retroWindow = new RetroWindow();
  window.easterEggs = new EasterEggs();
  
  console.log('🎉 Retro system initialized! Welcome to the 90s! 🎉');
});
