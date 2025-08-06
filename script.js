// Global variables
let currentPage = 'home';
let chatMessages = [];
let isLoading = false;

// Chatbase AI Configuration
const CHATBASE_CONFIG = {
    agentId: 'y7jTzyHhLeJFzUvlpBqqP',
    secretKey: '4ub42ku4e9ffy5qmhvdh4zkjj2gbdx14',
    apiEndpoint: 'https://www.chatbase.co/api/v1/chat'
};

function getMockResponse(message) {
    // Enhanced mock responses with bilingual support and document-based information
    const lowerMessage = message.toLowerCase();
    
    // Detect language
    const isIndonesian = /\b(apa|siapa|bagaimana|dimana|kapan|mengapa|yang|dan|atau|dengan|untuk|dari|ke|di|pada|dalam|adalah|akan|sudah|belum|tidak|bisa|dapat|harus|perlu|ingin|mau|saya|kamu|dia|kita|mereka|gilang|febri|medtools)\b/.test(lowerMessage);
    
    // Team member questions
    if (lowerMessage.includes('gilang')) {
        return isIndonesian ? 
            `Gilang adalah **Head Creator Team** di Medtools. Dia memimpin seluruh tim kreator dan bertanggung jawab dalam mengembangkan strategi konten serta kolaborasi tim untuk mendukung pertumbuhan departemen.

**Tanggung Jawab Gilang:**
- Memimpin tim creator dalam perencanaan konten
- Mengembangkan strategi konten kreatif
- Koordinasi dengan divisi lain untuk kolaborasi
- Membuat reels produk untuk Instagram Store
- Supervisi pembuatan konten di berbagai platform

Apakah ada hal spesifik tentang Gilang atau tim creator yang ingin kamu ketahui?` :
            `Gilang is the **Head of Creator Team** at Medtools. He leads the entire creator team and is responsible for developing content strategies and team collaboration to support departmental growth.

**Gilang's Responsibilities:**
- Leading the creator team in content planning
- Developing creative content strategies  
- Coordinating with other divisions for collaboration
- Creating product reels for Instagram Store
- Supervising content creation across platforms

Is there anything specific about Gilang or the creator team you'd like to know?`;
    }
    
    if (lowerMessage.includes('febri')) {
        return isIndonesian ?
            `Febri adalah **Content Creator** di tim Medtools dengan spesialisasi khusus:

**Keahlian Febri:**
- Terbaik dalam pembuatan FEED Instagram
- Spesialis analisis jadwal konten dan perbandingan antar universitas
- Berperan sebagai moderator dalam tim
- Penguatan timeline konten
- Integrasi konten story Instagram

**Tantangan yang dihadapi Febri:**
- Kesulitan dalam pembuatan story harian
- Sedang mengembangkan konsep integrasi konten story
- Uji coba kunjungan ke FK bersama External Affairs

Febri sangat berkontribusi dalam menjaga konsistensi dan kualitas konten visual Medtools!` :
            `Febri is a **Content Creator** on the Medtools team with special expertise:

**Febri's Expertise:**
- Best at creating Instagram FEED content
- Specialist in content schedule analysis and university comparisons
- Serves as team moderator
- Timeline strengthening
- Instagram story content integration

**Challenges Febri faces:**
- Difficulty with daily story creation
- Developing story content integration concepts
- Testing visits to medical schools with External Affairs

Febri contributes significantly to maintaining Medtools' visual content consistency and quality!`;
    }
    
    // SOP questions
    if (lowerMessage.includes('sop') || lowerMessage.includes('procedure') || lowerMessage.includes('prosedur')) {
        return isIndonesian ?
            `Berikut adalah **SOP utama** untuk Medtools Creative Team:

**SOP Pembuatan Konten Feed:**
- Font: MONTSERRAT (basic text), MONTSERRAT CLASSIC (highlight), MONTSERRAT EXTRA BOLD (judul)
- Warna: Biru (#193c76), Kuning (#edd25f), Putih (#ffffff)
- Riset: Instagram search → analisis hashtag → analisis kompetitor → pembuatan konten
- Template: Gunakan template Medtools yang sudah tersedia

**SOP Konten Short/Reels:**
- Font: BAKSO SAPI untuk video
- Resolusi minimal: 576px
- Durasi: 10-60 detik
- Sound: "Ting" untuk highlight, "Pop" untuk sub-headline

**SOP Guest Star Complementary:**
- Kriteria: Kompeten di bidang, pandai berbicara, percaya diri di kamera
- Background: Kedokteran atau tokoh penting
- Prioritas: Daerah Jabodetabek
- Proses: External Affairs → pendekatan → MoU → production house

Mau tahu SOP spesifik yang mana?` :
            `Here are the **main SOPs** for Medtools Creative Team:

**Feed Content Creation SOP:**
- Fonts: MONTSERRAT (basic text), MONTSERRAT CLASSIC (highlight), MONTSERRAT EXTRA BOLD (title)
- Colors: Blue (#193c76), Yellow (#edd25f), White (#ffffff)
- Research: Instagram search → hashtag analysis → competitor analysis → content creation
- Templates: Use available Medtools templates

**Short/Reels Content SOP:**
- Font: BAKSO SAPI for videos
- Minimum resolution: 576px
- Duration: 10-60 seconds
- Sound: "Ting" for highlights, "Pop" for sub-headlines

**Guest Star Complementary SOP:**
- Criteria: Competent in field, good speaker, confident on camera
- Background: Medical or important figures
- Priority: Jabodetabek area
- Process: External Affairs → approach → MoU → production house

Which specific SOP would you like to know about?`;
    }
    
    // Growth/KPI questions
    if (lowerMessage.includes('growth') || lowerMessage.includes('kpi') || lowerMessage.includes('target') || lowerMessage.includes('pertumbuhan') || lowerMessage.includes('analisis')) {
        return isIndonesian ?
            `**Target KPI Medtools Creative Team 2024:**

**YouTube Medtools.id:**
- Video: 8x/bulan
- Short: 20x/bulan  
- Target: 10K Subscribers ✅

**TikTok:**
- Video: 26x/bulan
- Produk: 12x/bulan
- Live: 4x/bulan
- Target: 110K Followers

**Instagram ID:**
- Microblog: 8x/bulan
- Story: 20x/bulan
- Target: 45K Followers ✅

**Instagram Store:**
- Feed: 4x/bulan
- Microblog: 8-10x/bulan
- Target: 10K Followers ✅

**Instagram Daily:**
- Story: 26x/bulan
- Target: 2K Followers ✅

**Sistem Evaluasi:**
🔴 Merah: Di bawah target
🟡 Kuning: Mendekati target  
🟢 Hijau: Mencapai/melebihi target

Mau analisis platform yang mana secara detail?` :
            `**Medtools Creative Team 2024 KPI Targets:**

**YouTube Medtools.id:**
- Videos: 8x/month
- Shorts: 20x/month
- Target: 10K Subscribers ✅

**TikTok:**
- Videos: 26x/month
- Products: 12x/month
- Live: 4x/month
- Target: 110K Followers

**Instagram ID:**
- Microblog: 8x/month
- Story: 20x/month
- Target: 45K Followers ✅

**Instagram Store:**
- Feed: 4x/month
- Microblog: 8-10x/month
- Target: 10K Followers ✅

**Instagram Daily:**
- Story: 26x/month
- Target: 2K Followers ✅

**Evaluation System:**
🔴 Red: Below target
🟡 Yellow: Approaching target
🟢 Green: Meeting/exceeding target

Which platform would you like detailed analysis for?`;
    }
    
    // Team/collaboration questions
    if (lowerMessage.includes('team') || lowerMessage.includes('tim') || lowerMessage.includes('collaboration') || lowerMessage.includes('kolaborasi')) {
        return isIndonesian ?
            `**Struktur Tim Medtools Creative Team:**

**Peran Strategis Tim:**
- Meningkatkan Brand Awareness dengan konten konsisten
- Mendorong Engagement dan Konversi menggunakan funneling
- Membangun Komunitas Digital dengan konten relevan
- Mengoptimalkan Multi-Platform Presence

**Tantangan yang Dihadapi:**
- Perubahan tren cepat di media sosial
- Keterbatasan sumber daya (waktu, tenaga, alat)
- Persaingan digital yang ketat

**Nilai-nilai Marketing yang Diimplementasikan:**
- Unique Selling Point (USP): Juara IMO/RMO
- Marketing Funnel
- Story Telling
- Tone of Voice
- Marketing 6.0

**Job Description Creator Team:**
- Pembuatan konsep strategi konten (tahunan, bulanan, mingguan, harian)
- Riset konsep pemasaran dan update strategi
- Membuat konten untuk TikTok, Instagram, Website, YouTube, Facebook
- Mengelola media sosial dan website
- Memperbesar cakupan pasar

Semangat tim: **"Unstoppable Creativity, Fyp Fyp Fyp!"** 🚀` :
            `**Medtools Creative Team Structure:**

**Team Strategic Roles:**
- Increase Brand Awareness with consistent content
- Drive Engagement and Conversion using funneling
- Build Digital Community with relevant content
- Optimize Multi-Platform Presence

**Challenges Faced:**
- Rapid trend changes in social media
- Limited resources (time, energy, tools)
- Intense digital competition

**Marketing Values Implemented:**
- Unique Selling Point (USP): IMO/RMO Champions
- Marketing Funnel
- Story Telling
- Tone of Voice
- Marketing 6.0

**Creator Team Job Description:**
- Creating content strategy concepts (yearly, monthly, weekly, daily)
- Marketing concept research and strategy updates
- Creating content for TikTok, Instagram, Website, YouTube, Facebook
- Managing social media and website
- Expanding market reach

Team spirit: **"Unstoppable Creativity, Fyp Fyp Fyp!"** 🚀`;
    }
    
    // Default response
    return isIndonesian ?
        `Terima kasih atas pertanyaan tentang "${message}". Sebagai asisten AI Medtools, saya siap membantu dengan:

**Area Keahlian Saya:**
- **SOPs dan Prosedur** - Panduan operasional standar
- **Analisis Pertumbuhan** - Metrik performa dan insights
- **Panduan Tim** - Best practices kolaborasi dan workflow
- **Digitalisasi** - Optimasi proses dan tools
- **Informasi Tim** - Detail tentang Gilang, Febri, dan anggota tim lainnya

Bisa tolong spesifikkan area mana yang ingin kamu tanyakan? Ini akan membantu saya memberikan panduan yang lebih tepat untuk kebutuhan Medtools Creative Team.` :
        `Thank you for your question about "${message}". As your Medtools AI assistant, I'm here to help with:

**My Areas of Expertise:**
- **SOPs and Procedures** - Standard operating procedures
- **Growth Analysis** - Performance metrics and insights
- **Team Guidelines** - Collaboration and workflow best practices
- **Digitalization** - Process optimization and tools
- **Team Information** - Details about Gilang, Febri, and other team members

Could you please specify which area you'd like to ask about? This will help me provide more targeted guidance for your Medtools Creative Team needs.`;
}

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');
const chatWindow = document.getElementById('chatWindow');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeChat();
    
    // Determine initial page from URL
    let initialPage = window.location.pathname.replace('/', '');
    if (!initialPage) { 
        initialPage = 'home'; 
    }
    
    // Validate that the page exists, fallback to home if not
    const validPages = ['home', 'chat', 'about'];
    if (!validPages.includes(initialPage)) {
        initialPage = 'home';
    }
    
    showPage(initialPage, true);
});

