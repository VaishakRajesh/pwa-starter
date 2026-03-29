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

## Publishing to npm

Share your tool with the world so anyone can use `npx pwa-starter`!

### Step 1: Create an npm account

Go to [npmjs.com/signup](https://www.npmjs.com/signup) and create a free account.

### Step 2: Login from terminal

```bash
npm login
```

Enter your username, password, and email when prompted.

### Step 3: Make sure `package.json` is ready

Your `package.json` must have:
- A **unique** `name` (check on [npmjs.com](https://www.npmjs.com/) if the name is taken)
- A `version` (e.g., `"1.0.0"`)
- A `bin` field pointing to your CLI script

```json
{
  "name": "your-unique-package-name",
  "version": "1.0.0",
  "bin": {
    "pwa-starter": "./index.js"
  }
}
```

### Step 4: Publish!

```bash
npm publish
```

> **First time?** If the name is taken, change the `name` in `package.json` or use a scoped package: `@yourusername/pwa-starter`.

### Step 5: Update (for future versions)

1. Bump the version: `npm version patch` (or `minor` / `major`)
2. Publish again: `npm publish`

---

## Pushing to GitHub

### Step 1: Create a repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Enter a repository name (e.g., `pwa-starter`)
3. Keep it **public** (required if you want npm to link to it)
4. **Don't** add a README (you already have one!)
5. Click **Create repository**

### Step 2: Initialize git and push

```bash
git init
git add .
git commit -m "Initial commit — pwa-starter v1.2.0"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pwa-starter.git
git push -u origin main
```

> **Replace** `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Update `package.json` URLs

After creating the repo, update these fields in `package.json` with your actual GitHub URL:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/pwa-starter.git"
  },
  "homepage": "https://github.com/YOUR_USERNAME/pwa-starter#readme",
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/pwa-starter/issues"
  }
}
```

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

## FAQ

**Q: The install button doesn't show up?**  
A: Make sure you're serving over HTTPS or localhost, and that `icon-192.png` and `icon-512.png` exist. Some browsers also require you to interact with the page first.

**Q: Can I customize the generated files?**  
A: Yes! The generated files are plain HTML/CSS/JS — edit them however you want after scaffolding.

**Q: Does this work with frameworks like React or Vue?**  
A: This tool is designed for **vanilla HTML/CSS** projects. For framework-based PWAs, use their built-in PWA plugins.

---

## License

MIT © VR
