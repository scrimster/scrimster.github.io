# 📎 Retro 90s Word Document Playground

A nostalgic throwback to the golden age of computing! This site recreates the classic Windows 95/98 Word document experience with a modern twist, featuring a loveable Clippy-like AI assistant.

## 🎨 Features

### Visual Design
- **Authentic 90s UI**: Complete Windows 95-style window frame with title bar, menu bar, and toolbar
- **High Contrast Theme**: Classic gray color scheme with proper button borders and shadows
- **Paper Document View**: White "paper" background with proper margins and typography
- **Retro Typography**: Mix of MS Sans Serif (UI) and Times New Roman (document content)
- **Pixel-Perfect Details**: Inset/outset borders, proper button states, and classic scrollbars

### Interactive Elements
- **Clippy-like Assistant**: AI-powered helper that appears randomly with tips and encouragement
- **Functional Toolbar**: Buttons provide visual feedback and trigger assistant responses
- **Editable Document**: Click anywhere on the paper to start typing
- **Menu System**: Hover effects and click responses on all menu items
- **Window Controls**: Minimize, maximize, and close buttons with appropriate feedback

### Special Features
- **Sound Effects**: Retro bleeps and bloops for various interactions
- **Easter Eggs**: Hidden Konami code activation and random glitch effects
- **Smart Assistant**: Context-aware responses based on user actions
- **Auto-hide/Show**: Assistant appears during inactivity and responds to user behavior
- **Responsive Nostalgia**: Adapts to different screen sizes while maintaining retro feel

## 📁 Project Structure

```
scrimster.github.io/
├── index.html              # Main HTML file with Windows 95 UI structure
├── css/
│   └── retro-style.css     # Complete 90s styling with animations
├── js/
│   └── retro-assistant.js  # AI assistant and interactive features
├── assets/
│   ├── images/             # Icons, cursors, and graphics
│   ├── fonts/              # Retro web fonts
│   └── sounds/             # Sound effects (future enhancement)
├── CNAME                   # GitHub Pages domain configuration
└── README.md              # This file
```

## 🚀 Getting Started

1. **Local Development**: Simply open `index.html` in a modern web browser
2. **GitHub Pages**: Push to GitHub and enable Pages for automatic deployment
3. **Customization**: Edit the CSS variables in `:root` to change the color scheme

## 🎮 Interactive Features

### Clippy Assistant
- Appears automatically after 3 seconds
- Random appearances every 30-60 seconds
- Responds to user inactivity
- Contextual tips based on user actions
- Sound effects for appear/disappear/click

### User Interactions
- **Document Editing**: Click the paper and start typing
- **Toolbar Buttons**: Click any button for visual feedback and assistant responses
- **Menu Items**: Hover and click for nostalgic interactions
- **Window Controls**: Classic Windows behavior simulation

### Easter Eggs
- **Konami Code**: ↑↑↓↓←→←→BA for secret rainbow mode
- **Random Glitches**: Occasional visual distortions for authenticity
- **90s References**: Built-in content about 90s computing culture

## 🎯 Customization Options

### Color Scheme
Edit the CSS variables in `retro-style.css`:
```css
:root {
  --bg-color: #c0c0c0;        /* Desktop background */
  --window-bg: #ffffff;       /* Window background */
  --title-bar: #000080;       /* Title bar color */
  --clippy-yellow: #ffff00;   /* Assistant character color */
}
```

### Assistant Messages
Modify the messages array in `retro-assistant.js`:
```javascript
this.messages = [
  "Your custom message here!",
  "Add more helpful tips!",
  // ... more messages
];
```

### Content
Update the document content in the `EasterEggs.add90sReferences()` method or directly edit the paper element.

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks or dependencies
- **Mobile Responsive**: Adapts to different screen sizes
- **Web Audio API**: For retro sound effects
- **CSS Animations**: Smooth transitions and hover effects
- **Local Storage**: Could be added for saving user preferences

## 🎨 Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Grid/Flexbox**: For layout management
- **Web Audio API**: For sound effects (gracefully degrades if unavailable)
- **ES6+ JavaScript**: Modern syntax with fallbacks

## 🔮 Future Enhancements

- [ ] Save/Load document functionality
- [ ] More sophisticated AI responses
- [ ] Additional retro sound effects
- [ ] Multiple document templates
- [ ] Dark mode (Windows 98 style)
- [ ] More easter eggs and animations
- [ ] Virtual keyboard sounds
- [ ] Dial-up modem connection simulation

## 📝 License

This project is open source and available under the MIT License.

---

*"It looks like you're building a website. Would you like help with that?"* 📎

Welcome to the nostalgic world of 90s computing! Enjoy your journey back to the era of floppy disks, dial-up internet, and helpful office assistants!