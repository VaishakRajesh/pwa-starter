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
  <meta name="theme-color" content="#000000">
  <title>My PWA App</title>
  <link rel="stylesheet" href="style.css">
  <link rel="manifest" href="manifest.json">
  <link rel="apple-touch-icon" href="icon-192.png">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>

  <div class="app">

    <!-- ── Hero Section ── -->
    <header class="hero">
      <div class="logo">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#111"/>
          <path d="M30 70V30h15c8 0 14 5 14 13s-6 13-14 13H42v14H30z" fill="#fff"/>
          <circle cx="65" cy="60" r="12" stroke="#fff" stroke-width="4" fill="none"/>
          <path d="M65 52v8h8" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h1>My PWA App</h1>
      <p class="tagline">Progressive Web App — Installable, Offline-Ready, Lightning Fast</p>

      <!-- Install Button -->
      <div class="install-section" id="installSection">
        <button id="installBtn" class="install-btn">
          <span class="install-icon">⬇</span> Install App
        </button>
        <p class="install-status" id="installStatus">Checking install availability...</p>
      </div>
    </header>

    <!-- ── What is a PWA? ── -->
    <section class="section">
      <h2>What is a PWA?</h2>
      <p>
        A <strong>Progressive Web App</strong> is a website that behaves like a native app.
        It can be installed on your home screen, works offline, and loads instantly —
        all built with just HTML, CSS, and JavaScript.
      </p>
    </section>

    <!-- ── Features Grid ── -->
    <section class="section">
      <h2>Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">📦</div>
          <h3>Offline Support</h3>
          <p>Service Worker caches your assets so the app works without internet.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>Installable</h3>
          <p>Add to home screen on any device — no app store needed.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Fast & Light</h3>
          <p>Zero dependencies, instant load. Pure HTML, CSS & JS.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Secure</h3>
          <p>Served over HTTPS ensuring data integrity and privacy.</p>
        </div>
      </div>
    </section>

    <!-- ── Getting Started ── -->
    <section class="section">
      <h2>Getting Started</h2>
      <p>This project was scaffolded with <code>pwa-starter</code>. Here's how to serve and test it:</p>

      <div class="code-block">
        <div class="code-header">
          <span class="code-dot"></span>
          <span class="code-dot"></span>
          <span class="code-dot"></span>
          <span class="code-title">Terminal</span>
        </div>
        <pre><code><span class="code-comment"># Serve your PWA locally</span>
<span class="code-cmd">npx</span> serve

<span class="code-comment"># Open in browser</span>
<span class="code-cmd">http://localhost:3000</span>

<span class="code-comment"># For HTTPS (required for install button)</span>
<span class="code-cmd">npx</span> serve --ssl</code></pre>
      </div>

      <div class="info-box">
        <strong>💡 Note:</strong> The install button requires the app to be served over
        <strong>HTTPS</strong> (or <code>localhost</code>). Opening <code>index.html</code>
        directly as a file won't trigger the install prompt.
      </div>
    </section>

    <!-- ── Project Structure ── -->
    <section class="section">
      <h2>Project Structure</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-dot"></span>
          <span class="code-dot"></span>
          <span class="code-dot"></span>
          <span class="code-title">Files</span>
        </div>
        <pre><code><span class="code-folder">📁 your-project/</span>