// Navigation functionality
function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });
    
    // Add popstate event listener for browser back/forward navigation
    window.addEventListener('popstate', (event) => {
        let pageId;
        if (event.state && event.state.page) {
            pageId = event.state.page;
        } else {
            // Extract page from pathname: "/" => home; "/chat" and "/about" accordingly
            const path = window.location.pathname.replace('/', '');
            pageId = path ? path : 'home';
        }
        
        // Validate page exists
        const validPages = ['home', 'chat', 'about'];
        if (!validPages.includes(pageId)) {
            pageId = 'home';
        }
        
        showPage(pageId, true);
    });
}

function showPage(pageId, skipPush = false) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;
    } else {
        console.error(`Page ${pageId} not found. Falling back to home.`);
        if (pageId !== 'home') {
            showPage('home', skipPush);
            return;
        }
    }
    
    // Add active class to corresponding nav link
    const activeNavLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL using History API (only if not restoring from popstate)
    if (!skipPush) {
        const newUrl = pageId === 'home' ? '/' : '/' + pageId;
        window.history.pushState({ page: pageId }, "", newUrl);
    }
}

// Chat functionality
function initializeChat() {
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
        
        chatInput.addEventListener('input', function() {
            updateSendButton();
        });
    }
    
    updateSendButton();
}

