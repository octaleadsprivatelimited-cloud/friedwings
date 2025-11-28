import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';

const port = 3004;

const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_CACHE_TTL = 5 * 60 * 1000;
let instagramCache = { timestamp: 0, payload: null };

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain'
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
}

function fetchInstagramFeed() {
  return new Promise((resolve, reject) => {
    const endpoint = new URL(`https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_url,permalink,timestamp,media_type,thumbnail_url&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=6`);

    https
      .get(endpoint, (apiRes) => {
        let data = '';
        apiRes.on('data', (chunk) => (data += chunk));
        apiRes.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed);
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', reject);
  });
}

async function handleInstagramFeed(res) {
  if (!INSTAGRAM_USER_ID || !INSTAGRAM_ACCESS_TOKEN) {
    sendJson(res, 500, { error: 'Instagram credentials are not configured' });
    return;
  }

  const isCacheFresh = instagramCache.payload && Date.now() - instagramCache.timestamp < INSTAGRAM_CACHE_TTL;
  if (isCacheFresh) {
    sendJson(res, 200, instagramCache.payload);
    return;
  }

  try {
    const feed = await fetchInstagramFeed();
    instagramCache = { payload: feed, timestamp: Date.now() };
    sendJson(res, 200, feed);
  } catch (error) {
    console.error('Instagram fetch failed:', error);
    sendJson(res, 502, { error: 'Unable to load Instagram feed' });
  }
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  console.log(`${req.method} ${pathname}`);

  if (pathname === '/api/instagram-feed') {
    handleInstagramFeed(res);
    return;
  }

  let filePath = '.' + pathname;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`, 'utf-8');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log('Press Ctrl+C to stop the server');
});

