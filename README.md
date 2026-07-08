# DashBuilder AI

An AI-powered tool for building beautiful, custom HTML dashboards through natural conversation.

## Features

✨ **AI-Powered**: Describe your dashboard and let Groq's LLaMA generate professional HTML  
🎨 **Professional Design**: Built-in premium styling with dark theme and modern UI  
⚡ **Fast**: Generate fully-functional dashboards in seconds  
💾 **No Backend**: Everything runs client-side (your API key stays safe)  
📦 **Export**: Download as standalone HTML file  
🎯 **Interactive**: Generated dashboards include tasks, goals, habits, notes, and more  

## Quick Start

### Prerequisites
- Node.js 14+
- Free Groq API key from [console.groq.com](https://console.groq.com)

### Installation

```bash
git clone https://github.com/sinhara666/dash.git
cd dash
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

### Usage

1. Enter your Groq API key (get free one at [console.groq.com](https://console.groq.com))
2. Describe the dashboard you want to build
3. Let DashBuilder AI generate it for you
4. Click "Export HTML" to download your dashboard

## How It Works

1. **Frontend**: Modern React-free single-page app with real-time chat interface
2. **Backend**: Node.js + Express server that proxies requests to Groq API (solves CORS)
3. **Generation**: Groq's LLaMA 3.3 70B creates professional HTML dashboards
4. **Export**: Download as standalone `.html` file

## Architecture

```
Browser (index.html)
    ↓ (sends message + API key)
Node.js Server (server.js)
    ↓ (proxies request)
Groq API (llama-3.3-70b-versatile)
    ↓ (returns generated HTML)
Browser (displays in preview iframe)
```

## API Key Security

- Your API key is stored in browser `localStorage`
- Never sent to any server except Groq's official API
- Can be changed anytime via the settings button

## Troubleshooting

### "Connection error"
- Verify your Groq API key is valid
- Check internet connection
- Ensure server is running (`npm start`)

### Dashboard looks bad
- Generated dashboards use modern CSS (requires modern browser)
- Try Chrome/Edge/Safari latest versions

### Server won't start
- Check Node.js version: `node --version` (should be 14+)
- Try `npm install` again
- Check if port 3000 is available

## Development

For hot-reload during development:

```bash
npm install -D nodemon
npm run dev
```

## License

MIT