function updateSendButton() {
    if (sendButton && chatInput) {
        const hasText = chatInput.value.trim().length > 0;
        sendButton.disabled = !hasText || isLoading;
    }
}

async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message || isLoading) return;
    
    // Add user message to chat
    addMessageToChat('user', message);
    chatInput.value = '';
    updateSendButton();
    
    // Show loading state
    setLoadingState(true);
    
    try {
        // Get AI response
        const response = await getAIResponse(message);
        addMessageToChat('bot', response);
    } catch (error) {
        console.error('Error getting AI response:', error);
        addMessageToChat('bot', getErrorMessage());
    } finally {
        setLoadingState(false);
    }
}

function addMessageToChat(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${role}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    if (role === 'bot') {
        messageContent.innerHTML = formatBotMessage(content);
    } else {
        messageContent.textContent = content;
    }
    
    messageDiv.appendChild(messageContent);
    
    // Remove welcome message if it exists
    const welcomeMessage = chatWindow.querySelector('.welcome-message');
    if (welcomeMessage && chatMessages.length === 0) {
        welcomeMessage.remove();
    }
    
    chatWindow.appendChild(messageDiv);
    chatMessages.push({ role, content });
    
    // Scroll to bottom with animation
    setTimeout(() => {
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 100);
    
    // Add fade-in animation
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(20px)';
    setTimeout(() => {
        messageDiv.style.transition = 'all 0.3s ease';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 50);
}

function formatBotMessage(content) {
    // Convert markdown-like formatting to HTML
    let formatted = content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    // Handle lists
    formatted = formatted.replace(/^- (.*$)/gim, '<li>$1</li>');
    formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Handle numbered lists
    formatted = formatted.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');
    formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ol>$1</ol>');
    
    return `<p>${formatted}</p>`;
}

async function getAIResponse(message) {
    try {
        // Use Chatbase API
        const response = await fetch(CHATBASE_CONFIG.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CHATBASE_CONFIG.secretKey}`
            },
            body: JSON.stringify({
                agentId: CHATBASE_CONFIG.agentId,
                message: message,
                sessionId: `session_${Date.now()}`, // Generate unique session ID
                stream: false
            })
        });
        
        if (!response.ok) {
            throw new Error(`Chatbase API request failed: ${response.status}`);
        }
        
        const data = await response.json();
        return data.text || data.message || 'Sorry, I could not process your request.';
        
    } catch (error) {
        console.error('Chatbase API Error:', error);
        // Fallback to mock response if Chatbase fails
        return getMockResponse(message);
    }
}

function getErrorMessage() {
    return `I apologize, but I'm experiencing technical difficulties right now. Please try again in a moment.\n\nIn the meantime, here are some common topics I can help with:\n\n- Standard Operating Procedures (SOPs)\n- Creator team guidelines\n- Growth analysis strategies\n- Digitalization workflows\n\nFeel free to ask about any of these areas!`;
}

function setLoadingState(loading) {
    isLoading = loading;
    
    if (sendButton) {
        const sendText = sendButton.querySelector('.send-text');
        const loadingSpinner = sendButton.querySelector('.loading-spinner');
        
        if (loading) {
            sendText.style.display = 'none';
            loadingSpinner.style.display = 'inline';
            sendButton.disabled = true;
        } else {
            sendText.style.display = 'inline';
            loadingSpinner.style.display = 'none';
            updateSendButton();
        }
    }
}

// Utility functions for navigation
function navigateToChat() {
    showPage('chat');
    // Focus on chat input after a short delay
    setTimeout(() => {
        if (chatInput) {
            chatInput.focus();
        }
    }, 300);
}

function scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .step, .feature-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    // Adjust chat window height on mobile
    if (window.innerWidth <= 768) {
        const chatWindow = document.getElementById('chatWindow');
        if (chatWindow) {
            const windowHeight = window.innerHeight;
            const headerHeight = 80;
            const inputHeight = 120;
            const maxHeight = windowHeight - headerHeight - inputHeight - 100;
            chatWindow.style.maxHeight = `${maxHeight}px`;
        }
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + 1, 2, 3 for quick navigation
    if (e.altKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                showPage('home');
                break;
            case '2':
                e.preventDefault();
                showPage('chat');
                break;
            case '3':
                e.preventDefault();
                showPage('about');
                break;
        }
    }
    
    // Escape to clear chat input
    if (e.key === 'Escape' && chatInput && document.activeElement === chatInput) {
        chatInput.value = '';
        updateSendButton();
    }
});

// Export functions for global access
window.navigateToChat = navigateToChat;
window.scrollToFeatures = scrollToFeatures;
window.sendMessage = sendMessage;
window.showPage = showPage;
