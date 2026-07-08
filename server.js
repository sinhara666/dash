const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Proxy endpoint for Groq API
app.post('/api/groq', async (req, res) => {
  const { apiKey, messages, maxTokens, model } = req.body;

  if (!apiKey) {
    return res.status(400).json({ error: 'API key required' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model || 'llama-3.3-70b-versatile',
        max_tokens: maxTokens || 2000,
        messages
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Groq API error:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 DashBuilder running at http://localhost:${PORT}`);
  console.log(`📝 Get your free Groq API key at https://console.groq.com\n`);
});