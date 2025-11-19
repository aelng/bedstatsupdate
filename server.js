import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:5173', // Your Vite dev server
  credentials: true
}));

app.use(express.json());

app.get('/api/bot-stats/:botId', async (req, res) => {
  const { botId } = req.params;
  
  try {
    const response = await axios.get(`https://top.gg/api/bots/${botId}/stats`, {
      headers: {
        'Authorization': process.env.AUTH_TOKEN
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching from Top.gg:', error.message);
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to fetch bot stats',
      message: error.message 
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

