# Plan: "Ask Me Something" LLM Feature

## Overview
Add an interactive "Ask Me" feature to the portfolio where visitors can ask questions about Ricardo, and an LLM (responding as Ricardo in first person) answers based on website content.

## Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────┐
│  React Frontend │────▶│ Cloudflare Worker│────▶│ Gemini API  │
│  (GitHub Pages) │◀────│   (API Proxy)    │◀────│   (Free)    │
└─────────────────┘     └──────────────────┘     └─────────────┘
```

**Stack chosen:**
- **Cloudflare Workers** - Free tier (100k requests/day), hides API key
- **Google Gemini API** - Free tier (15 RPM, 1M tokens/day)
- **First person responses** - LLM responds as Ricardo ("I worked at...")

---

## Implementation Steps

### Step 1: Create Cloudflare Worker (Backend)

Create `worker/` directory with:

**`worker/wrangler.toml`** - Cloudflare config
```toml
name = "askme-api"
main = "src/index.js"
compatibility_date = "2024-01-01"

[vars]
ALLOWED_ORIGIN = "https://www.itsjrsa.com"
```

**`worker/src/index.js`** - Worker logic
- Accept POST with `{ question: string }`
- Build prompt with portfolio context + system prompt for first-person Ricardo persona
- Call Gemini API
- Return response with CORS headers

**`worker/src/context.js`** - Portfolio content as string
- Profile info, experience, tech stack, publications compiled into ~3k tokens

### Step 2: Deploy Worker
1. Create Cloudflare account (if needed)
2. Install wrangler: `npm install -g wrangler`
3. Login: `wrangler login`
4. Add Gemini API key as secret: `wrangler secret put GEMINI_API_KEY`
5. Deploy: `wrangler deploy`

### Step 3: Frontend - AskMe Component

**Files to create:**
- `src/components/common/AskMe.jsx`
- `src/components/common/AskMe.module.css`

**UI Design:**
- Small clickable text "ask me something" positioned near (above/beside) the theme toggle
- Click opens a modal/overlay with:
  - Text input for question
  - Submit button
  - Response area (with typing animation)
  - Close button
- Loading state while waiting for response
- Error handling for rate limits

### Step 4: Integrate in App.jsx

**Modify:** `src/App.jsx`
- Import AskMe component
- Render alongside ThemeToggle at bottom of page

**Current structure:**
```jsx
<>
  <AnimatePresence>...</AnimatePresence>
  <ThemeToggle />
</>
```

**New structure:**
```jsx
<>
  <AnimatePresence>...</AnimatePresence>
  <div className={styles.bottomControls}>
    <AskMe />
    <ThemeToggle />
  </div>
</>
```

---

## Files to Modify/Create

| File | Action |
|------|--------|
| `worker/wrangler.toml` | Create |
| `worker/src/index.js` | Create |
| `worker/src/context.js` | Create |
| `worker/package.json` | Create |
| `src/components/common/AskMe.jsx` | Create |
| `src/components/common/AskMe.module.css` | Create |
| `src/App.jsx` | Modify - add AskMe component |
| `src/App.module.css` | Create - bottom controls styling |

---

## System Prompt for Gemini

```
You are Ricardo Andrade, an R&D Engineer at INESC TEC in Portugal.
Respond to questions in first person based only on the provided context.
Keep responses concise and friendly. If asked something not in the context,
politely say you'd rather not discuss that or redirect to your public profiles.

Context:
[portfolio content here]
```

---

## Status

### Completed
- [x] Cloudflare Worker backend (`worker/`)
- [x] AskMe React component and styles
- [x] Integration into App.jsx

### Next Steps - Deployment

1. **Get a Gemini API key** (free):
   - Go to https://aistudio.google.com/apikey
   - Create an API key

2. **Deploy the Cloudflare Worker:**
   ```bash
   cd worker
   npm install
   wrangler login
   wrangler secret put GEMINI_API_KEY   # Paste your Gemini API key when prompted
   wrangler deploy
   ```

3. **Update the API URL** in `src/components/common/AskMe.jsx` (line 4):
   - After deployment, wrangler will show your worker URL
   - Replace `https://askme-api.YOUR_SUBDOMAIN.workers.dev` with your actual URL

### TODO - Visual Improvements
- [ ] Improve styling of "ask me something" trigger text
- [ ] Better positioning/spacing relative to theme toggle
- [ ] Consider adding an icon or different visual treatment
- [ ] Modal animations
- [ ] Typing animation for responses
