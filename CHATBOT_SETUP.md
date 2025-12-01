# AI Chatbot Setup Guide

## Overview

Your portfolio now includes an AI-powered chatbot that helps recruiters learn about your experience, projects, and skills. The chatbot uses OpenRouter API to provide intelligent responses about your professional background.

## Features

- ✅ Floating chat bubble (bottom-right corner)
- ✅ Modern, responsive design matching your portfolio
- ✅ Pre-configured with your complete professional information
- ✅ Suggested questions for quick engagement
- ✅ Smooth animations and typing indicators
- ✅ Mobile-responsive layout

## Setup Instructions

### Step 1: Get Your OpenRouter API Key

1. Visit [OpenRouter](https://openrouter.ai/)
2. Sign up for a free account
3. Go to your [API Keys page](https://openrouter.ai/keys)
4. Create a new API key
5. Copy the API key

### Step 2: Add API Key to Your Site

1. Open the file: `js/chatbot.js`
2. Find line ~16 with: `apiKey: '',`
3. Add your API key between the quotes:
   ```javascript
   apiKey: 'sk-or-v1-YOUR-API-KEY-HERE',
   ```
4. Save the file

### Step 3: Configure OpenRouter Settings (Recommended)

To protect your API key when using it client-side:

1. Go to [OpenRouter Settings](https://openrouter.ai/settings)
2. **HTTP Referrer Restrictions**: Add your GitHub Pages domain:
   - `https://rohail411.github.io/*`
3. **Usage Limits**: Set a monthly budget cap (e.g., $5-10)
4. **Rate Limiting**: Enable to prevent abuse

### Step 4: Choose Your AI Model

The default model is set to `meta-llama/llama-3.1-8b-instruct:free` (free tier).

**To use a better model** (recommended for production):

1. Open `js/chatbot.js`
2. Find line ~18: `model: 'meta-llama/llama-3.1-8b-instruct:free',`
3. Change to one of these options:
   ```javascript
   // Option 1: GPT-3.5-turbo (best quality, ~$0.001 per message)
   model: 'openai/gpt-3.5-turbo',
   
   // Option 2: Claude Haiku (good balance, ~$0.0008 per message)
   model: 'anthropic/claude-3-haiku',
   
   // Option 3: Llama 3.1 70B (better free option)
   model: 'meta-llama/llama-3.1-70b-instruct:free',
   ```

## Testing

1. Open your portfolio in a browser: `index.html`
2. You should see a blue chat bubble in the bottom-right corner
3. Click the bubble to open the chatbot
4. Try the suggested questions or ask your own
5. Verify the AI responds with information about your experience

## Customization

### Change Colors

Edit `css/chatbot.css` at the top to change the color scheme:

```css
:root {
  --chatbot-primary: #1e3a8a;      /* Dark blue */
  --chatbot-secondary: #3b82f6;    /* Light blue */
  --chatbot-bg: #ffffff;           /* Background */
  --chatbot-text: #1f2937;         /* Text color */
}
```

### Modify Suggested Questions

Edit `js/chatbot.js` around line ~108 to change the suggested questions:

```javascript
const SUGGESTED_QUESTIONS = [
  "What's your experience with AI and LLMs?",
  "Tell me about your cybersecurity projects",
  "What technologies do you work with?",
  "What's your most impressive project?"
];
```

### Update Professional Information

The chatbot's knowledge is in the `SYSTEM_PROMPT` variable in `js/chatbot.js` (starting around line ~30). Update this if you:
- Add new projects
- Change contact information
- Update your experience
- Gain new certifications

## Files Modified/Created

- ✅ `css/chatbot.css` - New chatbot styles
- ✅ `js/chatbot.js` - New chatbot functionality
- ✅ `index.html` - Added chatbot HTML structure and linked assets

## Troubleshooting

### Chatbot shows "API Key Required" message
- You need to add your OpenRouter API key in `js/chatbot.js`

### Chatbot doesn't respond
- Check browser console for errors (F12)
- Verify your API key is correct
- Ensure you have credits in your OpenRouter account
- Check that referrer restrictions match your domain

### Chat bubble not appearing
- Clear browser cache
- Check that all files are linked correctly in `index.html`
- Verify `chatbot.css` and `chatbot.js` are loading (check Network tab in DevTools)

## Cost Estimation

Using the free tier model: **$0 per month**

Using `gpt-3.5-turbo`:
- Average message: ~200 tokens (input) + ~300 tokens (output) = 500 tokens
- Cost per message: ~$0.001
- 100 chats/month: ~$0.10
- 1,000 chats/month: ~$1.00

The chatbot is very cost-effective, even with paid models!

## Privacy & Security Notes

⚠️ **Important**: Since this is a client-side implementation, your API key will be visible in the source code. To mitigate this:

1. ✅ Use OpenRouter's HTTP referrer restrictions
2. ✅ Set usage limits and budgets
3. ✅ Monitor usage regularly
4. ✅ Rotate your API key periodically

For production with sensitive use cases, consider:
- Using a backend proxy (Vercel/Netlify Functions)
- Implementing user authentication
- Adding conversation logging to a database

## Support

If you need help or want to enhance the chatbot:
- OpenRouter Docs: https://openrouter.ai/docs
- OpenRouter Discord: https://discord.gg/openrouter

---

**Made with vanilla JavaScript - no frameworks required!** 🚀

