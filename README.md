# Ricardo's Personal Website

**[www.itsjrsa.com](https://www.itsjrsa.com)**

Personal portfolio website built with React and Vite, deployed on GitHub Pages.

## Features

- Light/dark theme with persistent preference
- AI-powered "Ask Me Anything" chatbot
- Project showcase with software descriptions and source links
- Monochrome GitHub contribution calendar
- Software development experience
- Responsive design

## Tech Stack

- **Frontend**: React 18, React Router DOM, Framer Motion
- **Styling**: CSS Modules with CSS custom properties (light/dark theme)
- **Build**: Vite
- **Hosting**: GitHub Pages
- **Backend**: Cloudflare Workers (for Ask Me feature)

## Development

Use Node.js 22 or newer (also required by the Worker's Wrangler tooling).

```bash
npm install       # Install dependencies
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Build for production
npm run check     # Validate built routes, metadata, and local assets
npm run preview   # Preview production build
```

## Deployment

Pushes to `master` automatically deploy to GitHub Pages via GitHub Actions.

The build prerenders each route to its own HTML directory, including page-specific
metadata, and generates `sitemap.xml`, `robots.txt`, legacy redirects, and a real
404 page. React hydrates those pages for interactive features. Public page URLs
use a trailing slash; GitHub Pages redirects the slashless version automatically.
The deployment workflow validates the output before publishing it.

SEO titles and descriptions live in `src/data/seo.js`. To regenerate the touch
icons, social preview, and optimized portraits, run
`node scripts/generate-site-assets.mjs`. The favicon keeps the existing code-mark
identity, with an SVG version and 192/512px app icons.

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

### How it works


**Technologies:**
- **Frontend**: React component with state management for question/answer flow
- **API**: Cloudflare Worker (edge deployment, ~50ms latency)
- **LLM**: Google Gemini API with custom system prompt containing portfolio context (other LLMs can be swapped in)
- **Security**: Rate limiting, input validation, CORS handling

**Flow:**
1. User clicks the "?" button (or "ask me anything" on desktop homepage)
2. An input form appears with rotating example questions
3. User types a question or clicks a suggested example
4. The frontend sends a POST request to the Cloudflare Worker
5. The Worker validates the request, applies rate limiting, and forwards to Gemini with portfolio context
6. The answer is displayed to the user with an option to ask another question

### Setup

1. Install [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/):
   ```bash
   npm install -g wrangler
   ```

2. Navigate to the `worker` directory:
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
