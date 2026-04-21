// Particle animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Button click handlers
function initButtonHandlers() {
    const downloadBtn = document.querySelector('.btn-primary');
    const contactBtn = document.querySelector('.btn-secondary');
    const downloadResumeBtn = document.querySelector('.btn-download');
    const contactForm = document.querySelector('.contact-form-container');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Create a temporary link element to trigger download
            const link = document.createElement('a');
            link.href = 'P.Madala.pdf';
            link.download = 'P.Madala.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            // Scroll to contact section
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', () => {
            // Create a temporary link element to trigger download
            const link = document.createElement('a');
            link.href = 'P.Madala.pdf';
            link.download = 'P.Madala.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // ============== CONTACT FORM EMAIL FUNCTIONALITY START ==============
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('.btn-send');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="btn-icon"><i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i></span>Sending...';
            submitBtn.disabled = true;

            try {
                // Submit form to Formspree
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`);
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                alert('Sorry, there was an error sending your message. Please try again or contact me directly at phelokazimadala@yahoo.com');
            } finally {
                // Restore button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    // ============== CONTACT FORM EMAIL FUNCTIONALITY END ==============
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    });
}

// Mouse movement parallax effect
function initParallax() {
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        particles.forEach((particle, index) => {
            const speed = (index % 5 + 1) * 0.5;
            const xPos = (x - 0.5) * speed;
            const yPos = (y - 0.5) * speed;
            
            particle.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    });
}

// Demo button functionality
function initDemoButtons() {
    const demoButtons = document.querySelectorAll('.btn-demo');
    
    demoButtons.forEach(button => {
        const demoUrl = button.getAttribute('data-demo-url');
        
        // If no URL is set, disable the button
        if (!demoUrl || demoUrl.trim() === '') {
            button.disabled = true;
            button.innerHTML = '<span class="btn-icon"><i class="fa-solid fa-screwdriver-wrench" aria-hidden="true"></i></span>Coming Soon';
            button.title = 'Demo link will be available soon';
        } else {
            button.addEventListener('click', () => {
                // Open the demo link in a new tab
                window.open(demoUrl, '_blank');
            });
        }
    });
}
// ============== CHATBOT FUNCTIONALITY START ==============

// Chatbot knowledge base with portfolio information
const chatbotKnowledge = {
    skills: {
        keywords: ['skills', 'skill', 'technology', 'technologies', 'programming', 'code', 'coding', 'languages', 'tech'],
        response: "Phelokazi has expertise in:\n\nLanguages: Python, JavaScript, C#, SQL\nWeb Development: HTML, CSS\nData Analysis: Pandas, NumPy, Seaborn, Matplotlib, Scikit-learn\nVersion Control: Git, GitHub\n\nPlus soft skills like communication, teamwork, and problem-solving!"
    },
    projects: {
        keywords: ['project', 'projects', 'work', 'portfolio', 'weather', 'app', 'application'],
        response: "Phelokazi has built some interesting projects! The standout one is a Weather Application that integrates real-world data using APIs. It's responsive and shows her passion for blending curiosity with technical skills. You can check out the live demo in the projects section!"
    },
    education: {
        keywords: ['education', 'study', 'school', 'university', 'degree', 'diploma', 'learning'],
        response: "Phelokazi is pursuing an IT Diploma in Software Development at Nelson Mandela University. She's also earned certifications from IBM in:\n\nIntroduction to AI\nGenerative AI\nPrompt Engineering Basics\n\nAlways learning and growing!"
    },
    contact: {
        keywords: ['contact', 'reach', 'email', 'hire', 'collaborate', 'work together', 'get in touch'],
        response: "You can reach out to Phelokazi through the contact form on this portfolio! She's always excited to discuss new projects, innovative ideas, or potential collaborations. Just scroll down to the 'Get In Touch' section"
    },
    experience: {
        keywords: ['experience', 'background', 'about', 'who', 'career'],
        response: "Phelokazi is a passionate Software Development student who loves creating meaningful digital experiences. She combines technical skills with creativity, especially enjoying projects that solve real-world problems like her weather application. She's detail-oriented and always eager to learn new technologies!"
    }
};

// Default responses for when no match is found
const defaultResponses = [
    "That's an interesting question! You can learn more about Phelokazi by exploring different sections of her portfolio or asking me about her skills, projects, education, or how to contact her.",
    "I'd love to help! Try asking me about Phelokazi's technical skills, her projects, or her background. You can also use the quick buttons below for common questions.",
    "Feel free to ask me about Phelokazi's experience, certifications, or any specific projects you'd like to know more about!"
];

// PORTFOLIO CHATBOT - JAVASCRIPT START
class PortfolioChatbot {
    constructor() {
        this.isOpen = false;
        this.conversationHistory = this.loadConversationHistory();
        this.maxHistoryItems = 10; // Store last 10 conversations
        this.responses = {
            greetings: [
                "Hey there! I'm Phelokazi's chatbot. Feel free to ask me anything about her background, skills, or projects!",
                "Hi! I'm Phelokazi's chatbot. How can I help you learn more about her?",
                "Hello there! I'm Phelokazi's chatbot. Curious about her work, projects, or skills? Ask away!"
            ],
            introduction: {
                keywords: ['introduce', 'who', 'background'],
                responses: [
                    "Sure! Phelokazi Madala is a passionate software developer with a Diploma in IT (Software Development) from Nelson Mandela University. She's skilled in Python, JavaScript, SQL, and more — and is always eager to learn, solve problems, and build meaningful digital experiences. She has expertise in AI and data analysis, is passionate about creating impactful digital solutions, and believes in continuous learning, innovation, and teamwork."
                ] 
            },
            skills: {
                keywords: ['skills', 'languages', 'technology', 'tech skills', 'programming'],
                responses: [
                    "Phelokazi has expertise in Python, JavaScript, C#, and SQL. She also builds beautiful, responsive websites using HTML, CSS, and JavaScript frameworks. Her technical toolbox includes data analysis libraries like Pandas, NumPy, and Scikit-learn, as well as version control using Git and GitHub."
                ]
            },
            soft: {
                keywords: ['soft'],
                responses: [
                    "Phelokazi is known for her calm and thoughtful approach to problem-solving, strong communication skills, and the ability to work effectively in collaborative team environments.",
                    "She's a quiet powerhouse — reliable, focused, and always eager to learn. Whether it’s adapting to new challenges or supporting her teammates, she brings consistency and heart to her work.",
                    "Aside from her technical strengths, Phelokazi is empathetic, disciplined, and an excellent listener — all qualities that make her a great teammate and professional."
                ]
            },
            projects: {
                keywords: ['project', 'build', 'created', 'developed'],
                responses: [
                    "Phelokazi has worked on several interesting projects including a Gqeberha Clinic booking system, an award-winning chatbot for CAPACITI Group, a memory game, and a weather application. You can see demos of some projects on her portfolio!",
                    "Her notable projects include healthcare booking systems, educational chatbots, interactive games, and weather apps. Each project showcases different technical skills and problem-solving approaches."
                ]
            },
            education: {
                keywords: ['education', 'study', 'degree', 'school', 'university'],
                responses: [
                    "Phelokazi has an IT Diploma in Software Development from Nelson Mandela University and completed her National Senior Certificate at Byletts Combined High School."
                ]
            },
            certificates: {
                keywords: ['certificate', 'certification', 'ibm', 'ai', 'course'],
                responses: [
                    "Phelokazi has earned multiple IBM certificates including Introduction to Software Engineering, AI, Generative AI, Prompt Engineering, Git/GitHub, HTML/CSS/JavaScript, and Python in Data Science.",
                    "Her certifications cover a wide range of modern technologies from IBM, showing her commitment to continuous learning in software development, AI, and data science."
                ]
            },
            strengths: {
                keywords: ['strength', 'good at'],
                responses: [
                    "Phelokazi is calm, focused and detail—oriented developer. She's good at analytical problem solving, staying organized and collaborating in teams."
                ]
            },
            personality: {
                keywords: ['personality', 'traits', 'known'],
                responses: [
                    "She’s known for her quiet strength — a controlled, thoughtful presence who brings logic and clarity to every challenge she faces."
            
                ]
            },
            achievements: {
                keywords: ['award', 'recognition', 'accomplishments'],
                responses: [
                    "One of her biggest achievements was co-creating an award-winning chatbot for CAPACITI. She also completed numerous IBM certifications and graduated with an IT diploma despite personal challenges."
            
                ]
            },
            location: {
                keywords: ['location', 'stay', 'based', 'located', 'live', 'address'],
                responses: [
                    "Phelokazi is based in Delft, Cape Town, Western Cape, South Africa."
                   
                ]
            },
            from: {
                keywords: ['where is she from', 'originally'],
                responses: [
                    "Phelokazi is from the Eastern Cape — she comes from the small town of iDutywa, where her passion for technology and problem-solving first began."
            
                ]
            },
            experience: {
                keywords: ['current', 'experience', 'job', 'work', 'internship', 'learnership'],
                responses: [
                    "She is currently completing a learnership with CAPACITI and is open to internships or entry-level positions depending on the opportunity."
                ]
            },
            tools: {
                keywords: ['tools', 'software'],
                responses: [
                    "She works with tools like VS Code, Git/GitHub, Supabase, Jupyter Notebooks, and platforms like Netlify to deploy."
            
                ]
            },
            libraries: {
                keywords: ['platforms', 'libraries', 'technologies'],
                responses: [
                    "Her go-to libraries include Pandas, NumPy, Matplotlib and Scikit-learn"
            
                ]
            },
            contact: {
                keywords: ['contact', 'email', 'reach', 'hire', 'connect', 'get hold', 'get in touch'],
                responses: [
                    "You can reach Phelokazi at phelokazimadala@yahoo.com, connect on LinkedIn, or check out her GitHub profile. There's also a contact form right here on the portfolio. She's always open to discussing new opportunities and collaborations!!."
                ]      
            },
            // ============== CV DOWNLOAD FUNCTIONALITY START ==============
            cv: {
                keywords: ['cv', 'resume', 'download', 'pdf', 'curriculum vitae', 'see her cv', 'download cv', 'her resume'],
                responses: [
                    "Here's Phelokazi's CV! You can download it by clicking this link: <a href='P.Madala.pdf' download='P.Madala.pdf' class='cv-download-link'>Download PDF</a>",
                    "Sure! You can download Phelokazi's CV here: <a href='P.Madala.pdf' download='P.Madala.pdf' class='cv-download-link'>Download CV (PDF)</a>"
                ]
            },
            // ============== CV DOWNLOAD FUNCTIONALITY END ==============
            hobbies: {
                keywords: [ 'hobby', 'do for fun', 'fun', 'interests'],
                responses: [
                    "When she’s not debugging code, Phelokazi loves relaxing with music, taking walks, and trying a new recipe as she also enjoyes cooking.",
                ]      
            },
            space: {
                keywords: ['free time', 'outside coding', 'not coding'],
                responses: [
                    "In her free time, you might find Phelokazi exploring new tech content, enjoying nature, or recharging with a good playlist and some peace and quiet.",
                ]
            },
            fact: {
                keywords: ['fact'],
                responses: [
                    "A fact about her is that she has a quiet personality and that makes her an amazing listener — and also the kind of person who notices details others miss!" 
                ]      
            },
            consultation: {
                keywords: ['consultations', 'meeting', 'idea'],
                responses: [
                    "Good news: consultations are free! So if you have an idea or project in mind, get in touch — Phelokazi will guide you through the options and provide transparent pricing."
                ]
            },
            pay: {
                keywords: ['charge', 'pay', 'fees', 'costs', 'price', 'pricing'],
                responses: [
                    "Yes, Phelokazi does charge for her services. Whether you're looking for a custom website, data analysis, or software solutions, the cost depends on the scope and complexity of the project."
                ]
            },

        };
        
        this.init();
    }

    init() {
        this.createChatbotHTML();
        this.addEventListeners();
    }

    // Load conversation history from localStorage
    loadConversationHistory() {
        try {
            const history = localStorage.getItem('phelokazi_chatbot_history');
            return history ? JSON.parse(history) : [];
        } catch (error) {
            console.warn('Failed to load conversation history:', error);
            return [];
        }
    }

    // Save conversation history to localStorage
    saveConversationHistory() {
        try {
            localStorage.setItem('phelokazi_chatbot_history', JSON.stringify(this.conversationHistory));
        } catch (error) {
            console.warn('Failed to save conversation history:', error);
        }
    }

    // Add conversation to history
    addToHistory(userMessage, botResponse) {
        const conversation = {
            timestamp: new Date().toISOString(),
            user: userMessage,
            bot: botResponse
        };

        this.conversationHistory.unshift(conversation);

        // Keep only the last maxHistoryItems conversations
        if (this.conversationHistory.length > this.maxHistoryItems) {
            this.conversationHistory = this.conversationHistory.slice(0, this.maxHistoryItems);
        }

        this.saveConversationHistory();
    }

    // Clear conversation history
    clearHistory() {
        this.conversationHistory = [];
        this.saveConversationHistory();
    }

    // Show conversation history
    showHistory() {
        if (this.conversationHistory.length === 0) {
            this.addBotMessage("No conversation history yet! Start chatting to build up your history.");
            return;
        }

        let historyMessage = "**Recent Conversation History:**\n\n";

        this.conversationHistory.slice(0, 5).forEach((conv, index) => {
            const date = new Date(conv.timestamp).toLocaleDateString();
            const time = new Date(conv.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

            historyMessage += `**${date} at ${time}**\n`;
            historyMessage += `You: "${conv.user}"\n`;
            historyMessage += `Me: "${conv.bot.substring(0, 100)}${conv.bot.length > 100 ? '...' : ''}"\n\n`;
        });

        if (this.conversationHistory.length > 5) {
            historyMessage += `...and ${this.conversationHistory.length - 5} more conversations`;
        }

        this.addBotMessage(historyMessage);
    }

    createChatbotHTML() {
        const chatbotHTML = `
            <div class="chatbot-container" id="chatbot">
                <div class="chatbot-toggle" id="chatbot-toggle">
                    <span class="chatbot-icon"><i class="fa-solid fa-comments" aria-hidden="true"></i></span>
                </div>
                <div class="chatbot-window" id="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-title">
                            <span class="bot-avatar"><i class="fa-solid fa-robot" aria-hidden="true"></i></span>
                            <span>Ask about Phelokazi</span>
                        </div>
                        <button class="chatbot-close" id="chatbot-close">×</button>
                    </div>
                    <div class="chatbot-messages" id="chatbot-messages">
                        <div class="bot-message">
                            <span class="message-avatar"><i class="fa-solid fa-robot" aria-hidden="true"></i></span>
                            <div class="message-content">
                                ${this.getRandomResponse(this.responses.greetings)}
                            </div>
                        </div>
                    </div>
                    <div class="chatbot-input-container">
                        <input type="text" id="chatbot-input" placeholder="Ask me about Phelokazi's skills, projects, or experience..." />
                        <button id="chatbot-send"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                    <div class="quick-questions">
                        <button class="quick-btn" data-question="Tell me about her skills">Skills</button>
                        <button class="quick-btn" data-question="What projects has she worked on?">Projects</button>
                        <button class="quick-btn" data-question="How can I contact her?">Contact</button>
                    </div>
                    <div class="history-controls">
                        <button class="history-btn" id="show-history"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i> History</button>
                        <button class="history-btn" id="clear-history"><i class="fa-solid fa-trash" aria-hidden="true"></i> Clear</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    addEventListeners() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const send = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        const quickBtns = document.querySelectorAll('.quick-btn');
        const showHistoryBtn = document.getElementById('show-history');
        const clearHistoryBtn = document.getElementById('clear-history');

        toggle.addEventListener('click', () => this.toggleChatbot());
        close.addEventListener('click', () => this.closeChatbot());
        send.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        quickBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const question = btn.getAttribute('data-question');
                this.handleUserMessage(question);
            });
        });

        showHistoryBtn.addEventListener('click', () => this.showHistory());
        clearHistoryBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear your conversation history?')) {
                this.clearHistory();
                this.addBotMessage("Conversation history cleared! 🧹 Ready for a fresh start!");
            }
        });
    }

    toggleChatbot() {
        const window = document.getElementById('chatbot-window');
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            window.style.display = 'flex';
            setTimeout(() => window.classList.add('open'), 10);
        } else {
            this.closeChatbot();
        }
    }

    closeChatbot() {
        const window = document.getElementById('chatbot-window');
        if (window) {
            window.classList.remove('open');
            setTimeout(() => {
                window.style.display = 'none';
                this.isOpen = false;
                this.resetChat(); // Reset chat to initial state
            }, 300);
        }
    }

    resetChat() {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (messagesContainer) {
            // Clear all messages and add back the initial greeting
            messagesContainer.innerHTML = `
                <div class="bot-message">
                    <span class="message-avatar">🤖</span>
                    <div class="message-content">
                        ${this.getRandomResponse(this.responses.greetings)}
                    </div>
                </div>
            `;
        }
    }

    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (message) {
            this.addUserMessage(message);
            input.value = '';
            setTimeout(() => this.handleUserMessage(message), 500);
        }
    }

    addUserMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        const userMessage = `
            <div class="user-message">
                <div class="message-content">
                    ${message}
                    <div class="message-timestamp">${timestamp}</div>
                </div>
                <span class="message-avatar">👤</span>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', userMessage);
        this.scrollToBottom();
    }

    addBotMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        const botMessage = `
            <div class="bot-message">
                <span class="message-avatar">🤖</span>
                <div class="message-content">
                    ${message}
                    <div class="message-timestamp">${timestamp}</div>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', botMessage);
        this.scrollToBottom();
    }

    handleUserMessage(message) {
        const response = this.generateResponse(message.toLowerCase());

        // Only add to history if we got a response (not for history commands)
        if (response) {
            this.addBotMessage(response);
            this.addToHistory(message, response);
        }
    }

    generateResponse(message) {
        // Check for history-related commands
        if (this.containsAny(message, ['history', 'previous', 'past', 'conversations', 'what did we talk about'])) {
            this.showHistory();
            return; // Don't return a response, showHistory handles it
        }

        // Check for greetings
        if (this.containsAny(message, ['hello', 'hi', 'hey', 'good morning', 'good afternoon'])) {
            return this.getRandomResponse(this.responses.greetings);
        }

        // Check each category
        for (const [category, data] of Object.entries(this.responses)) {
            if (category === 'greetings') continue;

            if (this.containsAny(message, data.keywords)) {
                return this.getRandomResponse(data.responses);
            }
        }

        // Default responses
        const defaultResponses = [
            "That's an interesting question! You can learn more about Phelokazi by exploring different sections of her portfolio or asking me about her skills, projects, education, or how to contact her.",
            "I'd love to help! Try asking me about Phelokazi's technical skills, her projects, or her background. You can also use the quick buttons below for common questions.",
            "Feel free to ask me about Phelokazi's experience, certifications, or any specific projects you'd like to know more about!"
        ];

        return this.getRandomResponse(defaultResponses);
    }

    containsAny(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTo({
            top: messagesContainer.scrollHeight,
            behavior: 'smooth'
        });
    }
}