├── index.html ............. <span class="code-comment">App entry point</span>
├── style.css .............. <span class="code-comment">Black theme styling</span>
├── manifest.json .......... <span class="code-comment">PWA configuration</span>
├── service-worker.js ...... <span class="code-comment">Offline caching</span>
├── icon-192.png ........... <span class="code-comment">App icon (192×192)</span>
└── icon-512.png ........... <span class="code-comment">App icon (512×512)</span></code></pre>
      </div>
    </section>

    <!-- ── Next Steps ── -->
    <section class="section">
      <h2>Next Steps</h2>
      <div class="steps-list">
        <div class="step">
          <span class="step-num">1</span>
          <div>
            <strong>Add your icons</strong>
            <p>Replace <code>icon-192.png</code> and <code>icon-512.png</code> with your own app icons.</p>
          </div>
        </div>
        <div class="step">
          <span class="step-num">2</span>
          <div>
            <strong>Customize this page</strong>
            <p>Edit <code>index.html</code> and <code>style.css</code> to build your app.</p>
          </div>
        </div>
        <div class="step">
          <span class="step-num">3</span>
          <div>
            <strong>Deploy</strong>
            <p>Host on <strong>GitHub Pages</strong>, <strong>Netlify</strong>, or <strong>Vercel</strong> for free HTTPS.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Footer ── -->
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
    let deferredPrompt = null;
    const installBtn = document.getElementById('installBtn');
    const installStatus = document.getElementById('installStatus');
    const installSection = document.getElementById('installSection');

    // Show the button by default — update status based on environment
    function updateInstallUI() {
      const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
      const isHTTPS = location.protocol === 'https:';
      const isFile = location.protocol === 'file:';

      if (isFile) {
        installBtn.style.display = 'none';
        installStatus.textContent = '⚠ Serve this app with "npx serve" to enable installation';
        installStatus.style.display = 'block';
      } else if (!isHTTPS && !isLocalhost) {
        installBtn.style.display = 'none';
        installStatus.textContent = '⚠ HTTPS is required for PWA installation';
        installStatus.style.display = 'block';
      } else {
        // Conditions might be met, wait for the prompt event
        installBtn.style.display = 'none';
        installStatus.textContent = 'Checking install availability...';
        installStatus.style.display = 'block';

        // If prompt doesn't fire within 3 seconds, show manual install hint
        setTimeout(() => {
          if (!deferredPrompt) {
            // Check if already installed
            if (window.matchMedia('(display-mode: standalone)').matches) {
              installBtn.style.display = 'none';
              installStatus.textContent = '✅ App is already installed!';
            } else {
              installBtn.style.display = 'none';
              installStatus.textContent = '💡 Use your browser menu → "Install App" or "Add to Home Screen"';
            }
          }
        }, 3000);
      }
    }

    updateInstallUI();

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installBtn.style.display = 'inline-flex';
      installStatus.textContent = 'Click the button to install this app on your device';
    });

    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(outcome === 'accepted' ? '🎉 App installed!' : '❌ Install dismissed');
      deferredPrompt = null;
      installBtn.style.display = 'none';
      installStatus.textContent = '✅ App installed successfully!';
    });

    window.addEventListener('appinstalled', () => {
      console.log('🎉 PWA was installed');
      installBtn.style.display = 'none';
      installStatus.textContent = '✅ App is installed!';
    });
  </script>

</body>
</html>`;
    fs.writeFileSync(indexPath, htmlContent, "utf-8");
    console.log("  ✅ index.html created (Vite-style page with install button & SW registration)");
} else {
    console.log("  ℹ️  index.html already exists — skipped");
}

// ─────────────────────────────────────────────
// Step 2: Create style.css
// ─────────────────────────────────────────────
const cssPath = path.join(projectDir, "style.css");
if (!fs.existsSync(cssPath)) {
    const cssContent = `/* ── PWA Starter — Black Theme ── */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

:root {
  --primary: #ffffff;
  --primary-dim: #999999;
  --bg: #000000;
  --surface: #0a0a0a;
  --surface-border: #1a1a1a;
  --surface-hover: #111111;
  --text: #ededed;
  --text-muted: #666666;
  --text-dim: #444444;
  --radius: 12px;
  --radius-sm: 8px;
  --font: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', 'Consolas', monospace;
  --transition: 0.2s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

.app {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

/* ── Hero ── */
.hero {
  text-align: center;
  padding: 5rem 0 3rem;
  border-bottom: 1px solid var(--surface-border);
  margin-bottom: 3rem;
}

.logo {
  margin-bottom: 1.5rem;
  animation: fadeIn 0.6s ease;
}

.logo svg {
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.08));
  transition: transform var(--transition);
}

