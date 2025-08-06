# Med.Ai - Medtools Creative Team AI Assistant

A beautiful, modern AI chatbot website designed specifically for the Medtools Creative Team and Influencers. Built with vanilla HTML, CSS, and JavaScript featuring a stunning gradient blue design theme.

## 🌟 Features

- **Modern Design**: Clean, minimalist interface with gradient blue theme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time AI Chat**: Powered by OpenRouter API with Claude Sonnet
- **Smart Navigation**: History API routing with browser back/forward support
- **Deep Linking**: Direct navigation to specific pages (e.g., `/chat`, `/about`)
- **Medtools-Focused**: Specialized for SOPs, guidelines, and team procedures
- **Mock Responses**: Works even without API key for testing

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. **Start chatting** - the website works immediately with mock responses!

## 🔧 API Setup (Optional)

For real AI responses, configure the OpenRouter API:

### Step 1: Get Your API Key
1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Sign up for a free account
3. Navigate to the "Keys" section
4. Create a new API key

### Step 2: Configure the API Key
1. Open `script.js`
2. Find the `API_CONFIG` section (around line 8)
3. Replace the empty `apiKey: ''` with your key:
   ```javascript
   apiKey: 'sk-or-v1-your-actual-api-key-here'
   ```

### Step 3: Test the Integration
1. Refresh the website
2. Go to the Chat page
3. Ask a question about SOPs or guidelines
4. Enjoy real AI responses!

## 📱 Pages Overview

### 🏠 Home Page
- Hero section with gradient background
- Feature cards highlighting key capabilities
- Call-to-action buttons

### 💬 Chat Page
- Interactive AI chatbot interface
- Real-time responses about Medtools procedures
- Smooth animations and loading states

### ℹ️ About Page
- Medical disclaimer
- How Med.Ai works
- Key features overview
- Mission statement

## 🎨 Design Features

- **Color Scheme**: Professional blue gradient (#2B4C8C to #4A90E2)
- **Typography**: Inter font family for modern readability
- **Animations**: Smooth fade-ins, hover effects, and transitions
- **Responsive**: Mobile-first design approach
- **Accessibility**: Proper contrast ratios and keyboard navigation

## 🔗 Navigation & Routing

### History API Integration
The Med.Ai website now uses the HTML5 History API for seamless navigation:

- **URL Updates**: When you click "Chat" or "Start Chat", the URL changes to `/chat`
- **Browser Navigation**: Back and forward buttons work naturally
- **Deep Linking**: Direct navigation to `/chat` or `/about` displays the correct page
- **Shareable URLs**: Each page has its own URL for easy sharing and bookmarking

### Navigation Features
- **Keyboard Shortcuts**: Alt+1 (Home), Alt+2 (Chat), Alt+3 (About)
- **Smooth Transitions**: Page changes include fade animations
- **Error Handling**: Invalid URLs automatically redirect to the home page
- **State Management**: Browser history is properly maintained

**Note**: For optimal routing functionality, serve the application from a web server with fallback routing configured to redirect unknown paths to `index.html`.

## 🛠️ Technical Details

### Built With
- **HTML5**: Semantic markup and modern structure
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **OpenRouter API**: Claude Sonnet for AI responses

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

### File Structure
```
med-ai/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── .env.example        # API key configuration template
└── README.md           # This file
```

## 🤖 AI Capabilities

Med.Ai is specifically trained to help with:

- **SOPs (Standard Operating Procedures)**
- **Creator Team Guidelines**
- **Growth Analysis Strategies**
- **Digitalization Workflows**
- **Team Collaboration Best Practices**

## 🔒 Privacy & Security

- No data is stored locally
- API calls are made directly to OpenRouter
- No personal information is collected
- Chat history is session-based only

## 📞 Support Topics

The AI assistant can help with:

### 📋 SOPs & Procedures
- Content creation workflows
- Quality assurance processes
- Publishing protocols
- Review procedures

### 📈 Growth Analysis
- Engagement metrics
- Audience insights
- Performance tracking
- Trend identification

### 👥 Team Guidelines
- Communication standards
- Collaboration tools
- Workflow management
- Best practices

### 🔄 Digitalization
- Process optimization
- Tool recommendations
- Automation strategies
- Digital workflows

## 🎯 Usage Tips

1. **Be Specific**: Ask detailed questions about procedures
2. **Use Keywords**: Mention "SOP", "guidelines", "growth", etc.
3. **Context Matters**: Provide background for better responses
4. **Follow Up**: Ask clarifying questions for deeper insights

## 🚀 Deployment

### Local Development
Simply open `index.html` in any modern web browser.

### Web Hosting
Upload all files to any web hosting service:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

### CDN Integration
All external resources (fonts) are loaded via CDN for optimal performance.

## 🔄 Updates & Maintenance

### Adding New Content
- Update the system prompt in `script.js` for new guidelines
- Modify mock responses for testing scenarios
- Add new feature cards in the HTML

### Styling Changes
- All styles are in `styles.css`
- CSS variables for easy theme customization
- Responsive breakpoints clearly defined

## 📊 Performance

- **Lightweight**: ~50KB total size
- **Fast Loading**: Optimized CSS and JavaScript
- **Smooth Animations**: 60fps transitions
- **Mobile Optimized**: Touch-friendly interface

## 🤝 Contributing

This is a specialized tool for the Medtools Creative Team. For updates or modifications, please:

1. Test thoroughly on multiple devices
2. Maintain the existing design language
3. Ensure accessibility standards
4. Update documentation as needed

## 📄 License

Built specifically for Medtools Creative Team internal use.

## 🆘 Troubleshooting

### Chat Not Working?
1. Check if API key is configured correctly
2. Verify internet connection
3. Check browser console for errors
4. Try refreshing the page

### Styling Issues?
1. Clear browser cache
2. Check if all CSS files are loading
3. Verify responsive design on different screen sizes

### API Errors?
1. Verify API key is valid
2. Check OpenRouter account status
3. Monitor API usage limits
4. Review error messages in console

---

**Med.Ai** - Empowering the Medtools Creative Team with AI-driven guidance and support.

*For technical support or questions, please contact the development team.*
