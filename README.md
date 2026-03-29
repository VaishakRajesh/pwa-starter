# pwa-starter

> Instantly scaffold a **Progressive Web App** with a single command — zero config, zero dependencies.

```bash
npx pwa-starter
```

---

## What is a PWA?

A **Progressive Web App (PWA)** is a website that can be **installed on any device** (phone, tablet, desktop) and works **offline**. It uses a Service Worker to cache files and a Manifest to define how the app looks when installed.

`pwa-starter` generates everything you need to make that happen — including an **Install App button** that your users can click to install your app directly from the browser.

---

## Features

| Feature | Description |
| --- | --- |
| 📄 `index.html` | Complete HTML page with meta tags, install button, and service worker registration |
| 🎨 `style.css` | Modern dark theme with CSS variables and gradient accents |
| 📦 `manifest.json` | PWA manifest with app name, theme color, and icon references |
| ⚙️ `service-worker.js` | Caches your app for offline use with cache versioning |
| 📲 **Install Button** | Built-in "Install App" button using the `beforeinstallprompt` API |

---

## Quick Start

### 1. Create a new folder and run the tool

```bash
mkdir my-app
cd my-app
npx pwa-starter
```

### 2. Add your icons

Create two PNG icon files in the same folder:
- `icon-192.png` — 192×192 pixels
- `icon-512.png` — 512×512 pixels

> **Tip:** Use [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/) to generate icons from text or an image.

### 3. Serve it locally

```bash
npx serve
```

Open the URL shown in your terminal (usually `http://localhost:3000`). 

> **Note:** PWA features (install button, offline mode) only work when served over **HTTPS** or on **localhost**.

---

## Generated File Structure

```
my-app/
├── index.html          ← Main page with install button
├── style.css           ← Dark theme styles
├── manifest.json       ← PWA configuration
├── service-worker.js   ← Offline caching logic
├── icon-192.png        ← (you add this)
└── icon-512.png        ← (you add this)
```

---

## How the Install Button Works

The generated `index.html` includes a **hidden "Install App" button**. Here's how it works:

1. When a browser detects your app meets PWA criteria, it fires a `beforeinstallprompt` event.
2. The JavaScript captures this event and **shows the install button**.
3. When the user clicks the button, it triggers the browser's native install dialog.
4. After installation, the button hides itself.

**PWA install criteria:**
- Served over HTTPS (or localhost)
- Has a valid `manifest.json` with `name`, `icons`, `start_url`, and `display`
- Has a registered Service Worker

---

## Testing Your Published Package

After publishing, test it works for others:

```bash
mkdir test-pwa
cd test-pwa
npx pwa-starter
npx serve
```

Open the browser and verify:
- ✅ Page loads with dark theme
- ✅ Service Worker registers (check DevTools → Application → Service Workers)
- ✅ Install button appears (on supported browsers when served via localhost)

---

## License

MIT © VR
