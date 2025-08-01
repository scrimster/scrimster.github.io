// Retro 90s AI Assistant (Clippy-like)
class RetroAssistant {
  constructor() {
    this.isVisible = false;
    this.messages = [
      "✨ Welcome to the Vista Aero x 90s web fusion! 🌈",
      "Loving those warm orange-tan vibes! 🧡",
      "The dithered textures are absolutely *chef's kiss* 👌",
      "This frosted glass meets crunchy pixels aesthetic is fire! 🔥",
      "Ready to surf the information superhighway in style? 🏄‍♀️",
      "That neon pop against the warm tans... *perfectection* ✨",
      "Click those glassy buttons for maximum satisfaction! 💫",
      "I'm getting major Geocities energy and I'm here for it! 🌟"
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
      "✨ That glass morph effect though! *chef's kiss* 👌",
      "Loving how that button just *melted* under your cursor! 🫠",
      "The way these neon accents pop against the tan... perfection! 💫",
      "Vista vibes with 90s attitude - you've got taste! 🎨",
      "That satisfying click with the dithered edge effect! 🔥"
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
        <h1 class="neon-text">Welcome to the Cyber-Aesthetic Zone! �✨</h1>
        
        <p>Greetings, digital wanderer! You've entered a <strong>radical fusion zone</strong> where 
        <span style="color: var(--electric-aqua); font-weight: bold;">Vista's frosted glass elegance</span> 
        meets <span style="color: var(--neon-pink); font-weight: bold;">90s web rebellion</span> 
        in perfect harmony! �</p>
        
        <h2>🎯 Aesthetic Elements</h2>
        <p>This nostalgic playground blends the best of both worlds:</p>
        <ul>
          <li>🪟 <strong>Aero Glass Windows</strong> with that signature blur and transparency</li>
          <li>🧡 <strong>Warm Paper Tones</strong> - goodbye harsh white, hello cozy orange-tan!</li>
          <li>⚡ <strong>Neon Pop Accents</strong> in electric aqua, hot pink, and acid green</li>
          <li>� <strong>Crunchy Dithered Textures</strong> for that authentic low-res web feel</li>
          <li>✨ <strong>Smooth Gradients</strong> with pixelated edge effects</li>
          <li>🎵 <strong>Retro Sound Effects</strong> that'll make your ears nostalgic</li>
        </ul>
        
        <h3>🎮 Interactive Magic</h3>
        <p>Every click, hover, and interaction has been crafted with love:</p>
        <ul>
          <li>🖱️ Buttons that <em>satisfyingly</em> respond with glass morphing</li>
          <li>🌊 Smooth animations with that signature ease-in-out flow</li>
          <li>💫 Neon glows that pulse and breathe with life</li>
          <li>🎨 Context-aware color shifts and micro-interactions</li>
        </ul>
        
        <p><strong>Pro Tips:</strong></p>
        <p>🔥 Try hovering over the toolbar buttons for that <em>premium glass morph</em><br>
        🌈 Click around and watch the neon accents dance<br>
        ⌨️ Type anywhere on this warm-toned paper for instant satisfaction<br>
        🎵 Listen for those crispy retro sound effects</p>
        
        <div style="margin: 24px 0; padding: 16px; background: rgba(255,60,172,0.1); border-radius: 8px; border-left: 4px solid var(--neon-pink);">
          <p style="margin: 0;"><strong>✨ Easter Egg Alert:</strong> Try the classic 
          <span class="glitch" data-text="↑↑↓↓←→←→BA">Konami Code</span> for a 
          <span style="color: var(--electric-aqua);">rainbow surprise</span>! 🌈</p>
        </div>
        
        <p style="text-align: center; margin-top: 32px; font-style: italic; color: var(--vista-blue);">
          <em>"Where Windows Vista meets Geocities vibes – it's giving main character energy!" ✨💅</em>
        </p>
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
