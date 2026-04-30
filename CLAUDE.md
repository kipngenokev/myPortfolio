# CLAUDE.md

Guidance for working in this codebase. Read this before making changes.

## Project type

Single-page React portfolio (Vite + React 18). Dark, type-led, scroll-anchor navigation. No router, no SSR, no test suite.

## The two files you'll edit most

- `src/data/site.js` — **all** copy, project list, nav items, social links, skill data. Edit here, not in components.
- `src/styles/global.css` — **the** stylesheet. Re-skin by editing the `:root` custom properties (`--bg`, `--accent`, `--text`, `--font-sans`, etc.).

If your change is content (a new project, a tagline tweak, a link), it almost certainly lives in `site.js`.

## Architecture conventions

- **Section pattern.** Each top-level section is `<section className="X section" id="X">` with `id` matching an entry in the `nav` array. `useActiveSection` highlights the current link as you scroll. Adding a new section: append to `App.jsx`, add a nav item to `site.js`, give the `<section>` an `id`.
- **Reveal animation.** Wrap any block in `<Reveal as="...">` to fade it in on scroll (IntersectionObserver under the hood). Don't reach for libraries; the existing primitive covers it.
- **Component-level state is local.** No Redux / Zustand / Context. Hooks live in `src/hooks/` (`useScrolled`, `useActiveSection`, `useBodyLock`, `useCopyToClipboard`, `useReveal`).
- **Icons** are inline SVG paths in `src/components/Icon.jsx`. Add a new icon by appending to the `ICONS` map, then `<Icon name="..." />`.

## Adding a project

In `src/data/site.js`, append (or insert) into the `projects` array:

```js
{
  id: 'slug',
  index: '06',                       // displayed in the thumb corner
  name: 'Project Name',
  label: 'Short Label',              // shown when no image is set
  category: 'AgriTech SaaS',         // the only chip; no year field
  thumb: 'thumb-6',                  // fallback gradient, see global.css
  image: '/projects/slug.jpg',       // optional; if present, fills the card
  imageAlt: 'Concrete description of what's in the screenshot.',
  description: 'One short paragraph...',
  tags: ['SaaS', 'Dashboard'],
  href: 'https://live-site.example/',// http(s) → opens in new tab with Live ↗ chip
  feature: true,
}
```

External vs internal links are auto-detected by `^https?://`. External cards get the "Live ↗" chip and the "Visit live site" CTA; internal anchors keep "View case study".

## Image rules (perf-critical)

- Project screenshots: **1600px max width, JPG q85, progressive**. Save in `public/projects/`. Don't ship PNGs of UI screenshots — they're 4–5× heavier for no visual benefit.
- Always set `width` / `height` attrs on `<img>` (already done in `Work.jsx`) so layout doesn't shift while loading.
- First two project cards eager + `fetchpriority="high"`; the rest lazy. This is wired in `Work.jsx` via the `eager` prop and the `i < 2` check; preserve it.

To regenerate one screenshot:
```bash
python3 -c "
from PIL import Image
img = Image.open('source.png').convert('RGB')
img.thumbnail((1600, 1600), Image.LANCZOS)
img.save('public/projects/<slug>.jpg', 'JPEG', quality=85, optimize=True, progressive=True)
"
```

## Responsive

The design relies on `clamp()` for fluid scaling. Breakpoint media queries live near the bottom of `global.css` (search "Responsive hardening"). Don't add new breakpoints unless something genuinely breaks at a width — extend the existing `≤600px` and `≤880px` blocks instead.

## Don't add

- No CSS-in-JS, no Tailwind, no UI libraries. The project is intentionally a single CSS file with custom properties.
- No new state libraries. Hooks + props are enough.
- No comments inside `site.js` data entries — the field names already document themselves and noise piles up fast.

## Deploy

Netlify, configured in `netlify.toml`:
- Build: `npm run build` → publishes `dist/`
- `Cache-Control: immutable` on `/assets/*` and `/projects/*` (Vite hashes JS/CSS filenames; project images change rarely).
- SPA redirect catches any direct route hits.

Live URL: <https://warm-faun-090a02.netlify.app/> (rename in the Netlify dashboard or attach a custom domain to change).
