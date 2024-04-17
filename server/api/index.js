const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY
const anthropic = new Anthropic({ apiKey });
const app = express()

const allowedOrigins = ["https://aiquill.vercel.app"];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
  },
  methods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
  allowedHeaders: '',
  credentials: true,
  maxAge: 3600
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.status(200).json({ status: 'up and running!' });
})

app.post('/send-prompt', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }
    const response = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1024,
      messages: [
        { "role": "user", "content": prompt }
      ]
    });
    if (response.content && response.content.length > 0) {
      res.json({ response: response.content[0].text });
    } else {
      res.status(400).json({ error: 'Anthropic API did not return any completions' });
    }
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.data);
    } else {
      console.error('Error:', error);
    }
    res.status(500).json({ error: 'Failed to send prompt to Anthropic API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



module.exports = app;
