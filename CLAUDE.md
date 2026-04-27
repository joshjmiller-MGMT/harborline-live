# CLAUDE.md — harborlineband.com Rebuild Plan

> **For any Claude (Cowork or Claude Code) starting work in this repo.** Read this fully before doing anything else.

---

## TL;DR

This repo currently serves harborlineband.com via a **static build** (compiled HTML/CSS/JS) recovered after the original Lovable workspace was destroyed. The React source code is **gone** — only the compiled output exists. Your job: **rebuild the React/Vite source from scratch** using the static build as a pixel-perfect visual reference, on a feature branch, without breaking the live site.

Estimated effort: ~12 hours of focused work, split into 4 phases.

---

## Critical Background (read before touching anything)

### What happened
- Original site was built in **Lovable** (lovable.dev) and hosted on a Lovable-managed Netlify project
- On 2026-04-25/26, that project was deleted everywhere — Lovable workspace gone, Netlify project gone
- harborlineband.com 404'd; Josh contacted Netlify to release the domain
- A static snapshot (HTML + minified JS/CSS + ~70 image assets) was recovered from Josh's local machine (`~/Documents/harborline-recovery/`)
- That snapshot was pushed to this repo (`joshjmiller-MGMT/harborline-live`) and deployed to a new Netlify project (`harborline-live`, siteId `439a6d0e-8ad5-4087-82ee-66a81c0fbaa8`) on the `Baltimiller` team (slug `joshjmiller-mgmt`)
- harborlineband.com was attached to the new Netlify project — site is live

