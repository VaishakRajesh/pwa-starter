#!/usr/bin/env node

import fs from "fs";
import path from "path";

const projectDir = process.cwd();

console.log("✨ Setting up your HTML/CSS PWA project...\n");

// ─────────────────────────────────────────────
// Step 1: Create index.html
// ─────────────────────────────────────────────
const indexPath = path.join(projectDir, "index.html");
if (!fs.existsSync(indexPath)) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A Progressive Web App built with pwa-starter">
  <meta name="theme-color" content="#6C63FF">
  <title>My PWA App</title>
  <link rel="stylesheet" href="style.css">
  <link rel="manifest" href="manifest.json">
  <link rel="apple-touch-icon" href="icon-192.png">
</head>
<body>

  <div class="container">
    <div class="hero">
      <h1>🚀 My PWA App</h1>
      <p class="tagline">Your Progressive Web App is ready!</p>
    </div>

    <div class="card">
      <h2>✅ PWA Features Active</h2>
      <ul>
        <li>📦 Offline support via Service Worker</li>
        <li>📱 Installable on any device</li>
        <li>⚡ Fast & lightweight</li>
      </ul>
    </div>

    <!-- Install Button — appears when the browser supports PWA install -->
    <button id="installBtn" class="install-btn" style="display: none;">
      📲 Install App
    </button>

    <p class="hint" id="installHint" style="display: none;">
      Click the button above to install this app on your device!
    </p>

    <footer>
      <p>Built with <a href="https://www.npmjs.com/package/pwa-starter" target="_blank">pwa-starter</a></p>
    </footer>
  </div>

  <script>
    // ── Service Worker Registration ──
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
        .then(() => console.log('✅ Service Worker registered'))
        .catch(err => console.error('Service Worker error:', err));
    }

    // ── PWA Install Prompt ──
    let deferredPrompt;
    const installBtn = document.getElementById('installBtn');
    const installHint = document.getElementById('installHint');

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installBtn.style.display = 'inline-block';
      installHint.style.display = 'block';
    });

    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(outcome === 'accepted' ? '🎉 App installed!' : '❌ Install dismissed');
      deferredPrompt = null;
      installBtn.style.display = 'none';
      installHint.style.display = 'none';
    });

    window.addEventListener('appinstalled', () => {
      console.log('🎉 PWA was installed');
      installBtn.style.display = 'none';
      installHint.style.display = 'none';
    });
  </script>

</body>
</html>`;
    fs.writeFileSync(indexPath, htmlContent, "utf-8");
    console.log("  ✅ index.html created (with install button & SW registration)");
} else {
    console.log("  ℹ️  index.html already exists — skipped");
}

// ─────────────────────────────────────────────
// Step 2: Create style.css
// ─────────────────────────────────────────────
const cssPath = path.join(projectDir, "style.css");
if (!fs.existsSync(cssPath)) {
    const cssContent = `/* ── PWA Starter — Default Theme ── */
:root {
  --primary: #6C63FF;
  --primary-dark: #5A52D5;
  --bg: #0f0f1a;
  --surface: #1a1a2e;
  --text: #e0e0e0;
  --text-muted: #888;
  --radius: 12px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 480px;
  width: 90%;
  text-align: center;
  padding: 2rem 0;
}

.hero h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--primary), #ff6584);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.card {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
  border: 1px solid rgba(255,255,255,0.05);
}

.card h2 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--primary);
}

.card ul {
  list-style: none;
}

.card li {
  padding: 0.4rem 0;
  font-size: 0.95rem;
}

/* ── Install Button ── */
.install-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  border: none;
  padding: 14px 36px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(108, 99, 255, 0.4);
}

.install-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 28px rgba(108, 99, 255, 0.6);
}

.install-btn:active {
  transform: translateY(0);
}

.hint {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-top: 0.75rem;
}

footer {
  margin-top: 3rem;
  color: var(--text-muted);
  font-size: 0.8rem;
}

footer a {
  color: var(--primary);
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}`;
    fs.writeFileSync(cssPath, cssContent, "utf-8");
    console.log("  ✅ style.css created (dark theme with CSS variables)");
} else {
    console.log("  ℹ️  style.css already exists — skipped");
}

// ─────────────────────────────────────────────
// Step 3: Create manifest.json
// ─────────────────────────────────────────────
const manifestPath = path.join(projectDir, "manifest.json");
if (!fs.existsSync(manifestPath)) {
    const manifest = {
        name: "My PWA App",
        short_name: "PWA",
        description: "A Progressive Web App built with pwa-starter",
        start_url: "./index.html",
        display: "standalone",
        background_color: "#0f0f1a",
        theme_color: "#6C63FF",
        icons: [
            {
                src: "icon-192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "icon-512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ]
    };
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");
    console.log("  ✅ manifest.json created");
} else {
    console.log("  ℹ️  manifest.json already exists — skipped");
}

// ─────────────────────────────────────────────
// Step 4: Create service-worker.js
// ─────────────────────────────────────────────
const swPath = path.join(projectDir, "service-worker.js");
if (!fs.existsSync(swPath)) {
    const swContent = `const CACHE_NAME = 'pwa-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './manifest.json'
];

// Install — cache core assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fallback to network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});`;
    fs.writeFileSync(swPath, swContent, "utf-8");
    console.log("  ✅ service-worker.js created (with cache versioning)");
} else {
    console.log("  ℹ️  service-worker.js already exists — skipped");
}

// ─────────────────────────────────────────────
// Done!
// ─────────────────────────────────────────────
console.log(`
🎉 Your PWA project is ready!

📁 Files created:
   index.html ......... App with install button
   style.css .......... Dark theme styling
   manifest.json ...... PWA configuration
   service-worker.js .. Offline caching

📌 Next steps:
   1. Add your icons: icon-192.png & icon-512.png
   2. Serve locally:  npx serve
   3. Open in browser and test the install button!
`);