.logo svg:hover {
  transform: scale(1.05);
}

.hero h1 {
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--primary);
  margin-bottom: 0.5rem;
  animation: fadeIn 0.6s ease 0.1s both;
}

.tagline {
  color: var(--text-muted);
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 2rem;
  animation: fadeIn 0.6s ease 0.2s both;
}

/* ── Install Section ── */
.install-section {
  animation: fadeIn 0.6s ease 0.3s both;
}

.install-btn {
  background: var(--primary);
  color: #000;
  border: none;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font);
  border-radius: 50px;
  cursor: pointer;
  transition: all var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.01em;
}

.install-btn:hover {
  background: #e0e0e0;
  transform: translateY(-1px);
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.1);
}

.install-btn:active {
  transform: translateY(0);
}

.install-icon {
  font-size: 1.1rem;
}

.install-status {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-top: 0.75rem;
}

/* ── Sections ── */
.section {
  margin-bottom: 3rem;
  animation: fadeIn 0.5s ease both;
}

.section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: var(--primary);
}

.section p {
  color: var(--text-muted);
  line-height: 1.8;
}

.section p strong {
  color: var(--text);
}

.section p code {
  background: var(--surface);
  border: 1px solid var(--surface-border);
  padding: 2px 7px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.85em;
  color: var(--text);
}

/* ── Features Grid ── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.feature-card {
  background: var(--surface);
  border: 1px solid var(--surface-border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: all var(--transition);
}

.feature-card:hover {
  border-color: #333;
  background: var(--surface-hover);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.feature-card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: var(--text);
}

.feature-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* ── Code Blocks ── */
.code-block {
  background: var(--surface);
  border: 1px solid var(--surface-border);
  border-radius: var(--radius);
  overflow: hidden;
  margin: 1rem 0;
}

.code-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--surface-border);
}

.code-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--surface-border);
}

.code-title {
  margin-left: 8px;
  font-size: 0.8rem;
  color: var(--text-dim);
  font-family: var(--font-mono);
}

.code-block pre {
  padding: 1.25rem;
  overflow-x: auto;
}

.code-block code {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.code-comment {
  color: var(--text-dim);
}

.code-cmd {
  color: var(--text);
}

.code-folder {
  color: var(--text);
  font-weight: 500;
}

/* ── Info Box ── */
.info-box {
  background: var(--surface);
  border: 1px solid var(--surface-border);
  border-left: 3px solid #555;
  border-radius: var(--radius-sm);
  padding: 1rem 1.25rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.info-box strong {
  color: var(--text);
}

.info-box code {
  background: rgba(255, 255, 255, 0.05);
  padding: 1px 5px;
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 0.85em;
}

/* ── Steps List ── */
.steps-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--surface);
  border: 1px solid var(--surface-border);
  border-radius: var(--radius);
  transition: all var(--transition);
}

.step:hover {
  border-color: #333;
  background: var(--surface-hover);
}

.step-num {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary);
  color: #000;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.step strong {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--text);
  font-size: 0.95rem;
}

.step p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.step code {
  background: rgba(255, 255, 255, 0.05);
  padding: 1px 5px;
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 0.85em;
  color: var(--text);
}

/* ── Footer ── */
footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--surface-border);
  text-align: center;
  color: var(--text-dim);
  font-size: 0.8rem;
}

footer a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition);
}

footer a:hover {
  color: var(--text);
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .hero {
    padding: 3rem 0 2rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Animations ── */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`;
    fs.writeFileSync(cssPath, cssContent, "utf-8");
    console.log("  ✅ style.css created (pure black theme)");
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
        background_color: "#000000",
        theme_color: "#000000",
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
   index.html ......... Vite-style landing page with install button
   style.css .......... Pure black theme styling
   manifest.json ...... PWA configuration
   service-worker.js .. Offline caching

📌 Next steps:
   1. Add your icons: icon-192.png & icon-512.png
   2. Serve locally:  npx serve
   3. Open in browser and test the install button!
`);