### What's in `main` right now
- Pre-built static files (index.html, /assets/index-*.js, /assets/index-*.css, /assets/*.{jpg,png,webp})
- `_redirects` for SPA routing
- `netlify.toml` configured for no-build static deploy

### Why a rebuild
- The minified JS in /assets/ is unreadable; can't change page copy, nav text, components, etc.
- Without source, every future "update bio" or "add a show" request is impossible
- Rebuilding gives Josh a real editable codebase, owned cleanly, no Lovable entanglement

### Identity rules (CRITICAL — do not violate)
- **Josh Miller** (josh@baltimoresound.net) owns this repo. GitHub: `joshjmiller-MGMT`
- **Anything Langstonia / Lang / Langston is Jeffrey Lang, NOT Josh.** Do not edit, reference, or treat any Lang-named asset as Josh's. The repo `Langstonia/harborline` is Jeffrey Lang's, not Josh's.
- **Never use Lovable** for any part of this site. The previous Lovable+human tandem caused the original disaster. Claude is the sole code editor.

---

## Visual Reference: How to See the Good Site Locally

The static recovery build is at `~/Documents/harborline-recovery/`. To preview it (essential for matching the rebuild pixel-perfect):

```bash
cd ~/Documents/harborline-recovery
python3 -m http.server 8765
# Open http://localhost:8765 in browser
```

Use this side-by-side with your dev server while building each component. Match colors, spacing, fonts, animations.

The live site at https://harborlineband.com/ also serves this same build, so you can use that too.

---

## Tech Stack (use exactly these unless there's a strong reason not to)

| Concern | Choice | Why |
|---|---|---|
| Build tool | **Vite 5** | Fast, simple, Lovable used it |
| Framework | **React 19** + **TypeScript** | Matches original |
| Routing | **react-router-dom v7** | Matches original |
| Animations | **framer-motion** | Matches original |
| Icons | **lucide-react** | Matches original |
| SEO meta | **react-helmet-async** | Matches original |
| Styling | **Custom CSS in `src/index.css`** | NO Tailwind. NO CSS modules. NO styled-components. Match what was there. |
| State (if needed) | React hooks only | Lightweight, no Zustand/Redux unless absolutely required |
| Forms | Plain React + Netlify Forms | Lead form needs to land somewhere |
| Linting | ESLint + typescript-eslint | Standard |

### Do NOT add without explicit Josh approval:
- Tailwind CSS (or any utility-CSS framework)
- shadcn/ui or any heavy component library
- Redux, Zustand, Jotai, etc.
- Storybook
- Testing libraries (skip tests for v1; add later if Josh wants)
- New deps in general — keep dependencies minimal

---

## Branch & Deploy Strategy

**Critical: don't break the live site during the rebuild.**

1. **Create branch `feat/source-rebuild`** off main. All rebuild work happens here.
2. `main` continues to serve the static build. Live site is untouched.
3. Each push to `feat/source-rebuild` triggers a **Netlify deploy preview** (separate URL, like `feat-source-rebuild--harborline-live.netlify.app`). Use these previews to validate.
4. When the rebuild is pixel-perfect against the static reference and everything works:
   - Update `netlify.toml` to switch from no-build static to `npm run build` with publish dir `dist`
   - Delete the old static files from the repo (index.html in root, /assets/, etc.) — they'll be regenerated as `dist/index.html` etc. by the build
   - Merge `feat/source-rebuild` to `main` in one PR
   - Verify the production deploy works, harborlineband.com still serves correctly
5. If anything breaks, the previous static-build commit is one `git revert` away

---

## Step-by-Step Rebuild Plan

### Phase 1 — Scaffold + Foundation (~2 hours)

1. On `feat/source-rebuild` branch, create a `src/` directory at the repo root (alongside the existing static files — they coexist for now)
2. Init Vite project IN PLACE — `npm create vite@latest .` → React + TypeScript template, then merge into existing repo (preserve `.git`, `_redirects`, `netlify.toml`, the old static files)
3. Add deps: `react-router-dom`, `framer-motion`, `lucide-react`, `react-helmet-async`
4. Configure `vite.config.ts` — output to `dist/`, base `/`, ensure assets get hashed filenames matching the existing pattern (or just let Vite pick its own — the URLs are SPA-routed so it doesn't matter)
5. Update `netlify.toml` to add commented-out build config that we'll switch on at the end:
   ```toml
   # When source rebuild is ready, switch publish to "dist" and command to "npm run build"
   ```
6. Create `src/main.tsx`, `src/App.tsx`, `src/index.css`
7. Set up router with empty page stubs for: `/`, `/about`, `/services/:slug`, `/locations/:slug`, `/songs`, `/contact`, `/faq`, `/admin`
8. Get `npm run dev` working with a placeholder page

**Verify:** `npm run dev` shows the placeholder. Branch pushed, Netlify deploy preview generates a URL. Don't merge anything to main yet.

### Phase 2 — Layout Shell + Hero (~3 hours)

Components to build, matching the static reference exactly:

1. **`src/components/Navbar.tsx`** — top nav with HARBORLINE logo, links: Ensembles, Occasions, Where We Perform, Songs, About, FAQ, plus "REQUEST A QUOTE" button + lock icon. Sticky, transparent over hero, dark-on-scroll. Mobile burger menu.
2. **`src/components/Footer.tsx`** — match the dark footer from the static build (copy text from there)
3. **`src/components/Hero.tsx`** — full-bleed band photo with dark overlay, "BALTIMORE'S PREMIER EVENT BAND" purple accent text, subtitle "The best of the old and the best of the new—one nonstop, feel-good set for events, weddings, and celebrations across the DMV.", REQUEST A QUOTE + SEE US LIVE buttons, scroll indicator
4. **`src/components/SEO.tsx`** — react-helmet-async wrapper, takes title/description/canonical props
5. **`src/pages/Home.tsx`** — composes Hero + below-the-fold sections (100+ Song Repertoire, Professional Sound, Dynamic Vocalists badges; "WHO WE ARE / ABOUT HARBORLINE" section)

Image assets to copy from `~/Documents/harborline-recovery/assets/` into `src/assets/` (or `public/`):
- `band-hero-*.jpg` (hero background)
- `hero-band-*.jpg`
- `logo-*.png`
- `group-portrait-*.jpg`, `group-laughing-*.jpg`, `group-waterfront-*.webp`
- All `member-*.jpg` and `portrait-*.jpg`
- All venue photos (peabody, cylburn, evergreen, belvedere, four-seasons, cloisters, bo-railroad, avam)

**Verify:** Home page loads, looks identical to live site for the parts you've built. Navbar works, mobile menu works.

### Phase 3 — Content Pages (~4 hours)

1. **`src/data/services.ts`** — typed array of services. Inspect static build to find the 4: Wedding Bands, Corporate Entertainment, Private Party DJs, Jazz Ensembles. Each: slug, name, description, hero image, what's included, CTA.
2. **`src/data/locations.ts`** — typed array. From static build: Washington D.C., Baltimore, Annapolis, Bethesda, Alexandria, Silver Spring, etc. Each: slug, name, description, local SEO copy.
3. **`src/data/songs.ts`** — repertoire list. Categories or by-decade. Pull text from live site.
4. **`src/pages/Services.tsx`** + **`src/pages/ServicePage.tsx`** — index page + dynamic detail page driven by services data
5. **`src/pages/Locations.tsx`** + **`src/pages/LocationPage.tsx`** — same pattern
6. **`src/pages/Songs.tsx`** — repertoire page
7. **`src/pages/About.tsx`** — band bio, member section (each member has portrait + name + role + short bio)
8. **`src/pages/FAQ.tsx`** — accordion-style Q&A. Pull from live site.

**Verify:** Every route renders matching the live site visually. Click through every link. No 404s.

### Phase 4 — Contact, Forms, Polish, Deploy (~3 hours)

1. **`src/pages/Contact.tsx`** + **`src/components/LeadForm.tsx`** — Lead capture form. Use **Netlify Forms** (add `data-netlify="true"` and a hidden `form-name` input, no JS backend needed). Form fields based on what the live site collects: name, email, phone, event date, event type, venue, guest count, message.
2. **Animations** — use framer-motion to match the original site's scroll-triggered fade-ins, hover effects, page transitions. Reference the static build's behavior in browser.
3. **Mobile responsive** — test every page at iPhone, iPad, desktop widths. Match the live site.
4. **SEO meta** — every page sets title/description/canonical via `<SEO>`. Keep the existing index.html meta as the baseline.
5. **Facebook Pixel + Google Identity Services** — copy the script tags from `index.html` into `index.html` of the new build. Don't change pixel id (`898390739213630`).
6. **Final visual diff** — open live site and dev preview side by side. Walk every page. Note any pixel differences, fix.
7. **Switch Netlify build config:**
   - Update `netlify.toml`:
     ```toml
     [build]
       publish = "dist"
       command = "npm run build"
     ```
   - Delete the static files from repo root: `index.html`, `/assets/`, `manifest.json`, `_redirects` (move to `public/_redirects` so Vite copies it), `favicon.*`, `apple-touch-icon.png`, `icon-*.png` — move all to `public/` so Vite includes them in `dist/`
8. **Push, verify deploy preview matches live site exactly**, then **merge to main**

**Verify after merge:** harborlineband.com still loads. SSL still works. Forms submit successfully.

---

## What to Do When You Get Stuck

- **Ask Josh.** Don't guess on content (band bios, venue photos, copy). The static build is the visual ground truth, but if something is unclear, ask.
- **Don't add dependencies without checking.** If you think you need shadcn/Tailwind/etc., ask first.
- **Don't try to merge half-done work to main.** Live site stays clean.
- **Don't push to `Langstonia/harborline`.** That's not Josh's repo.
- **If you accidentally break the dev server**, don't panic. `git stash`, fix the error, `git stash pop`.

---

## Reference Quick-Links

| Resource | Where |
|---|---|
| Live site (current static build) | https://harborlineband.com/ |
| Static recovery (visual reference) | `~/Documents/harborline-recovery/` (run `python3 -m http.server 8765` to preview) |
| GitHub repo (this one) | https://github.com/joshjmiller-MGMT/harborline-live |
| Netlify project | https://app.netlify.com/projects/harborline-live |
| Netlify support ticket about deletion | Case 556908 (Gmail thread with Ralph A.) |
| Cowork project_instructions (latest) | `~/Documents/Claude/Projects/Harborline Website/PROJECT_INSTRUCTIONS_v3.md` |
| Old (do-not-touch) repo | `Langstonia/harborline` (Jeffrey Lang's, archived) |

---

## What's NOT Part of This Rebuild (defer)

- Admin panel (`/admin` route) — old build had ADMIN/BSE123 login. Reimplement only if Josh asks.
- Supabase integration (`calfmvbitvsgkrkmpwcw`) — used minimally; reintegrate only if Josh asks.
- Practice Log / Claude Log features — separate from public site, defer.
- Any new features not in the static reference build — get Josh to spec them after v1 is shipped.

---

## Done Definition

The rebuild is "done" when:
1. harborlineband.com serves the new React-built site (dist/ output, `npm run build`)
2. Every page from the static reference is reachable and visually matches
3. Lead form submits to a real endpoint (Netlify Forms inbox)
4. Mobile responsive matches the original
5. Page load time <= original (Lighthouse score equal or better)
6. All meta tags, FB Pixel, Google services preserved
7. The `Outstanding Items` checklist in `PROJECT_INSTRUCTIONS_v3.md` is updated to reflect "Phase 2 complete"
8. Josh has clicked through and approved the live result

---

## After Done — Hand Off

Update `PROJECT_INSTRUCTIONS_v3.md`:
- Remove the "Phase 2 (Pending)" section
- Update "Editability Limits" to reflect full source editability
- Add "Stack" section listing the actual deps installed
- Update workflow patterns to reflect "make a real source edit, push, Netlify builds"
