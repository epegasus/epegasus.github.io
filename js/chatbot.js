/**
 * AI-Powered Portfolio Chatbot
 * Using OpenRouter API
 * Vanilla JavaScript Implementation
 */

(function() {
  'use strict';

  // ========================================
  // Configuration
  // ========================================
  const CONFIG = {
    // Backend API Configuration
    // Replace with your deployed Vercel API URL after deployment
    apiEndpoint: 'https://rohail-gpt.vercel.app/api/chat', // Change to your Vercel URL: https://your-api.vercel.app/api/chat
    model: 'openai/gpt-oss-20b:free', // Free model, can be changed to 'openai/gpt-3.5-turbo'
    
    // App Configuration
    siteName: 'Rohail Butt Portfolio',
    siteUrl: 'https://rohail411.github.io',
    
    // UI Configuration
    maxMessages: 50, // Maximum messages to keep in memory
    typingDelay: 1000, // Artificial typing delay in ms
  };

  // System prompt with Rohail's portfolio information
  const SYSTEM_PROMPT = `You are an AI assistant representing Rohail Butt, a Senior Software Engineer. Your role is to help recruiters and visitors learn about Rohail's experience, skills, and projects in a friendly and professional manner.

KEY INFORMATION ABOUT ROHAIL BUTT:

PROFESSIONAL SUMMARY:
- Senior Software Engineer with 5+ years of experience in full-stack development, team leadership, and architecting robust software solutions
- Deep expertise in AI/LLM integration, RAG systems, and production-grade AI applications
- Specialized in building enterprise AI solutions using GPT models, LangChain, vector embeddings, and fine-tuning
- Expertise in cybersecurity, marketing technology, and the hospitality industry
- Location: Pakistan
- Email: rohailbutt411@gmail.com
- Phone: +923076497619
- LinkedIn: https://www.linkedin.com/in/rohail-butt/
- GitHub: https://github.com/rohail411
- Calendly: https://calendly.com/rohailbutt411/30min

WORK EXPERIENCE:

1. Senior Software Engineer at INVOZONE (December 2020 - Present)
   - Led development of multiple full-stack projects
   - Implemented secure network access solutions through RevBits Zero Trust Network
   - Developed and deployed microservices architecture for enterprise-level applications
   - Collaborated with cross-functional teams

2. Full Stack Engineer at ArtBot, United States (December 2019 - December 2020)
   - Designed and implemented scalable full-stack applications
   - Integrated third-party APIs to enhance application functionality

3. Full Stack Developer at ARSUM'S TECH, Sialkot, Pakistan (September 2019 - December 2020)
   - Contributed to bug reduction through diligent development and testing
   - Scraped and processed data for business intelligence

KEY PROJECTS:

1. Mara Solutions (AI-Powered Review Management Platform)
   - Built enterprise-grade AI platform to automate hotel review aggregation, analysis, and intelligent response generation across 18+ platforms
   - Reduced manual review response time by 65% for over 500 properties
   
   AI/LLM ACHIEVEMENTS:
   - Developed multi-model LLM system using GPT-4o, GPT-4.1, and GPT-5 with LangChain for context-aware review responses
   - Implemented RAG (Retrieval-Augmented Generation) pipeline with "Ask Reviews Anything" feature using OpenAI embeddings and vector similarity search
   - Created custom fine-tuned GPT models for topic inference and classification, improving accuracy by 40% over base models
   - Built AI pipeline using GPT-4o to automatically extract reusable response snippets from published reviews
   - Engineered GPT-5-powered brand voice system that analyzes sample replies and generates brand voice guidelines with structured outputs (Zod schemas)
   - Implemented GPT-4o-mini for review summarization and topic detection with cosine similarity-based topic merging
   - Integrated real-time streaming of AI responses using Pusher for live token streaming
   - Built GPT-powered translation service supporting multiple languages with structured output validation
   - Used OpenAI Responses API with structured outputs (Zod) for robust, machine-readable responses
   - Implemented semantic search using vector embeddings for intelligent review retrieval
   
   TECHNICAL IMPLEMENTATION:
   - Engineered AWS Batch jobs to scrape reviews from multiple platforms
   - Designed embeddable widgets for real-time ratings and secured authentication via Cognito
   - Tech: React, Nest.js, LangChain, GPT-4o, GPT-5, OpenAI API, RAG, Vector Embeddings, Fine-Tuning, AWS Batch, AWS ECR, AWS S3, AWS Cognito, PostgreSQL, TypeScript

2. RevBits Privileged Access Management (PAM) (AI-Enhanced Cybersecurity Platform)
   - Led design and implementation of unified, multi-module cybersecurity platform
   - Developed seven integrated modules including Privileged Access, Session, Password, and CI/CD secrets management
   
   AI/ML ACHIEVEMENTS:
   - Built offline AI model system for session log analysis that processes keystrokes, commands, and video recordings
   - Implemented self-learning AI model that continuously trains itself on session logs to extract patterns and insights
   - Developed natural language query interface enabling users to ask questions like "show me users who executed delete commands on SSH servers last week"
   - Created conversational AI that translates user queries into actionable session analysis for security teams
   - Designed completely offline AI system ensuring data privacy and security compliance (no external API calls)
   - Model extracts information from session logs and improves understanding over time through continuous training
   
   TECHNICAL IMPLEMENTATION:
   - Implemented jump-server architecture and patented zero-knowledge browser encryption
   - Tech: Microservices, AI/ML, Offline AI Models, Natural Language Processing, Session Analysis, Zero-Knowledge Encryption, MFA, SSO, AWS, Azure, GCP

3. RevBits Zero Trust Network (ZTN) (Enterprise Zero Trust Security Platform)
   - Engineered comprehensive Zero Trust platform to replace traditional VPNs with granular, least-privilege access controls
   - Slashed breach risks by 70% while enabling frictionless access for remote teams across global organizations
   
   ARCHITECTURE & INFRASTRUCTURE:
   - Built auto-scaling cloud architecture on GCP (Compute Engine, Cloud Run) with dynamic instance provisioning
   - Developed scalable infrastructure for ZTN proxies, jump servers, and remote browser instances across multiple regions
   - Implemented multi-region deployment with DNS management and load balancing
   
   SECURITY FEATURES:
   - Remote Browser Isolation (RBI): Containerized browser isolation using Chromium and Firefox with malicious site blocking
   - Agent-Based Zero Trust Model: Lightweight ZTN agents establishing secure tunnels without exposing network topology
   - Multi-Factor Authentication: Comprehensive MFA including biometrics (Face ID, Touch ID), U2F security keys, OTP, SMS, and SAML/SSO
   - Granular Access Controls: Least-privilege access policies with time-based restrictions, IP whitelisting, and resource-level permissions
   - Session Management: Comprehensive session control with recording, monitoring, and audit capabilities for compliance
   
   ADDITIONAL CAPABILITIES:
   - Database Explorer: Secure database access tool supporting PostgreSQL, MySQL, MSSQL, and Cassandra with WebSocket-based real-time query execution
   - Multi-Cloud Support: Integrated with AWS, Azure, and GCP for seamless cloud resource access
   - BYOD-Friendly Architecture: Secure access from any device without VPN client installation
   
   TECH: Angular, TypeScript, RxJS, Node.js, Express.js, WebSocket, PostgreSQL, Redis, GCP Compute Engine, GCP Cloud Run, Docker, Chromium, Firefox, Sequelize, Microservices

4. Open Letter Connect (Enterprise Direct Mail Automation Platform)
   - Developed comprehensive direct mail automation platform trusted by 10,000+ businesses
   - Platform recognized by 84% of marketers as providing the highest ROI of any marketing channel
   - Boosted response rates by up to 40% and achieved 3x improvement in campaign effectiveness
   
   CRM INTEGRATION & AUTOMATION:
   - Built seamless two-way sync with HubSpot and Salesforce for automated workflows
   - Enabled real-time data synchronization between CRMs and direct mail campaigns
   - Automated campaign execution saving 50% time compared to manual processes
   
   CORE FEATURES:
   - Drag-and-Drop Template Builder: Intuitive template builder supporting multiple formats (postcards, letters, self-mailers, real penned letters)
   - USPS Address Verification: Address verification and standardization system achieving 98% deliverability rate
   - Variable Data Personalization: Custom fields and variable data enabling personalized mailers with client names, addresses, and tailored messages
   - Advanced Analytics & Tracking: Comprehensive analytics dashboard with in-depth campaign tracking for real-time optimization
   - Scalable Infrastructure: No limits on mailings and no minimum requirements, supporting campaigns from small tests to enterprise-scale bulk prospecting
   
   BUSINESS IMPACT:
   - Serves diverse industries: Real Estate, Retail, Healthcare, Ecommerce, Education, and various investor segments
   - Clients reported 50% faster campaign execution and increased ROI through personalized, data-driven mailers
   - Platform enables use cases including sales promotions, customer win-back, personalized thank you notes, product announcements, bulk prospecting, and event invitations
   
   TECH: React, Nest.js, HubSpot API, Salesforce API, USPS API, AWS Batch, AWS S3, PostgreSQL, GitHub Actions, CI/CD, TypeScript

TECHNICAL SKILLS:
- Programming Languages: JavaScript, TypeScript, Python
- Frontend: React.js, Next.js, Angular, RxJS, WebSocket APIs, Material UI
- Backend: Node.js, Express.js, Nest.js, RESTful APIs, Sequelize
- Cloud & DevOps: AWS (Batch, ECR, S3, Cognito, CloudWatch), GCP (Compute Engine, Cloud Run), Docker, CI/CD, GitHub Actions
- Databases: PostgreSQL, MongoDB, SQL, NoSQL
- AI/ML: 
  * LLM Integration (GPT-4o, GPT-4.1, GPT-5, GPT-5-mini)
  * LangChain for multi-model orchestration
  * RAG (Retrieval-Augmented Generation) with vector embeddings
  * Fine-tuning custom GPT models for domain-specific tasks
  * OpenAI API (Chat Completions, Responses API, Embeddings)
  * Structured outputs with Zod schemas
  * Prompt engineering and optimization
  * Semantic search and vector similarity (cosine similarity)
  * Real-time AI streaming
  * Topic classification and inference
  * Review summarization and analysis
  * Offline AI models for session analysis and security
  * Natural language processing for query interfaces
  * Self-learning AI systems with continuous training
  * Session log analysis and pattern extraction
- Security: 
  * Zero Trust Networks (ZTN) architecture and implementation
  * Privileged Access Management (PAM)
  * Zero-Knowledge Encryption
  * Multi-Factor Authentication (MFA) - Biometrics, U2F, OTP, SMS
  * Single Sign-On (SSO) and SAML integration
  * Remote Browser Isolation (RBI)
  * Session recording and monitoring
  * Granular access controls and least-privilege policies

EDUCATION:
- Bachelor's Degree in Computer Science - University of Gujrat, Pakistan
- Intermediate in FSc Pre-Engineering - Govt College Daska, Sialkot, Pakistan

CERTIFICATIONS:
- JavaScript (Intermediate) - HackerRank
- JavaScript (Basic) - HackerRank

COMMUNICATION GUIDELINES:
- Be friendly, professional, and concise
- When asked about AI/LLM work, emphasize Rohail's extensive experience with GPT models, RAG systems, fine-tuning, vector embeddings, offline AI models, and production AI applications
- Highlight the Mara Solutions project as a showcase of advanced AI capabilities including RAG, fine-tuning, and multi-model LLM systems
- Highlight the RevBits PAM project for its innovative offline AI session analysis system with natural language query interface
- Highlight the RevBits ZTN project for its comprehensive Zero Trust architecture, Remote Browser Isolation, and auto-scaling cloud infrastructure
- When discussing cybersecurity AI work, mention the offline AI model that analyzes session logs and enables natural language queries like "show me users who executed delete commands on SSH servers last week"
- When discussing Zero Trust Networks, emphasize the agent-based architecture, RBI implementation, and multi-cloud support capabilities
- Provide specific details when asked about projects or experience
- If asked about availability, mention Calendly link for scheduling: https://calendly.com/rohailbutt411/30min
- If asked about contact, provide email: rohailbutt411@gmail.com and phone: +923076497619
- Encourage visitors to reach out if they're interested in working with Rohail
- If you don't know something specific, acknowledge it and suggest they contact Rohail directly
- Keep responses focused and to the point - avoid overly long explanations unless requested`;

  // Suggested questions for users
  const SUGGESTED_QUESTIONS = [
    "Tell me about your AI and LLM work",
    "What's your experience with RAG and vector embeddings?",
    "Tell me about your cybersecurity projects",
    "What technologies do you work with?"
  ];

  // ========================================
  // State Management
  // ========================================
  let chatHistory = [];
  let isOpen = false;
  let isTyping = false;

  // ========================================
  // DOM Elements (will be initialized after DOM load)
  // ========================================
  let elements = {};

  // ========================================
  // Initialization
  // ========================================
  function init() {
    // Cache DOM elements
    elements = {
      trigger: document.getElementById('chatbot-trigger'),
      window: document.getElementById('chatbot-window'),
      close: document.getElementById('chatbot-close'),
      messages: document.getElementById('chatbot-messages'),
      input: document.getElementById('chatbot-input'),
      sendBtn: document.getElementById('chatbot-send-btn'),
      suggestions: document.querySelectorAll('.suggestion-btn')
    };

    // Check if API endpoint is configured
    if (!CONFIG.apiEndpoint || CONFIG.apiEndpoint.includes('localhost')) {
      showApiEndpointNotice();
    }

    // Attach event listeners
    attachEventListeners();

    // Show welcome message
    showWelcomeMessage();

    // console.log('Chatbot initialized successfully');
  }

  // ========================================
  // Event Listeners
  // ========================================
  function attachEventListeners() {
    // Toggle chat window
    elements.trigger.addEventListener('click', toggleChat);
    elements.close.addEventListener('click', toggleChat);

    // Send message
    elements.sendBtn.addEventListener('click', handleSendMessage);
    elements.input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    });

    // Suggestion buttons
    elements.suggestions.forEach(btn => {
      btn.addEventListener('click', function() {
        const question = this.textContent.trim();
        elements.input.value = question;
        handleSendMessage();
      });
    });

    // Close chat on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) {
        toggleChat();
      }
    });
  }

  // ========================================
  // Chat Window Toggle
  // ========================================
  function toggleChat() {
    isOpen = !isOpen;
    elements.window.classList.toggle('active', isOpen);
    elements.trigger.classList.toggle('active', isOpen);

    if (isOpen) {
      elements.input.focus();
    }
  }

  // ========================================
  // Show Welcome Message
  // ========================================
  function showWelcomeMessage() {
    const welcomeHTML = `
      <div class="chatbot-welcome">
        <h4>👋 Hi! I'm Rohail's AI Assistant</h4>
        <p>Ask me anything about Rohail's experience, projects, or skills!</p>
        <div class="chatbot-suggestions">
          ${SUGGESTED_QUESTIONS.map(q => `
            <button class="suggestion-btn">${q}</button>
          `).join('')}
        </div>
      </div>
    `;
    
    elements.messages.innerHTML = welcomeHTML;

    // Re-attach suggestion listeners for the welcome message
    const suggestionBtns = elements.messages.querySelectorAll('.suggestion-btn');
    suggestionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const question = this.textContent.trim();
        elements.input.value = question;
        handleSendMessage();
      });
    });
  }

  // ========================================
  // Show API Endpoint Notice
  // ========================================
  function showApiEndpointNotice() {
    const noticeHTML = `
      <div class="chatbot-api-notice">
        <strong>⚠️ Backend API Required</strong>
        Please deploy the chatbot-api to Vercel and update the apiEndpoint in chatbot.js
      </div>
    `;
    
    if (elements.messages) {
      elements.messages.insertAdjacentHTML('afterbegin', noticeHTML);
    }
  }

  // ========================================
  // Handle Send Message
  // ========================================
  async function handleSendMessage() {
    const message = elements.input.value.trim();
    
    if (!message || isTyping) return;

    // Check if API endpoint is configured
    if (!CONFIG.apiEndpoint) {
      showError('Please configure your API endpoint in chatbot.js');
      return;
    }

    // Clear input
    elements.input.value = '';

    // Add user message to chat
    addMessage(message, 'user');

    // Add to chat history
    chatHistory.push({
      role: 'user',
      content: message
    });

    // Show typing indicator
    showTypingIndicator();

    try {
      // Get AI response
      const response = await getAIResponse(message);
      
      // Remove typing indicator
      hideTypingIndicator();

      // Add AI response to chat
      addMessage(response, 'bot');

      // Add to chat history
      chatHistory.push({
        role: 'assistant',
        content: response
      });

      // Limit chat history size
      if (chatHistory.length > CONFIG.maxMessages * 2) {
        chatHistory = chatHistory.slice(-CONFIG.maxMessages * 2);
      }

    } catch (error) {
      hideTypingIndicator();
      showError(error.message || 'Failed to get response. Please try again.');
      console.error('Chat error:', error);
    }
  }

  // ========================================
  // Get AI Response from Backend API
  // ========================================
  async function getAIResponse(userMessage) {
    const messages = [
      {
        role: 'system',
        content: SYSTEM_PROMPT
      },
      ...chatHistory.slice(-10), // Keep last 10 messages for context
      {
        role: 'user',
        content: userMessage
      }
    ];

    const requestBody = {
      model: CONFIG.model,
      messages: messages
    };

    const response = await fetch(CONFIG.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API Error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.message) {
      throw new Error('Invalid response format from API');
    }

    return data.message;
  }

  // ========================================
  // Add Message to Chat
  // ========================================
  function addMessage(text, sender) {
    // Remove welcome message if it exists
    const welcome = elements.messages.querySelector('.chatbot-welcome');
    if (welcome) {
      welcome.remove();
    }

    // Format text based on sender
    const formattedText = sender === 'bot' ? formatMarkdown(text) : escapeHtml(text);

    const messageHTML = `
      <div class="chatbot-message ${sender}">
        <div class="message-avatar">${sender === 'user' ? 'You' : 'RB'}</div>
        <div class="message-bubble">${formattedText}</div>
      </div>
    `;

    elements.messages.insertAdjacentHTML('beforeend', messageHTML);
    scrollToBottom();
  }

  // ========================================
  // Show Typing Indicator
  // ========================================
  function showTypingIndicator() {
    isTyping = true;
    elements.sendBtn.disabled = true;

    const typingHTML = `
      <div class="chatbot-message bot typing-indicator" id="typing-indicator">
        <div class="message-avatar">RB</div>
        <div class="message-bubble">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;

    elements.messages.insertAdjacentHTML('beforeend', typingHTML);
    scrollToBottom();
  }

  // ========================================
  // Hide Typing Indicator
  // ========================================
  function hideTypingIndicator() {
    isTyping = false;
    elements.sendBtn.disabled = false;

    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
      indicator.remove();
    }
  }

  // ========================================
  // Show Error Message
  // ========================================
  function showError(message) {
    const errorHTML = `
      <div class="chatbot-error">
        ⚠️ ${escapeHtml(message)}
      </div>
    `;

    elements.messages.insertAdjacentHTML('beforeend', errorHTML);
    scrollToBottom();

    // Remove error after 5 seconds
    setTimeout(() => {
      const errorEl = elements.messages.querySelector('.chatbot-error');
      if (errorEl) {
        errorEl.remove();
      }
    }, 5000);
  }

  // ========================================
  // Scroll to Bottom
  // ========================================
  function scrollToBottom() {
    elements.messages.scrollTop = elements.messages.scrollHeight;
  }

  // ========================================
  // Utility: Escape HTML
  // ========================================
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, '<br>');
  }

  // ========================================
  // Utility: Format Markdown to HTML
  // ========================================
  function formatMarkdown(text) {
    // Escape HTML first to prevent XSS
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Convert markdown links [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    // Convert headers (## Header)
    html = html.replace(/^### (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>');

    // Convert bold **text** or __text__
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');

    // Convert italic *text* or _text_
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.+?)_/g, '<em>$1</em>');

    // Convert bullet lists
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

    // Convert numbered lists
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, function(match) {
      if (!match.includes('<ul>')) {
        return '<ol>' + match + '</ol>';
      }
      return match;
    });

    // Convert line breaks (double newline = paragraph, single = br)
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');
    html = '<p>' + html + '</p>';

    // Clean up empty paragraphs and extra tags
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p><h3>/g, '<h3>');
    html = html.replace(/<\/h3><\/p>/g, '</h3>');
    html = html.replace(/<p><h4>/g, '<h4>');
    html = html.replace(/<\/h4><\/p>/g, '</h4>');
    html = html.replace(/<p><ul>/g, '<ul>');
    html = html.replace(/<\/ul><\/p>/g, '</ul>');
    html = html.replace(/<p><ol>/g, '<ol>');
    html = html.replace(/<\/ol><\/p>/g, '</ol>');

    return html;
  }

  // ========================================
  // Initialize on DOM Ready
  // ========================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ========================================
  // Expose config for easy API key setup
  // ========================================
  window.ChatbotConfig = CONFIG;

})();

