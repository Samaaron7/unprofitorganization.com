# ShareAPairUSA (React + Vite)

This is your ready-to-run project with the enhanced Home page, carousel, hover effects, and page sections wired up.

## Quick Start (macOS + VS Code)

1) **Install Node.js**  
If you have Homebrew:
```bash
brew install node
```
(or use nvm if you prefer)

2) **Install dependencies**
```bash
npm install
```

3) **Run the dev server**
```bash
npm run dev
```
Vite will print a **local URL** (usually http://localhost:5173). Open it in your browser.

4) **Edit content**
- Replace carousel URLs in `src/App.jsx` (`images={[ ... ]}`).
- Update copy in the Feature cards, Testimonial, and Gallery grid.
- Everything is plain React + Tailwind classes (via CDN) for maximum simplicity.

## Notes
- Tailwind is included via **CDN** for a zero-config start. If you want a full Tailwind build pipeline later, I can add `tailwind.config.js`, PostCSS, and `@tailwind` directives.
- `lucide-react` provides the icons.

## Build for production
```bash
npm run build
npm run preview
```

Enjoy!
