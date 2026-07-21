import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const DATA_FILE = path.join(__dirname, 'data', 'content.json');
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin', (req, res) => {
  res.redirect('/admin.html');
});

app.get('/admin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/api/content', async (req, res) => {
  try {
    const content = await fs.readFile(DATA_FILE, 'utf-8');
    res.json(JSON.parse(content));
  } catch (error) {
    res.status(500).json({ error: 'Unable to load content.' });
  }
});

app.post('/api/content', async (req, res) => {
  const updatedContent = req.body;
  if (!updatedContent || typeof updatedContent !== 'object') {
    return res.status(400).json({ error: 'Valid JSON content is required.' });
  }

  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(updatedContent, null, 2) + '\n', 'utf-8');
    res.json({ status: 'ok' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to save content.' });
  }
});

export default app;

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Portfolio backend running at http://localhost:${PORT}`);
    console.log('Edit content at http://localhost:' + PORT + '/admin.html');
  });
}

