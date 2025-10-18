import axios from 'axios';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { botId } = req.query;

  if (!botId) {
    return res.status(400).json({ error: 'botId is required' });
  }

  try {
    const response = await axios.get(`https://top.gg/api/bots/${botId}`, {
      headers: {
        'Authorization': process.env.AUTH_TOKEN
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching from Top.gg:', error.message);
    res.status(error.response?.status || 500).json({
      error: 'Failed to fetch bot stats',
      message: error.message
    });
  }
}

