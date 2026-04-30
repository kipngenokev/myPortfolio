# Kipngeno Kevin — Portfolio

The personal site of [Kipngeno Kevin](https://github.com/kipngenokev) — a software engineer based in Kenya, building full-stack web products and the AI features that live inside them.

**Live:** <https://warm-faun-090a02.netlify.app/>

Featured work includes a SaaS field-monitoring platform, a rugby matchday hub, two legal-sector products (a law-firm site and an AI paralegal copilot), and an e-commerce store for a beauty & health retailer.

## Tech stack

- **Vite** + **React 18** — fast HMR in dev, hashed bundles in prod.
- **Plain CSS** — one stylesheet (`src/styles/global.css`), custom properties for theming. No Tailwind, no CSS-in-JS, no UI libraries.
- **Netlify** — static hosting with `immutable` cache headers on hashed assets.

The whole bundle ships in **~58 KB gzipped** (HTML + CSS + JS). All five project screenshots together weigh **~560 KB**. First Contentful Paint comes in well under 1s on a normal connection; LCP under 2s.

## Quickstart

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build → ./dist
npm run preview      # serve the production build locally on :4173
```

Requires Node 20+.

## Project structure

```
.
├── index.html               # Vite entry, SEO meta, font preconnect
├── netlify.toml             # Build command + cache headers
├── public/
│   └── projects/            # Project screenshots (1600px JPGs)
├── src/
│   ├── App.jsx              # Section composition
│   ├── main.jsx             # React mount
│   ├── components/          # Section components + primitives
│   ├── data/
│   │   └── site.js          # All content lives here
│   ├── hooks/               # useScrolled, useActiveSection, …
│   └── styles/
│       └── global.css       # Single stylesheet, design tokens at top
└── vite.config.js
```

## Editing content

All copy, projects, nav items, social links, and skill data live in `src/data/site.js`. Most edits don't need to touch a component file.

### Add a new project

Append (or insert) into the `projects` array in `src/data/site.js`:

```js
{
  id: 'slug',
  index: '06',
  name: 'Project Name',
  label: 'Short Label',
  category: 'SaaS',
  thumb: 'thumb-6',                    // fallback gradient
  image: '/projects/slug.jpg',         // 1600px JPG q85 in public/projects/
  imageAlt: 'What is in the screenshot.',
  description: 'Short paragraph about what it is and what you built.',
  tags: ['SaaS', 'Dashboard'],
  href: 'https://live-site.example/',  // external → auto-renders "Live ↗" chip
  feature: true,
}
```

### Re-skin the site

Open `src/styles/global.css` and edit the `:root` custom properties at the top — `--bg`, `--accent`, `--text-muted`, font families, radii, easing. The whole site re-themes from those tokens.

### Update contact details

`site.email`, `site.phone`, and the `socials` array — all in `src/data/site.js`. The header phone pill, contact section, hero icons, and mobile menu footer all read from these.

## Optimizing a new screenshot

Project images should be **1600px max width, JPG q85, progressive**:

```bash
python3 -c "
from PIL import Image
img = Image.open('input.png').convert('RGB')
img.thumbnail((1600, 1600), Image.LANCZOS)
img.save('public/projects/<slug>.jpg', 'JPEG', quality=85, optimize=True, progressive=True)
"
```

This typically drops a 2880×1800 PNG screenshot from ~400 KB to ~80 KB with no visible quality loss.

## Deployment

Configured for Netlify via `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- `/assets/*` and `/projects/*` served with `Cache-Control: public, max-age=31536000, immutable`

To deploy:

1. **Drag-and-drop** — run `npm run build`, then drag the `dist/` folder into <https://app.netlify.com/drop>.
2. **Git-connected** — push to GitHub and link the repo in the Netlify dashboard. `netlify.toml` configures the build automatically.
3. **CLI** — `npx netlify-cli deploy --prod`.

## Conventions worth knowing

- **Single-page scroll site.** Nav items map to `id`s on `<section>` elements; `useActiveSection` highlights the current one as you scroll. There's no router.
- **`<Reveal as="…">`** wraps any block to fade it in on scroll (IntersectionObserver). No animation library needed.
- **Project link behaviour is auto-detected** — `href` starting with `http(s)://` opens in a new tab and shows a "Live ↗" chip; internal anchors keep the "View case study" CTA.
- **First two project images are eager-loaded with `fetchpriority="high"`**, the rest are lazy. Don't change this without measuring LCP.

## Credits

Designed and built by Kipngeno Kevin. Type set in [Inter](https://rsms.me/inter/) and [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif).
