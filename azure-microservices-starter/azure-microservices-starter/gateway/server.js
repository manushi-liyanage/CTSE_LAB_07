const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Gateway service is running. Try /health or /api/message');
});

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'gateway',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/message', (_req, res) => {
  res.json({
    message: 'Hello from the Azure gateway service!',
    success: true
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Gateway service listening on port ${port}`);
});
