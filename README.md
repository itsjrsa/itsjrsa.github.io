# itsjrsa.com

Personal portfolio website built with React and Vite, deployed on GitHub Pages.

## Tech Stack

- **Frontend**: React 18, React Router DOM, Framer Motion
- **Styling**: CSS Modules with CSS custom properties (light/dark theme)
- **Build**: Vite
- **Hosting**: GitHub Pages
- **Backend**: Cloudflare Workers (for Ask Me feature)

## Development

```bash
npm install       # Install dependencies
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Build for production
npm run preview   # Preview production build
```

## Deployment

Pushes to `master` automatically deploy to GitHub Pages via GitHub Actions.

## Project Structure

```
src/
  components/     # React components organized by feature
  pages/          # Route pages
  hooks/          # Custom React hooks
  data/           # Static data files
worker/           # Cloudflare Worker for Ask Me API
```

---

## Ask Me API (Cloudflare Worker)

The "Ask Me Anything" feature uses a Cloudflare Worker to proxy requests to Google's Gemini API, answering questions about my background and work.

### Setup

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Navigate to worker directory:
   ```bash
   cd worker
   npm install
   ```

3. Set up Gemini API key as a secret:
   ```bash
   npx wrangler secret put GEMINI_API_KEY
   ```

4. Deploy:
   ```bash
   npx wrangler deploy
   ```

### Local Development

```bash
cd worker
npm run dev    # Starts local worker at http://localhost:8787
```

### Configuration

- `worker/wrangler.toml` - Worker configuration
- `worker/src/context.js` - Portfolio content used as LLM context
- `worker/src/index.js` - Main worker logic with rate limiting and security