// Initialize chatbot
function initPortfolioChatbot() {
    // Remove any existing chatbot instances first
    const existingChatbot = document.getElementById('chatbot');
    if (existingChatbot) {
        existingChatbot.remove();
    }
    
    // Remove any other chatbot elements that might be interfering
    const otherChatbots = document.querySelectorAll('[class*="chat"], [id*="chat"]:not(#chatbot)');
    otherChatbots.forEach(element => {
        if (!element.closest('#chatbot')) {
            element.remove();
        }
    });
    
    new PortfolioChatbot();
}

//PORTFOLIO CHATBOT - JAVASCRIPT END


// Prevent other chatbot systems from loading
function preventOtherChatbots() {
    // Override any global chat functions that might interfere
    if (window.ReplitChat) {
        window.ReplitChat = undefined;
    }
    
    // Hide any existing chat elements
    const hideOtherChats = () => {
        const otherChats = document.querySelectorAll('[class*="replit-chat"], [class*="messaging"], iframe[src*="chat"]');
        otherChats.forEach(chat => {
            if (!chat.closest('#chatbot')) {
                chat.style.display = 'none';
                chat.style.visibility = 'hidden';
            }
        });
    };
    
    // Run immediately and on mutations
    hideOtherChats();
    
    // Create observer to hide any dynamically added chat elements
    const observer = new MutationObserver(hideOtherChats);
    observer.observe(document.body, { childList: true, subtree: true });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    preventOtherChatbots(); // Prevent conflicts first
    createParticles();
    initSmoothScroll();
    initButtonHandlers();
    initHeaderScroll();
    initParallax();
    initDemoButtons();
    initPortfolioChatbot(); // Initialize chatbot functionality
});

// Add some loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});