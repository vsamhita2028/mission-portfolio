# Samhita Vetcha — Software Engineer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcases skills, projects, and experience with interactive UI and smooth animations.

## Features
- Responsive design for mobile, tablet, and desktop
- Animated landing section with Lottie
- Tech stack carousel (Swiper.js)
- About, Work, and Footer sections
- Downloadable resume
- Deployed via GitHub Pages

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment (GitHub Pages)
1. Set the `homepage` field in `package.json`:
   ```json
   "homepage": "https://vsamhita2028.github.io/mission-portfolio/"
   ```
2. Set the base path in `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/mission-portfolio/',
     // ...other config
   })
   ```
3. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
5. Deploy:
   ```bash
   npm run deploy
   ```
6. In your GitHub repo settings, set Pages source to the `gh-pages` branch.

## Folder Structure
```
mission-portfolio/
├── public/
│   ├── logo.png
│   └── Samhita_Resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License
MIT

---
Feel free to fork, customize, and share!
